// import { Component } from '@angular/core';
// import { ApiService } from '../api.service';

// @Component({
//   selector: 'app-detail-constructeur-pilote',
//   templateUrl: './detail-constructeur-pilote.component.html',
//   styleUrl: './detail-constructeur-pilote.component.scss'
// })
// export class DetailConstructeurPiloteComponent {
//   constru :string | undefined;
//   pointsData: any[] = [];
//   pointsDataConstru: any[] = [];
//   token = '';

//   constructor(private apiService: ApiService) {}
//   ngOnInit(): void{this.token = localStorage.getItem('access_token') || '';
//     this.token = localStorage.getItem('access_token') || '';
//     if (this.token) {
//       this.apiService.getToutConstru(this.token).subscribe({
//         next: (data) => {
//           this.pointsDataConstru = data.data;
//           console.log(this.pointsDataConstru);
//         },
//         error: (err) => {
//           console.error('Erreur lors de la récupération des constructeur', err);
//         }
//       });
//     }
//   }
//   getResult_Constru_pilot() {
    
//     if (!this.constru ) {
//       console.log('Veuillez entrer le nom du constructeur.');
//       return;
//     }
  
//     if (this.token) {
//       this.apiService.getResult_pilote_constructeur(this.constru, this.token).subscribe({
//         next: (response) => {
//           console.log('Position année:', response.data);
//           this.pointsData = response.data;  // Garde les résultats pour affichage
//         },
//         error: (error) => {
//           console.error('Error fetching result !!:', error);
//         }
//       });
//     } else {
//       console.log('Token manquant.');
//     }
//   }
// }



// test 
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

interface Constructor {
  name: string;
  // autres propriétés si nécessaire
}

@Component({
  selector: 'app-detail-constructeur-pilote',
  templateUrl: './detail-constructeur-pilote.component.html',
  styleUrl: './detail-constructeur-pilote.component.scss'
})
export class DetailConstructeurPiloteComponent {
  constru: string | undefined;
  pointsData: any[] = [];
  pointsDataConstru: any[] = [];
  token = '';
  total : number |undefined;

  // Listes filtrées par plage alphabétique
  constructorsAF: Constructor[] = [];
  constructorsGL: Constructor[] = [];
  constructorsMR: Constructor[] = [];
  constructorsSZ: Constructor[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getToutConstru(this.token).subscribe({
        next: (data) => {
          this.pointsDataConstru = data.data;
          this.filterConstructors();
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des constructeurs', err);
        }
      });
    }
  }

  filterConstructors() {
    this.constructorsAF = this.pointsDataConstru.filter(c => 
      c.name.charAt(0).toUpperCase() >= 'A' && c.name.charAt(0).toUpperCase() <= 'F'
    );
    this.constructorsGL = this.pointsDataConstru.filter(c => 
      c.name.charAt(0).toUpperCase() >= 'G' && c.name.charAt(0).toUpperCase() <= 'L'
    );
    this.constructorsMR = this.pointsDataConstru.filter(c => 
      c.name.charAt(0).toUpperCase() >= 'M' && c.name.charAt(0).toUpperCase() <= 'R'
    );
    this.constructorsSZ = this.pointsDataConstru.filter(c => 
      c.name.charAt(0).toUpperCase() >= 'S' && c.name.charAt(0).toUpperCase() <= 'Z'
    );
  }

  getResult_Constru_pilot() {
    if (!this.constru) {
      console.log('Veuillez entrer le nom du constructeur.');
      return;
    }
  
    if (this.token) {
      this.apiService.getResult_pilote_constructeur(this.constru, this.token).subscribe({
        next: (response) => {
          this.pointsData = response.data;
          console.log(this.pointsData);
          this.total=this.pointsData.length;
        },
        error: (error) => {
          console.error('Error fetching result:', error);
        }
      });
    }
  }
}