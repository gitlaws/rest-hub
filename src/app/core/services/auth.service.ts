import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://your-backend-url/api/auth';
  private authenticated = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  isAuthenticated(): Observable<boolean> {
    return this.authenticated.asObservable();
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }

  signIn(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          if (response && response.token) {
            const user: User = {
              id: 1,
              name: 'John Doe',
              email,
              mobile: '1234567890',
              age: 30,
            }; // Simulate user data
            this.authenticated.next(true);
            this.currentUser.next(user);
          }
        })
      );
  }

  signOut(): void {
    this.authenticated.next(false);
    this.currentUser.next(null);
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  age: number;
}
