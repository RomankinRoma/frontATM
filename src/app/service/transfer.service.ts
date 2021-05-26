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
    return this.http.post('/transfer/create', transfer);
  }

  getUserTransfers(id: number): Observable<any> {
    return this.http.get(`/transfer/get/sender/${id}`);
  }

  getAllTransfers(): Observable<any>{
    return this.http.get(`/transfer/all`);
  }

  // @ts-ignore
  getUserTransfersByReceiver(senderId: number, receiverId: number): Observable<any> {
    return this.http.get(`/transfer/get?sender=${senderId}&receiver=${receiverId}`);
  }

  getUserTransfersByAmount(sender: number): Observable<any> {
    return this.http.get(`/transfer/get/sender/${sender}`);
  }

  getUserTransfersByDateAfter(id: number, date: string): Observable<any> {
    return this.http.get(`/transfer/get/dateAfter?senderId=${id}&date=${date}`);
  }

  getUserTransfersByDateBefore(id: number, date: string): Observable<any> {
    return this.http.get(`/transfer/get/dateBefore?senderId=${id}&date=${date}`);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`/transfer/all/${id}`);
  }
}
