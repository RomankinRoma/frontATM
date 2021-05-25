export class TransactionModel {

  id: number;
  payerId: number;
  amount: number;
  type: string;
  createdDate: Date;
  commission: number;
  value: string;


  constructor(payerId: number, amount: number, type: string, value: string , commission: number) {
    this.payerId = payerId;
    this.amount = amount;
    this.type = type;
    this.value = value;
    this.commission = commission;
  }
}
