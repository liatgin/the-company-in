import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = `http://localhost:3000/api`

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/companies`)
  }

  newCompanyDomain(domain): Observable<any> {
    return this.http.post(`${this.apiUrl}/newCompany`, domain)
  }
}
