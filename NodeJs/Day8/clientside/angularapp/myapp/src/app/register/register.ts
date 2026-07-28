import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../usermodal';
import { Apidata } from '../apidata';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  users: UserProfile= new UserProfile();
  constructor(private apidata: Apidata) {
    console.log("RegisterComponent initialized");
  }

  onSubmit(){
    console.log("Forms submitted",this.users);
    this.apidata.insertUser(this.users).subscribe((response) => {
      console.log('Response from server:', response);
    })
  }

}
