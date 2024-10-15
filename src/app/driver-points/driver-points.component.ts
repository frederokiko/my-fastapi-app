import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-driver-points',
  templateUrl: './driver-points.component.html',
  //styleUrls: ['./driver-points.component.scss']
})
export class DriverPointsComponent implements OnInit{
  forename = '';
  surname = '';
  pointsData: any[] = [];
  token = '';

  constructor(private apiService: ApiService) {}
  ngOnInit(): void{this.token = localStorage.getItem('access_token') || '';}
  fetchDriverPoints() {
    
    if (!this.forename || !this.surname) {
      console.log('Veuillez entrer à la fois le prénom et le nom.');
      return;
    }
  
    if (this.token) {
      this.apiService.getDriverPoints(this.forename, this.surname, this.token).subscribe({
        next: (response) => {
          console.log('Driver points:', response.data);
          this.pointsData = response.data;  // Garde les résultats pour affichage
        },
        error: (error) => {
          console.error('Error fetching driver points:', error);
        }
      });
    } else {
      console.log('Token manquant.');
    }
  }
}

