import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-abandon-annee',
  templateUrl: './abandon-annee.component.html',
  styleUrls: ['./abandon-annee.component.scss']
})
export class AbandonAnneeComponent implements OnInit {
  abandonAnnee: any[] = [];
  token: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getAbandonAnnee(this.token).subscribe({
        next: (data) => {
          this.abandonAnnee = data.data;
          console.log(this.abandonAnnee);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des abandons par année', err);
        }
      });
    }
  }
}

