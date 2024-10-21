import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000';  // L'URL de ton API FastAPI

  constructor(private http: HttpClient) { }

  // Méthode pour créer un nouvel utilisateur
  // createUser(username: string, password: string, email: string): Observable<any> {
  //   const body = { username,  email,password };
  //   return this.http.post(`${this.apiUrl}/users`, body);
  // }

  createUser(username: string, password: string, email: string): Observable<any> {
    const body = {
      username: username,
      password: password,
      email: email
    };
  
    return this.http.post<any>(`${this.apiUrl}/users`, body);
  }
  // Méthode pour se connecter et obtenir un token
  login(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    return this.http.post(`${this.apiUrl}/token`, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  // Méthode pour accéder à la route protégée
  getProtectedData(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/protected`, { headers });
  }

  // Méthode pour obtenir les points du driver (requête SQL spécifique)
  getDriverPoints(forename: string, surname: string, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { forename, surname };  // Passer les noms dans le body

    return this.http.post(`${this.apiUrl}/driver_points`, body, { headers });
  }
  getAbandonAnnee(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/abandon_annee`, { headers });
  }

  getPolePositionAnnee(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/pole_position_annee`, { headers });
  }

  getConstructorVictory(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/constructor_victory`, { headers });
  }

  getNbrCourseCircuit(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/nbr_course_circuit`, { headers });
  }

  getNbrWinDriver(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/nbr_win_driver`, { headers });
  }

  getCircuitLocalisation(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/circuit_localisation`, { headers });
  }

  getDetailPilote(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/detail_pilote`, { headers });
  }

  getDetailConstructor(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/detail_constructor`, { headers });
  }

  getInfoGP(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/info_gp`, { headers });
  }
  getResult_Year(year: number, rank: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { year, rank };  // Passer les noms dans le body

    return this.http.post(`${this.apiUrl}/result_year`, body, { headers });
  }
  getToutConstru(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/tout_constructeur`, { headers });
  }
  getResult_pilote_constructeur(constru: string, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { constru };  // Passer le nom dans le body
    return this.http.post(`${this.apiUrl}/result_pilote_constructeur`, body, { headers });
  }

}
