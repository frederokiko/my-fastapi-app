// import { Component } from '@angular/core';
// import { ApiService } from '../api.service';
// import { NgModel } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   username = '';
//   password = '';
//   token = '';
//   errorMessage = '';
//   test : boolean | undefined;
//   constructor(private apiService: ApiService, private router: Router) {}

//   ngOnInit() {
//     if (localStorage.getItem('access_token'))
//       this.test=true
//     else
//       this.test=false
    
//   }
//   login() {
//     console.log("je rentre dans la fonction",this.username,this.password)
//     this.apiService.login(this.username, this.password).subscribe({
//       next :(response => {
//         this.token = response.access_token;
//         console.log('Token:', this.token);
//         // Stocker le token dans le Local Storage
//         localStorage.setItem('access_token', this.token);
//         this.test=true;
//         this.errorMessage='';
//         //ici rediriger vers detail-pilote
//         this.router.navigate(['/driver-points']);
//       }),
//       error :error => {
//         this.errorMessage="    🚨 Pseudo ou password incorect 🚨";
//         console.error('Login error:', error);
//       }
//     }) 
//     ;
//   }
//   protectedRoute() {
//     const token = localStorage.getItem('access_token'); // Récupérer le token depuis le Local Storage
//     if (token) {
//       this.apiService.getProtectedData(token).subscribe({
//         next: (response) => {
//           console.log('Protected data:', response);
//         },
//         error: (error) => {
//           console.error('Access error:', error);
//         }
//       });
//     } else {
//       console.error('No token found');
//     }
//   }
//   logout() {
//     localStorage.removeItem('access_token');
//     this.test=false;
//     console.log('Token supprimé et deconnexion');
//   }
  
// }


// version qui marche

import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  token = '';
  errorMessage = '';
  isConnected = false;

  constructor(
    private apiService: ApiService, 
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isConnected = !!localStorage.getItem('access_token');
  }

  login() {
    this.apiService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.token = response.access_token;
        localStorage.setItem('access_token', this.token);
        this.isConnected = true;
        this.authService.setConnectionStatus(true);
        this.errorMessage = '';
        this.router.navigate(['/driver-points']);
      },
      error: (error) => {
        this.errorMessage = "🚨 Pseudo ou password incorrect 🚨";
        console.error('Login error:', error);
      }
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isConnected = false;
    this.authService.setConnectionStatus(false);
    console.log('Token supprimé et déconnexion');
  }
}



//version inter qui va pas à voir demain




// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   username = '';
//   password = '';
//   token = '';
//   errorMessage = '';
//   isConnected = false;

//   constructor(
//     private apiService: ApiService, 
//     private router: Router,
//     private authService: AuthService
//   ) {}

//   ngOnInit() {
//     this.authService.isConnected$.subscribe(status => {
//       this.isConnected = status;
//     });
//   }

//   login() {
//     this.apiService.login(this.username, this.password).subscribe({
//       next: (response) => {
//         this.token = response.access_token;
//         localStorage.setItem('access_token', this.token);
//         this.authService.setConnectionStatus(true);
//         this.errorMessage = '';
//         this.router.navigate(['/driver-points']);
//       },
//       error: (error) => {
//         this.errorMessage = "🚨 Pseudo ou password incorrect 🚨";
//         console.error('Login error:', error);
//       }
//     });
//   }

//   logout() {
//     localStorage.removeItem('access_token');
//     this.authService.setConnectionStatus(false);
//     console.log('Token supprimé et déconnexion');
//   }
// }