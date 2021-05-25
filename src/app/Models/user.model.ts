export  class User {
  id: number;

  username: string;

  password: string;

  fullname: string;

  amount: number;

  phoneNumber: string;


  constructor(id: number, username: string, password: string, fullname: string, amount: number, phoneNumber: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.fullname = fullname;
    this.amount = amount;
    this.phoneNumber = phoneNumber;
  }
}



