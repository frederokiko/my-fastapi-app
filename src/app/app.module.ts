import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
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
import { BaseChartDirective } from 'ng2-charts';
//import { NgChartsModule } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import { FooterComponent } from './footer/footer.component';
import { ConnectionStatusComponent } from './connection-status/connection-status.component';
import { AuthService } from './auth.service';
import { DetailAnneeComponent } from './detail-annee/detail-annee.component';
Chart.register(...registerables);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    DriverPointsComponent,
    AbandonAnneeComponent,
    PolePositionAnneeComponent,
    ConstructorVictoryComponent,
    NbrCourseCircuitComponent,
    NbrWinDriverComponent,
    CircuitLocalisationComponent,
    DetailPiloteComponent,
    DetailConstructorComponent,
    DriverPointsChartComponent,
    InfoGPComponent,
    FooterComponent,
    ConnectionStatusComponent,
    DetailAnneeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    //NgChartsModule
    BaseChartDirective
  ],
  providers: [provideHttpClient(),AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
