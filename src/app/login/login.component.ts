import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

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
  test : boolean | undefined;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('access_token'))
      this.test=true
    else
      this.test=false
    
  }
  login() {
    console.log("je rentre dans la fonction",this.username,this.password)
    this.apiService.login(this.username, this.password).subscribe({
      next :(response => {
        this.token = response.access_token;
        console.log('Token:', this.token);
        // Stocker le token dans le Local Storage
        localStorage.setItem('access_token', this.token);
        this.test=true;
        this.errorMessage='';
        //ici rediriger vers detail-pilote
        this.router.navigate(['/driver-points']);
      }),
      error :error => {
        this.errorMessage="    🚨 Pseudo ou password incorect 🚨";
        console.error('Login error:', error);
      }
    }) 
    ;
  }
  protectedRoute() {
    const token = localStorage.getItem('access_token'); // Récupérer le token depuis le Local Storage
    if (token) {
      this.apiService.getProtectedData(token).subscribe({
        next: (response) => {
          console.log('Protected data:', response);
        },
        error: (error) => {
          console.error('Access error:', error);
        }
      });
    } else {
      console.error('No token found');
    }
  }
  logout() {
    localStorage.removeItem('access_token');
    this.test=false;
    console.log('Token supprimé et deconnexion');
  }
  
}

