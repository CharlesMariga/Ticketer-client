import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMobileNav = false;
  showDropdown = false;
  loggedInUserName = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.loggedInUserName = this.authService.getUserData().name;
  }

  signOut() {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
    this.uiService.toggleShowAlert(
      'green',
      ConstantService.successMessages.userLogout
    );
  }
}
