import {User} from './user.model';

export class TransferModel {
  id: number;
  amount: number;
  receiverId: number;
  senderId: number;
  date: Date;


  constructor(amount: number, receiverId: number, senderId: number) {
    this.amount = amount;
    this.receiverId = receiverId;
    this.senderId = senderId;
  }
}
