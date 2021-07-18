import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Photo } from '../../photo/photo';

@Directive({
	selector: '[photoOwenerOnly]'
})
export class PhotoOwenerOnlyDirective implements OnInit{

	@Input() owenedPhoto: Photo;

	constructor(
		private element: ElementRef<any>,
		private renderer: Renderer2,
		private userService: UserService
	){}

	ngOnInit(): void {
		this.userService
			.getUser()	
			.subscribe(user => {
				if(!user || user.id != this.owenedPhoto.userId){
					this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
				}
			});
	}
}