// import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { ApiService } from '../api.service';
// import * as L from 'leaflet';

// @Component({
//   selector: 'app-circuit-localisation',
//   templateUrl: './circuit-localisation.component.html',
//   styleUrls: ['./circuit-localisation.component.scss']
// })
// export class CircuitLocalisationComponent implements OnInit, AfterViewInit {
//   circuitLocations: any[] = [];
//   token: string = '';
//   private map: any;

//   constructor(private apiService: ApiService) {}

//   // Initialisation de la carte après la vue est chargée
//   ngAfterViewInit(): void {
//     this.initMap();
//   }

//   // Récupération des données des circuits lors de l'initialisation du composant
//   ngOnInit(): void {
//     this.token = localStorage.getItem('access_token') || '';
//     if (this.token) {
//       this.apiService.getCircuitLocalisation(this.token).subscribe({
//         next: (data) => {
//           this.circuitLocations = data.data;  // Récupère les données de l'API
//           this.addCircuitMarkers();  // Ajoute les marqueurs des circuits après avoir reçu les données
//         },
//         error: (err) => {
//           console.error('Erreur lors de la récupération des localisations des circuits', err);
//         }
//       });
//     }
//   }


//   // Initialisation de la carte Leaflet
//   private initMap(): void {
//     this.map = L.map('map').setView([20, 0], 2); // Vue centrée au niveau mondial

//     // Ajouter une couche OpenStreetMap à la carte
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '© OpenStreetMap contributors'
//     }).addTo(this.map);
//   }

//   // Ajout des marqueurs pour chaque circuit à partir des données
//   private addCircuitMarkers(): void {
//     this.circuitLocations.forEach(circuit => {
//       const marker = L.marker([circuit.lat, circuit.lng])
//         .addTo(this.map)
//         .bindPopup(`<b>${circuit.name}</b><br><a href="${circuit.url}" target="_blank">Plus d'infos</a>`);

//       // Optionnel : Ajouter un événement de clic sur chaque marqueur si besoin
//       marker.on('click', () => {
//         this.onCircuitClick(circuit);
//       });
//     });
//   }

//   // Centrer la carte sur le circuit sélectionné lors du clic
//   onCircuitClick(circuit: any): void {
//     console.log('Circuit sélectionné', circuit.lat, circuit.lng);
//     this.map.setView([circuit.lat, circuit.lng], 10); // Recentre et zoome sur le circuit
//   }
// }









import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-circuit-localisation',
  templateUrl: './circuit-localisation.component.html',
  styleUrls: ['./circuit-localisation.component.scss']
})
export class CircuitLocalisationComponent implements OnInit, AfterViewInit, OnDestroy {
  circuitLocations: any[] = [];
  token: string = '';
  private map: any;

  constructor(private apiService: ApiService) {}

  // Initialisation de la carte après que la vue est chargée
  ngAfterViewInit(): void {
    this.initMap();
  }

  // Récupération des données des circuits lors de l'initialisation du composant
  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    if (this.token) {
      this.apiService.getCircuitLocalisation(this.token).subscribe({
        next: (data) => {
          this.circuitLocations = data.data;  // Récupère les données de l'API
          this.addCircuitMarkers();  // Ajoute les marqueurs après avoir reçu les données
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des localisations des circuits', err);
        }
      });
    }
  }

  // Destruction de la carte lors de la destruction du composant
  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();  // Détruit la carte pour libérer les ressources
    }
  }

  // Initialisation de la carte Leaflet
  private initMap(): void {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      this.map = L.map('map').setView([20, 0], 2); // Vue centrée au niveau mondial

      // Ajouter une couche OpenStreetMap à la carte
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);
    } else {
      console.error('Élément avec l\'ID "map" introuvable');
    }
  }

  // Ajout des marqueurs pour chaque circuit à partir des données
  private addCircuitMarkers(): void {
    if (this.map) {
      this.circuitLocations.forEach(circuit => {
        const marker = L.marker([circuit.lat, circuit.lng])
          .addTo(this.map)
          .bindPopup(`<b>${circuit.name}</b><br><a href="${circuit.url}" target="_blank">Plus d'infos</a>`);

        // Optionnel : Ajouter un événement de clic sur chaque marqueur si besoin
        marker.on('click', () => {
          this.onCircuitClick(circuit);
        });
      });
    }
  }

  // Centrer la carte sur le circuit sélectionné lors du clic
  onCircuitClick(circuit: any): void {
    console.log('Circuit sélectionné', circuit.lat, circuit.lng);
    if (this.map) {
      this.map.setView([circuit.lat, circuit.lng], 10); // Recentre et zoome sur le circuit
    }
  }
}









// import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
// import { ApiService } from '../api.service';
// import * as L from 'leaflet';

// @Component({
//   selector: 'app-circuit-localisation',
//   templateUrl: './circuit-localisation.component.html',
//   styleUrls: ['./circuit-localisation.component.scss']
// })
// export class CircuitLocalisationComponent implements OnInit, AfterViewInit, OnDestroy {
//   circuitLocations: any[] = [];
//   token: string = '';
//   private map: any;
//   showMap = false; // Indique si la carte est affichée en plein écran
//   selectedCircuit: any = null; // Circuit sélectionné

//   constructor(private apiService: ApiService) {}
//   ngAfterViewInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   ngOnInit(): void {
//     this.token = localStorage.getItem('access_token') || '';
//     if (this.token) {
//       this.apiService.getCircuitLocalisation(this.token).subscribe({
//         next: (data) => {
//           this.circuitLocations = data.data;
//         },
//         error: (err) => {
//           console.error('Erreur lors de la récupération des localisations des circuits', err);
//         }
//       });
//     }
//   }

//   // Quand un circuit est cliqué, on affiche la carte en plein écran
//   onCircuitClick(circuit: any): void {
//     this.showMap = true;
//     this.selectedCircuit = circuit;

//     setTimeout(() => {
//       this.initMap(circuit); // Assurer que la carte est initialisée après le chargement de l'élément #map
//     }, 0);
//   }

//   // Revenir à la liste des circuits
//   backToList(): void {
//     this.showMap = false;
//     this.selectedCircuit = null;
//     if (this.map) {
//       this.map.remove(); // On enlève la carte quand on retourne à la liste
//     }
//   }

//   // Initialisation de la carte, soit en mode normal soit plein écran
//   private initMap(circuit: any = null): void {
//     if (!this.map) {
//       // Assurer que l'élément "map" existe avant l'initialisation
//       const mapElement = document.getElementById('map');
//       if (mapElement) {
//         this.map = L.map('map').setView([20, 0], 2); // Vue centrée au niveau mondial
//       }
//     }

//     if (circuit && this.map) {
//       this.map.setView([circuit.lat, circuit.lng], 10); // Centrer sur le circuit sélectionné
//       L.marker([circuit.lat, circuit.lng])
//         .addTo(this.map)
//         .bindPopup(`<b>${circuit.name}</b><br><a href="${circuit.url}" target="_blank">Plus d'infos</a>`);
//     }

//     if (this.map) {
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '© OpenStreetMap contributors'
//       }).addTo(this.map);
//     }
//   }

//   ngOnDestroy(): void {
//     if (this.map) {
//       this.map.remove();
//     }
//   }
// }



