export class TransactionModel {

  id: number;
  userId: number;
  amount: number;
  service: string;
  createdDate: Date;


  constructor(payerId: number, amount: number, type: string) {
    this.userId = payerId;
    this.amount = amount;
    this.service = type;
  }
}
