import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-info-gp',
  templateUrl: './info-gp.component.html',
  styleUrls: ['./info-gp.component.scss']
})
export class InfoGPComponent implements OnInit {
  gpDetails: any[] = [];
  token: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getInfoGP(this.token).subscribe({
        next: (data) => {
          this.gpDetails = data.data;
          console.log(this.gpDetails);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des informations du GP', err);
        }
      });
    }
  }
}

