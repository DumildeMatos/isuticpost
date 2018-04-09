import { Component } from '@angular/core';
import { NavController, ModalController,ToastController } from 'ionic-angular';

import { ServicoProvider } from './../../providers/servico/servico';

import { PostInfoPage } from './../post-info/post-info';
import { ContactPage } from './../contact/contact';
import { AboutPage } from './../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posters : any;
  constructor(public navCtrl: NavController, private servico : ServicoProvider, public modalCtrl: ModalController, private toastCtrl: ToastController) {


  }
  
  ngOnInit(){
    this.getPosts();
  }
  
  getPosts(){
    this.servico.getposts().subscribe(res => {
      this.posters = res;
      console.log(res);
    });
  }

  verPost(post){
    this.navCtrl.push(PostInfoPage, {
      post: post
    });
  }
  
  openFeedBack(){
    let modal = this.modalCtrl.create(ContactPage, {});
    modal.present();
  }

  openInfo(){
    let modal = this.modalCtrl.create(AboutPage,{});
    modal.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getPosts();

    setTimeout(() => {
      let toast = this.toastCtrl.create({
        message: 'Lista Atualizada!',
        duration: 3000,
        position: 'center'
      });
      toast.present();
      refresher.complete();
    }, 2000);
  }
}
