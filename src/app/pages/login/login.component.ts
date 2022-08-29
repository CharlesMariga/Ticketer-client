import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  email: string;
  password: string;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  loginUser() {
    console.log(this.email, this.password);
    this.uiService.toggleShowAlert('green', 'Hello world');
  }
}
