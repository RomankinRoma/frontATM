import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransferModel} from '../Models/transfer.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class TransferService {

  constructor(private http: HttpClient) {
  }

  createTransfer(transfer: TransferModel): Observable<any> {
    return this.http.post('/transfers/create', transfer);
  }

  getUserTransfers(id: number): Observable<any> {
    return this.http.get(`/transfers/get/sender?senderId=${id}`);
  }

  getAllTransfers(): Observable<any>{
    return this.http.get(`/transfers/all`);
  }

  // @ts-ignore
  getUserTransfersByReceiver(senderId: number, receiverId: number): Observable<any> {
    return this.http.get(`/transfers/get?senderId=${senderId}&receiverId=${receiverId}`);
  }

  getUserTransfersByAmount(senderId: number, amount: number): Observable<any> {
    return this.http.get(`/transfers/get?senderId=${senderId}&amount=${amount}`);
  }

  getUserTransfersByDateAfter(id: number, date: string): Observable<any> {
    return this.http.get(`/transfers/get/dateAfter?senderId=${id}&date=${date}`);
  }

  getUserTransfersByDateBefore(id: number, date: string): Observable<any> {
    return this.http.get(`/transfers/get/dateBefore?senderId=${id}&date=${date}`);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`/transfers/all/${id}`);
  }
}
