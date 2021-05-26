export  class User {
  id: number;

  username: string;

  password: string;

  fullName: string;

  balance: number;

  phoneNumber: string;


  constructor(id: number, username: string, password: string, fullname: string, amount: number, phoneNumber: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.fullName = fullname;
    this.balance = amount;
    this.phoneNumber = phoneNumber;
  }
}



