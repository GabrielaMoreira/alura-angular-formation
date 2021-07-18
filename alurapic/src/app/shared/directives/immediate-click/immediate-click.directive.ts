import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDectorService } from 'src/app/core/platform-detector/platform.detector.service';

@Directive({
	selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit{

	constructor(
		private element: ElementRef<any>,
		private platformDetector: PlatformDectorService){	
	}
	
	ngOnInit(): void {
		this.platformDetector.isPlatformBrowser &&
			this.element.nativeElement.click();
	}
}