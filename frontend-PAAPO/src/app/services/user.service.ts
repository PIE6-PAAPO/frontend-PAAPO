import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../models/register-payload.model';
import { LoginPayload } from '../models/login-payload.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(user: RegisterPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/auth/register`, user);
  }

  login(payload: LoginPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/auth/login`, payload);
  }
}
