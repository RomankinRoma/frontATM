import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../Models/user.model';
import {TransferModel} from '../../Models/transfer.model';
import {TransferService} from '../../service/transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  number: string;
  amount: number;

  userReceiver: User;
  userSender = this.userLog.user;
  checkReceiver: boolean = false;

  getReceiver(phoneNum: string, amount: number) {
    if (this.userSender.phoneNumber != phoneNum) {

      this.userLog.getByPhoneNumber(phoneNum).subscribe(
        res => {
          this.userReceiver = res;
          console.log(this.userReceiver);
          this.checkReceiver = true;
        }
      );
    } else {
      this.userReceiver = null;
      alert('Вы не можете отправить самому себе!');
    }
  }

  send(senderId: number, receiverId: number, amount: number) {
    if (this.checkReceiver == true && this.userReceiver != null) {
      let transfer = new TransferModel(amount, receiverId, senderId);
      this.transferServ.createTransfer(transfer).subscribe(res => {
        transfer = res;
        this.userLog.user.balance = this.userLog.user.balance - transfer.amount;
        console.log(transfer);
        this.router.navigate(['checkpage']);
      });

    }
  }


  ngOnInit(): void {
  }

  constructor(private userLog: UserService, private transferServ: TransferService, private router: Router) {
  }

}
