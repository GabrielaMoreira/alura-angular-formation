import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
	selector: 'ap-photo-comments',
	templateUrl: './photo-comments.component.html',
	styleUrls: ['photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit{
	
	@Input() photoId: number;
	commentForm: FormGroup;

	comments$: Observable<PhotoComment[]>;
	
	constructor(
		private photoService: PhotoService,
		private formBuilder: FormBuilder,
		private alertService: AlertService,
		private userService: UserService
		){

	}

	ngOnInit(): void {
		
		this.comments$ = this.photoService.getComments(this.photoId);
		this.commentForm = this.formBuilder.group({
			comment: ['', Validators.maxLength(300)]
		});
	}
	
	save() {
		const comment = this.commentForm.get('comment').value as string;
		this.comments$ = this.photoService
				.addComment(this.photoId, comment)
				.pipe(switchMap(() => this.photoService.getComments(this.photoId)))
				.pipe(tap(() => {
					this.commentForm.reset();
					this.alertService.success("Comment publish with success.", true);
				  },
				  err =>{
					console.log(err);
					this.alertService.warning('Could not delete de photo.', true)
				  }));
	}
	
}