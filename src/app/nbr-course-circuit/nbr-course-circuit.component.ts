import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nbr-course-circuit',
  templateUrl: './nbr-course-circuit.component.html',
  styleUrls: ['./nbr-course-circuit.component.scss']
})
export class NbrCourseCircuitComponent implements OnInit {
  circuits: any[] = [];
  token: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getNbrCourseCircuit(this.token).subscribe({
        next: (data) => {
          this.circuits = data.data;
          console.log(this.circuits);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des circuits', err);
        }
      });
    }
  }
}

