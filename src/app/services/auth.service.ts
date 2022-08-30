import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantService } from './constant.service';
import { Router } from '@angular/router';
import { IRoutes } from '../types/routes.interface';
import { Observable } from 'rxjs';
import { IUser, IUserResponse } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiRoutes: IRoutes;

  constructor(
    private http: HttpClient,
    private router: Router,
    private constantService: ConstantService
  ) {
    this.apiRoutes = ConstantService.apiRoutes;
  }

  /**
   * Get's jwt token from local storage
   * @returns jwt token
   */
  getToken(): string | null {
    return localStorage.getItem(ConstantService.localStorageKeys.token);
  }

  /**
   * Sets the jwt token to local storage
   */
  setToken(token: string) {
    localStorage.setItem(ConstantService.localStorageKeys.token, token);
  }

  getUserData(): IUser {
    return JSON.parse(
      localStorage.getItem(ConstantService.localStorageKeys.userData) || ''
    );
  }

  /**
   * Sets user data to local storage
   * @param userData
   */
  setUserData(userData: IUser) {
    localStorage.setItem(
      ConstantService.localStorageKeys.userData,
      JSON.stringify(userData)
    );
  }

  /**
   * Logout a user and navigate to /login
   */
  logoutUser() {
    this.clearLocalStorage();
    this.router.navigate(['/login']);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  saveImpersonatorToken(token: string) {
    localStorage.setItem(
      ConstantService.localStorageKeys.impersonatorToken,
      token
    );
  }

  getImpersonatorToken() {
    return localStorage.getItem(
      ConstantService.localStorageKeys.impersonatorToken
    );
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  login(email: string, password: string): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(this.apiRoutes.login, {
      email,
      password,
    });
  }

  signup(
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(this.apiRoutes.signup, {
      name,
      email,
      password,
      passwordConfirm,
    });
  }

  impersonate(email: string): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(this.apiRoutes.impersonate, { email });
  }

  endImpersonation(): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(this.apiRoutes.endImpersonation, {});
  }
}
