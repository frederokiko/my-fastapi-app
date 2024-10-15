import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pole-position-annee',
  templateUrl: './pole-position-annee.component.html',
  styleUrls: ['./pole-position-annee.component.scss']
})
export class PolePositionAnneeComponent implements OnInit {
  polePositions: any[] = [];
  token: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getPolePositionAnnee(this.token).subscribe({
        next: (data) => {
          this.polePositions = data.data;
          console.log(this.polePositions);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des pole positions', err);
        }
      });
    }
  }
}

