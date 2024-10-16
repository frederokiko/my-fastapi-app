// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-connection-status',
//   templateUrl: './connection-status.component.html',
//   styleUrls: ['./connection-status.component.scss']
// })
// export class ConnectionStatusComponent {
//   @Input() isConnected: boolean = false;
// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss']
})
export class ConnectionStatusComponent implements OnInit, OnDestroy {
  isConnected: boolean = false;
  private authSubscription!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.isConnected$.subscribe(
      status => this.isConnected = status
    );
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}