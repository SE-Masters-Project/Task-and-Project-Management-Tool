import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/users/login`, { email, password }).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token); // ✅ Store token correctly
        }
      })
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, { name, email, password });
  }

  logout(): void {
    localStorage.removeItem('token'); // ✅ Remove token on logout
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // ✅ Retrieve token
  }
}
