import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { AuthService } from 'src/app/services/auth.service';
import { ConstantService } from 'src/app/services/constant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  email: string;
  password: string;
  loading = false;

  constructor(
    private uiService: UiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.getToken()) this.router.navigate(['/dashboard']);
  }

  loginUser() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        this.loading = false;
        this.uiService.toggleShowAlert(
          'green',
          ConstantService.successMessages.userLoggedin
        );
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 4000);
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.uiService.toggleShowAlert('red', error.error.message);
      }
    );
  }
}

// "Http failure response for https://ticketerapp.herokuapp.com/api/v1/users/login: 404 Not Found
