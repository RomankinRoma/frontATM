import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../Models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userServ: UserService,private router: Router) { }

  checkMe: boolean = false;


  fullName: string;
  password1: string;
  password2: string;
  username: string;
  phoneNumber:string;
  user = new User(0, "", "", "", 0, "");

  create(user:User,pas2:string){
    if(user.password == pas2){
      this.userServ.createUser(user).subscribe(res=>{
        console.log(res);
        this.router.navigate(['login']);
      });
    }
  }

  deleteUser(id: number){
    this.userServ.deleteUser(id);
  }

  getUser(id: number){
    this.userServ.getUser(id);
  }

  updateUser(user: User){
    this.userServ.updateUser(user);
  }

  ngOnInit(): void {
  }

}
