import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  email: string;
  password: string;

  constructor() {}

  ngOnInit(): void {}

  loginUser() {
    console.log(this.email, this.password);
  }
}
