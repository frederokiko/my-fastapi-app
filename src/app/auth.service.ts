import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isConnectedSubject = new BehaviorSubject<boolean>(this.checkInitialConnection());
  isConnected$ = this.isConnectedSubject.asObservable();

  private checkInitialConnection(): boolean {
    return !!localStorage.getItem('double verif');
  }

  setConnectionStatus(status: boolean) {
    this.isConnectedSubject.next(status);
    if (status) {
      localStorage.setItem('double verif', 'tu es bien connecté');
    } else {
      localStorage.removeItem('double verif');
    }
  }
}
