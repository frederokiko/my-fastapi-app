import { Component } from '@angular/core';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  username = '';
  password = '';
  email = '';
  successMessage = '';
  errorMessage = '';
  password1 ='';

  constructor(private apiService: ApiService) {}

  createUser() {
    if (this.password==this.password1) {
       this.apiService.createUser(this.username, this.password, this.email).subscribe({
      next: response => {
        this.successMessage = 'User créé !';
        this.errorMessage = '';
        // Réinitialiser le formulaire
        this.username = '';
        this.password = '';
        this.password1='';
        this.email = '';
      },
      error: error => {
        console.error('Erreur de création user:', error);
        this.successMessage = '';
        this.errorMessage = 'Erreur,veuillez réessayer.';
      }
    });
    }else{
      this.errorMessage = 'Vérifier votre mot de passe !';
      this.password='';
      this.password1=''
    }
   
  }
}
