import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransactionModel} from '../Models/transaction.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class TransactionService {

  constructor(private http: HttpClient) {
  }

  createTransaction(transaction: TransactionModel): Observable<any> {
    return this.http.post('/transactions/create', transaction);
  }

  getUserTransactions(id: number): Observable<any> {
    return this.http.get(`/transactions/all?id=${id}`);
  }

  getUserTransaction(id: number): Observable<any> {
    return this.http.get(`/transactions/all/${id}`);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`/transactions/${id}`);
  }

  getUserTransactionsByType(id: number, type: string): Observable<any> {
    return this.http.get(`/transactions/all/type?id=${id}&type=${type}`);
  }

  getUserTransactionsByAmount(id: number, amount: number): Observable<any> {
    return this.http.get(`/transactions/all/type?id=${id}&amount=${amount}`);
  }
}
