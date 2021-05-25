import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {host} from '@angular-devkit/build-angular/src/test-utils';
import {timer} from 'rxjs';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  notify: string = "We'll never share your account with anyone else.";

  time: number;
  interval;


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.userService.login(username, password).subscribe(res => {
      this.userService.user = res;
      if (res != null){
        this.notify = " We'll never share your account with anyone else."
        this.userService.loggedIn = true;
        console.log(this.userService.user);
        console.log(this.userService.loggedIn);
        this.router.navigate(['profile']);
      }else {
        this.notify = "Не правильный пароль или пользователь не найден!";

        setTimeout(()=>

        {
          console.log("Идет таймер 5 сек")
          this.notify = " We'll never share your account with anyone else.";
        },5000)

      }

    });
  }

}
