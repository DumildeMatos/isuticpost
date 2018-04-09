import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalCommentPage } from './../modal-comment/modal-comment';
import { ServicoProvider } from './../../providers/servico/servico';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-post-info',
  templateUrl: 'post-info.html',
})
export class PostInfoPage{
  
  idPost: number;
  post: any;
  comments :any;
  like : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,private servico: ServicoProvider, public socialSharing: SocialSharing) {
    this.post = navParams.get('post'); 
    this.like = 0;

  }

  CommentModal(idPost) {
    let modal = this.modalCtrl.create(ModalCommentPage, {
      idPost:idPost
    });
    modal.present();
  }
  
  curtir(){
    let params = {
      likes: this.like++,
      idPost : this.post.idPost
    }
    this.servico.curtirPost(params).subscribe(data => console.log(data) );
    console.log(params);
  }
  
  partilhar(){
    // Check if sharing via email is supported
    this.socialSharing.share(this.post.title,this.post.content,this.post.img,null).then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
  }

  getComments(){
    let params = {
      idPost : this.post.idPost
    }
    this.servico.getComments(params).subscribe(res => {
      this.comments = res;
      console.log(res);
    });
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostInfoPage');
    this.getComments();    
  }

  

}
