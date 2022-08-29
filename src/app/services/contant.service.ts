import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContantService {
  static apiRoutes = {
    login: `${environment.baseUrl}/api/v1/users/login`,
    signup: `${environment.baseUrl}/api/v1/users/signup`,
  };

  static apiMethods: {
    get: 'get';
    post: 'post';
    patch: 'patch';
    delete: 'delete';
  };

  static localStorageKeys = {
    token: 'User_Token',
    userData: 'User_Data',
  };

  static errorMessages = {};

  static successMessages = {
    userLoggedin: 'User logged in successfully!',
  };

  constructor() {}
}
