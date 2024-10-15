import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail-constructor',
  templateUrl: './detail-constructor.component.html',
  styleUrls: ['./detail-constructor.component.scss']
})
export class DetailConstructorComponent implements OnInit {
  constructorDetails: any[] = [];
  token: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getDetailConstructor(this.token).subscribe({
        next: (data) => {
          this.constructorDetails = data.data;
          console.log(this.constructorDetails);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des détails du constructeur', err);
        }
      });
    }
  }
}

