import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-constructor-victory',
  templateUrl: './constructor-victory.component.html',
  styleUrls: ['./constructor-victory.component.scss']
})
export class ConstructorVictoryComponent implements OnInit {
  constructorVictories: any[] = [];
  token: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getConstructorVictory(this.token).subscribe({
        next: (data) => {
          this.constructorVictories = data.data;
          console.log(this.constructorVictories);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des victoires par constructeur', err);
        }
      });
    }
  }
}
