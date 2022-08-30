import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/types/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: IUser;

  constructor(private authService: AuthService) {
    this.user = this.authService.getUserData();
  }

  ngOnInit(): void {}
}
