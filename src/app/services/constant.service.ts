import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  static apiRoutes = {
    login: `${environment.baseUrl}/api/v1/users/login`,
    signup: `${environment.baseUrl}/api/v1/users/signup`,
    getTickets: `${environment.baseUrl}/api/v1/tickets/getMyTickets`,
    generateTicket: `${environment.baseUrl}/api/v1/tickets`,
    impersonate: `${environment.baseUrl}/api/v1/users/impersonate`,
    endImpersonation: `${environment.baseUrl}/api/v1/users/endImpersonation`,
  };

  static localStorageKeys = {
    token: 'User_Token',
    userData: 'User_Data',
    impersonatorToken: 'ImpUser_Token',
  };

  static errorMessages = {};

  static successMessages = {
    userLoggedin: 'User logged in successfully!',
    userLogout: 'Logged out successfully!',
    impersonated: 'Impersonated user successfully!',
    imporsonationStoped: 'Impersonation was ended successfully!',
  };

  constructor() {}
}
