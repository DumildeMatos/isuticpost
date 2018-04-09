import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ServicoProvider } from './../../providers/servico/servico';
import 'rxjs/Rx';


@IonicPage()
@Component({
  selector: 'page-modal-comment',
  templateUrl: 'modal-comment.html',
})
export class ModalCommentPage {
  
  
  idPost : number;

  public com = {
    nome: '',
    coment: '',
    idPost: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public  viewCtrl: ViewController, private servico: ServicoProvider) {
    this.idPost = navParams.get('idPost'); 
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  Comentar(com){
    com.idPost = this.idPost;
    
    let params = {
      nome: com.nome,
      coment: com.coment,
      idPost : com.idPost,
      estado: 0
    }
    console.log(params);
    this.servico.setComments(params).subscribe( data => console.log(data) );
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log(this.idPost);
  }

}
