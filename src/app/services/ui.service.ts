import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAlert = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleShowAlert(color = '', msg = ''): void {
    if (msg && color) this.showAlert = true;
    else this.showAlert = false;
    this.subject.next({ showAlert: this.showAlert, msg, color });
  }

  onToggleShowAlert(): Observable<any> {
    return this.subject.asObservable();
  }
}
