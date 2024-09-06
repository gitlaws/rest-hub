import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://your-backend-url/api/auth';
  private authenticated = false;

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          if (response && response.token) {
            this.authenticated = true;
          }
        })
      );
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  signOut(): void {
    this.authenticated = false;
  }
}
