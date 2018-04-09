import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCommentPage } from './modal-comment';

@NgModule({
  declarations: [
    ModalCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCommentPage),
  ],
})
export class ModalCommentPageModule {}
