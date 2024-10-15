import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nbr-win-driver',
  templateUrl: './nbr-win-driver.component.html',
  styleUrls: ['./nbr-win-driver.component.scss']
})
export class NbrWinDriverComponent implements OnInit {
  driverWins: any[] = [];
  token: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getNbrWinDriver(this.token).subscribe({
        next: (data) => {
          this.driverWins = data.data;
          console.log(this.driverWins);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des victoires des pilotes', err);
        }
      });
    }
  }
}

