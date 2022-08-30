import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConstantService } from 'src/app/services/constant.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  email = '';
  showModal = false;
  loading = false;

  constructor(
    private uiService: UiService,
    private authService: AuthService,
    private router: Router
  ) {
    this.uiService.onToggleShowModal().subscribe((value) => {
      this.showModal = value;
    });
  }

  ngOnInit(): void {}

  closeModal() {
    this.uiService.toggleShowModal();
  }

  impersonate(): void {
    if (!this.email || !this.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
      return this.uiService.toggleShowAlert(
        'red',
        'You must provide a valid email address'
      );
    this.loading = true;
    this.authService.impersonate(this.email).subscribe(
      (response) => {
        this.authService.saveImpersonatorToken(
          this.authService.getToken() || ''
        );
        this.authService.setToken(response.token);
        this.authService.setUserData(response.data.user);
        this.loading = false;
        this.email = '';
        this.uiService.toggleShowModal();
        this.uiService.toggleShowAlert(
          'green',
          ConstantService.successMessages.impersonated
        );
        location.reload();
      },
      (error) => {
        this.loading = false;
        this.uiService.toggleShowAlert('red', error.error.message);
      }
    );
  }
}
