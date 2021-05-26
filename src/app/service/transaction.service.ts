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
    return this.http.post('/transaction/create', transaction);
  }

  getUserTransactions(id: number): Observable<any> {
    return this.http.get(`/transaction/get/user/${id}`);
  }


  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`/transaction/${id}`);
  }

}
