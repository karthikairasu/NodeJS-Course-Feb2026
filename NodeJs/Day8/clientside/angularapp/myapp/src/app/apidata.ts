import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModal, UserProfile } from './usermodal';

@Injectable({
  providedIn: 'root',
})

export class Apidata {
  constructor(private http: HttpClient) {}
  getData(){
    return this.http.get('http://localhost:3000/about');
  }

  checkLogin(user:UserModal){
    return this.http.post('http://localhost:3000/getdata', user);
  }
  insertUser(user:UserProfile){
    return this.http.post('http://localhost:3000/insert', user);
  }
}
