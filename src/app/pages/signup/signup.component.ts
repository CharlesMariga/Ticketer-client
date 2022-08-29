import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { IUserResponse } from 'src/app/types/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  faLock = faLock;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  singup() {
    this.authService
      .signup(this.name, this.email, this.password, this.passwordConfirm)
      .subscribe((response: IUserResponse) => {
        console.log(response);
      });
  }
}
