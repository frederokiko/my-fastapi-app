import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
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
  isMenuOpen = false;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;

  // Ferme le menu si on clique en dehors
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.dropdownMenu.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
}
closeMenu() {
  this.isMenuOpen = false;
}

}