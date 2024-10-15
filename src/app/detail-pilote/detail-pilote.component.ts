import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail-pilote',
  templateUrl: './detail-pilote.component.html',
  styleUrls: ['./detail-pilote.component.scss']
})
export class DetailPiloteComponent implements OnInit {
  piloteDetails: any[] = [];
  token: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getDetailPilote(this.token).subscribe({
        next: (data) => {
          this.piloteDetails = data.data;
          console.log(this.piloteDetails);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des détails du pilote', err);
        }
      });
    }
  }
}

