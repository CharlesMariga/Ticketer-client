import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAlert = false;
  private showPageLoader = false;
  private showModal = false;
  private aletSubject = new Subject<any>();
  private pageLoaderSubject = new Subject<any>();
  private modalAlertSubject = new Subject<any>();

  constructor() {}

  toggleShowAlert(color = '', msg = ''): void {
    if (msg && color) this.showAlert = true;
    else this.showAlert = false;
    this.aletSubject.next({ showAlert: this.showAlert, msg, color });
  }

  onToggleShowAlert(): Observable<any> {
    return this.aletSubject.asObservable();
  }

  toggleShowLoader(): void {
    this.showPageLoader = !this.showPageLoader;
    this.pageLoaderSubject.next(this.showPageLoader);
  }

  onToggleShowLoader(): Observable<any> {
    return this.pageLoaderSubject.asObservable();
  }

  toggleShowModal(): void {
    this.showModal = !this.showModal;
    this.modalAlertSubject.next(this.showModal);
  }

  onToggleShowModal(): Observable<any> {
    return this.modalAlertSubject.asObservable();
  }
}
