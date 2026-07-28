import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Apidata } from './apidata';
import { FormsModule } from '@angular/forms';
import { UserModal } from './usermodal';
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
  constructor(private apidata: Apidata) {
    console.log("AppComponent initialized");
  }

  users: UserModal= new UserModal();

  onSubmit() {
    console.log("Forms submitted",this.users);
    this.apidata.checkLogin(this.users).subscribe((data) => {
      console.log('Login Response:', data);
    })
  }

  ngOnInit() {
    this.apidata.getData().subscribe((data) => {
      console.log('Data received:', data);
    });
  }
}
