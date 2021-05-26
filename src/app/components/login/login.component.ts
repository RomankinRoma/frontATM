import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {host} from '@angular-devkit/build-angular/src/test-utils';
import {timer} from 'rxjs';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {HttpResponse} from '@angular/common/http';
import * as http from 'http';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  notify: string = 'We\'ll never share your account with anyone else.';

  time: number;
  interval;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login(username: string, password: string) {
    this.userService.auth(username, password).subscribe(value => {
      localStorage.setItem('token', value.headers.get('authorization'));
      this.userService.getUserByUsername(username).subscribe(res => {
          this.userService.user = res;
        }
      );
    });
  }

}
