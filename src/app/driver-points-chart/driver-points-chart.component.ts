import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-driver-points-chart',
  templateUrl: './driver-points-chart.component.html',
  styleUrls: ['./driver-points-chart.component.scss']
})
export class DriverPointsChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Points par année' }
    ]
  };

  private token = '';
  forename: string = '';
  surname: string = '';
prenom: any;
nom: any;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
  }

  getDriverPoints() {
    if (!this.forename || !this.surname) {
      console.error('Forename and surname are required');
      return;
    }

    this.apiService.getDriverPoints(this.forename, this.surname, this.token).subscribe({
      next: (response) => {
        this.barChartData.labels = response.data.map((item: { year: any; }) => item.year.toString());
        this.barChartData.datasets[0].data = response.data.map((item: { total_points: any; }) => item.total_points);
        
        this.chart?.update();  // Force chart update
        this.cdr.detectChanges();  // Force change detection
        
        console.log(this.barChartData.labels);
        console.log(this.barChartData.datasets);
        this.prenom=this.forename;
        this.nom=this.surname;
        this.forename = '';
        this.surname = '';
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des points:', error);
      }
    });
  }
}
