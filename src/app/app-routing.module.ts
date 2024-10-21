import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';  // Assurez-vous que le chemin est correct
import { LoginComponent } from './login/login.component';  // Si tu as un composant de connexion
import { DriverPointsComponent } from './driver-points/driver-points.component';
import { AbandonAnneeComponent } from './abandon-annee/abandon-annee.component';
import { PolePositionAnneeComponent } from './pole-position-annee/pole-position-annee.component';
import { ConstructorVictoryComponent } from './constructor-victory/constructor-victory.component';
import { NbrCourseCircuitComponent } from './nbr-course-circuit/nbr-course-circuit.component';
import { NbrWinDriverComponent } from './nbr-win-driver/nbr-win-driver.component';
import { CircuitLocalisationComponent } from './circuit-localisation/circuit-localisation.component';
import { DetailPiloteComponent } from './detail-pilote/detail-pilote.component';
import { DetailConstructorComponent } from './detail-constructor/detail-constructor.component';
import { InfoGPComponent } from './info-gp/info-gp.component';
import { DriverPointsChartComponent } from './driver-points-chart/driver-points-chart.component';
import { DetailAnneeComponent } from './detail-annee/detail-annee.component';
import { DetailConstructeurPiloteComponent } from './detail-constructeur-pilote/detail-constructeur-pilote.component';

const routes: Routes = [
  { path: 'create-user', component: CreateUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'driver-points',component:DriverPointsComponent},
  { path: 'abandon-annee',component:AbandonAnneeComponent},
  {path:'pole-position-annee',component:PolePositionAnneeComponent},
  {path:'constructor-victory',component:ConstructorVictoryComponent},
  {path:'nbr-course-circuit',component:NbrCourseCircuitComponent},
  {path:'nbr-win-driver',component:NbrWinDriverComponent},
  {path:'circuit-localisation',component:CircuitLocalisationComponent},
  {path:'detail-pilote',component:DetailPiloteComponent},
  {path:'detail-constructor',component:DetailConstructorComponent},
  {path:'info-gp',component:InfoGPComponent},
  {path:'driver-points-chart',component:DriverPointsChartComponent},
  {path:'detail-annee',component:DetailAnneeComponent},
  {path:'detail-constructeur-pilote',component:DetailConstructeurPiloteComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Redirection par défaut vers login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

