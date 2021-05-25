import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'banksystem';

  user = this.userLog.user;
  loggedIn: boolean = this.userLog.loggedIn;



  constructor(public userLog: UserService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.loggedIn = this.userLog.loggedIn;
    console.log("user" + this.loggedIn);
  }


}
