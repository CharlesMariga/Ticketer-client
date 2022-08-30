import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { IUserResponse } from 'src/app/types/user.interface';
import { UiService } from 'src/app/services/ui.service';
import { ConstantService } from 'src/app/services/constant.service';
import { Router } from '@angular/router';

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
  loading = false;

  constructor(
    private authService: AuthService,
    private uiService: UiService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  singup() {
    this.authService
      .signup(this.name, this.email, this.password, this.passwordConfirm)
      .subscribe((response: IUserResponse) => {
        this.authService.setToken(response.token);
        this.authService.setUserData(response.data.user);
        this.uiService.toggleShowAlert(
          'green',
          ConstantService.successMessages.userLoggedin
        );
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 4000);
      });
  }
}
