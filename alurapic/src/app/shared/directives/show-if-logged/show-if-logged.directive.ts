import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
	selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit{

	currentyDisplay: string;

	constructor(
		private element: ElementRef<any>,
		private renderer: Renderer2,
		private userService: UserService
	){}

	ngOnInit(): void {

		this.currentyDisplay = getComputedStyle(this.element.nativeElement).display;

		this.userService.getUser().subscribe(user => {
			if(user){
				this.renderer.setStyle(this.element.nativeElement, 'display', this.currentyDisplay);
			}else{
				this.currentyDisplay = getComputedStyle(this.element.nativeElement).display;
				this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
			}
		})
	}
}