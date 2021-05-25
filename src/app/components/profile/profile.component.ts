import {Component, OnInit, PipeTransform} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../Models/user.model';
import {TransferService} from '../../service/transfer.service';
import {TransferModel} from '../../Models/transfer.model';
import {TransactionService} from '../../service/transaction.service';
import {TransactionModel} from '../../Models/transaction.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private userLog: UserService,private transferServ: TransferService,private tsActionServe: TransactionService) { }

  transfers: TransferModel[];
  transActions: TransactionModel[];

  searchts: boolean = false;
  searchtf: boolean = false;

  // historyOfTransfers(){
  //   console.log("This user id: " + this.user.id);
  //     this.transferServ.getUserTransfers(this.user.id).subscribe(res=>
  //     {
  //       this.transfers = res;
  //       console.log(this.transfers);
  //     })
  // }



  user = this.userLog.user;
  sTransaction: '';
  sTransfer: '';

  historyOfTransfers(){

    this.transferServ.getAllTransfers().subscribe(res=>
    {
      this.transfers = res;
      console.log(this.transfers);
      this.searchtf = true;
    })
  }



  historyOfTransactions(){
    this.tsActionServe.getUserTransactions(this.user.id).subscribe(res =>
    {
      this.transActions = res;
      console.log(this.transActions);
      this.searchts = true;
    })
  }

  ngOnInit(): void {
  }


}
