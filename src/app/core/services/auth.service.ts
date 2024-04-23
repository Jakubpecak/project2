import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, tap } from 'rxjs';

interface Session {
  token: string | null;
  refreshToken?: string;
  userId?: number;
  userType?: string;
}

interface Tokens {
  token?: string;
  refreshToken?: string;
}

interface Credentials {
  username?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  session = new BehaviorSubject<Session | null>(this.getStoredSession());
  isAuthenticated: boolean = false;

  url = 'http://localhost:3000/login';

  constructor(private http: HttpClient, private router: Router) {}

  state = this.session.pipe(
    map(session => !!session),
    tap(state => {
      this.isAuthenticated = state
    })
  );

  login(credentials: Credentials) {
    return this.http.post<Session>(this.url, credentials).pipe(
      tap(session => {
        console.log('login', session)
        this.session.next(session);
        this.setStoredSession(session);
        this.router.navigate(['/dashboard']);
      })
    )
  }

  logout() {
    localStorage.removeItem('session');
    const session = this.session.getValue();
    if (session) {
      this.session.next(null);
      this.router.navigate(['/login']);
    }
  }

  refreshToken(tokens: Tokens) {
    return this.http.post<Session>('/refresh', tokens).pipe(
      tap(session => {
        this.session.next(session);
        this.setStoredSession(session);
      })
    )
  }
  
  getTokens() {
    const session = this.session.getValue();
    if (session && session?.token && session?.refreshToken) {
      return {
        token: session?.token,
        refreshToken: session?.refreshToken
      }
    } else {
      return {
        token: '',
        refreshToken: ''
      }
    }
  }

  getToken() {
    const session = this.session.getValue();
    return session && session?.token;
  }

  getSession() {
    const session = this.session.getValue();
    return session ? session : null;
  }

  getStoredSession() {
    const storedSession = localStorage.getItem('session');
    return storedSession ? JSON.parse(storedSession) : null;
  }

  setStoredSession(session: Session) {
    console.log('set store', session)
    localStorage.setItem('session', JSON.stringify(session));
  }


}