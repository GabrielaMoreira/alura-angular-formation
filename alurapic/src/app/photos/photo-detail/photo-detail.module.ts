import { NgModule } from '@angular/core';
import { PhotoDetailComponet } from './photo-detail.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwenerOnlyDirective } from './photo-owener-only/photo-owener-only.directives';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [
    PhotoDetailComponet,
    PhotoCommentsComponent,
    PhotoOwenerOnlyDirective
  ],
  exports:[
  PhotoDetailComponet,
  PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
    ShowIfLoggedModule
  ]
})
export class PhotoDetailModule { }
