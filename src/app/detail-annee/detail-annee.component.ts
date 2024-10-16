import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-detail-annee',
  templateUrl: './detail-annee.component.html',
  styleUrl: './detail-annee.component.scss'
})
export class DetailAnneeComponent implements OnInit {
  year :number | undefined;
  rank :number | undefined;
  pointsData: any[] = [];
  token = '';

  constructor(private apiService: ApiService) {}
  ngOnInit(): void{this.token = localStorage.getItem('access_token') || '';}
  getResult_Points() {
    
    if (!this.year || !this.rank) {
      console.log('Veuillez entrer à la fois année et la position.');
      return;
    }
  
    if (this.token) {
      this.apiService.getResult_Year(this.year, this.rank, this.token).subscribe({
        next: (response) => {
          console.log('Position année:', response.data);
          this.pointsData = response.data;  // Garde les résultats pour affichage
        },
        error: (error) => {
          console.error('Error fetching Position année:', error);
        }
      });
    } else {
      console.log('Token manquant.');
    }
  }
}
