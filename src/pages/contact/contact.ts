import { Component } from '@angular/core';
import { NavController, ViewController ,ToastController} from 'ionic-angular';
import { ServicoProvider } from './../../providers/servico/servico';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  feedback = {
    nome: '',
    email: '',
    content: ''
  }
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private servico : ServicoProvider, public toastCtrl: ToastController) {

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  EnviarFeed(feedback){
   
    let params = {
      nome: feedback.nome,
      email: feedback.email,
      content : feedback.content
    }

    this.servico.setFeed(params).subscribe( data => console.log(data) );
    this.viewCtrl.dismiss();
    let toast = this.toastCtrl.create({
      message: 'Feedback enviado com sucesso!',
      duration: 3000,
      position: 'top'
    });
    toast.present() ? feedback.content !='': 'Preencha todos os campos' ;
  }
}
