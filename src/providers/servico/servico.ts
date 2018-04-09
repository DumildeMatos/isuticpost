import { Injectable } from '@angular/core';
import { Http, Headers , RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ServicoProvider {

  baseUrl: string;
  getcomentUrl :string;
  setcomentUrl :string;
  likeComentUrl: string;
  feedUrl: string;

  constructor(public http: Http) {
    this.http = http;
    this.baseUrl = 'http://192.168.43.152/isuticPostAPI/admin/html/getPosters.php';
    this.getcomentUrl = 'http://192.168.43.152/isuticPostAPI/admin/html/getComments.php';
    this.setcomentUrl = 'http://192.168.43.152/isuticPostAPI/admin/html/setComments.php';
    this.likeComentUrl = 'http://192.168.43.152/isuticPostAPI/admin/html/like-acoment.php';
    this.feedUrl = 'http://192.168.43.152/isuticPostAPI/admin/html/feeds.php';
  }

  getposts(){
    return this.http.get(this.baseUrl)
      .map(res => res.json())
  }

  getComments(params){
    let headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');

    let options = new RequestOptions({headers: headers});
    return this.http.post(this.getcomentUrl, params, options )
    .map(res => res.json())
    .do(data => console.log(data))  

  }
  
  curtirPost(params){
    let headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
    
      return this.http.post(this.likeComentUrl, params,{
      headers: headers,
      method: "POST",
    })
    .map((res:Response) => {res})
  }

  setComments(params){
    
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
 
    return this.http.post(this.setcomentUrl, params,{
      headers: headers,
      method: "POST",
    }).map((res:Response) => { res })
  
  }

  setFeed(params){
    
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
 
    return this.http.post(this.feedUrl, params,{
      headers: headers,
      method: "POST",
    }).map((res:Response) => { res })
  
  }



}
