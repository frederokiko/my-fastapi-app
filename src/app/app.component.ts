import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-fastapi-app';
  isConnected :boolean =false ;
  private authSubscription!: Subscription;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.updateConnectionStatus();
    window.addEventListener('storage', () => this.updateConnectionStatus());
    this.authSubscription = this.authService.isConnected$.subscribe(
      status => this.isConnected = status)
  }

  private updateConnectionStatus() {
    this.isConnected = !!localStorage.getItem('access_token');
  }
}
