import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ConstantService } from 'src/app/services/constant.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UiService } from 'src/app/services/ui.service';
import { ITicket } from 'src/app/types/ticket.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  headers = [
    { text: 'Ticket number', value: 'ticketNumber' },
    { text: 'Created on', value: 'createdAt' },
    { text: 'Created by', value: 'createdBy' },
  ];
  data: { ticketNumber: string; createdAt: string; createdBy: string }[] = [];
  generateTicketBtnLoading = false;
  impersonaterToken = '';
  endImpersonationBtnLoading = false;

  constructor(
    private uiService: UiService,
    private ticketService: TicketService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.uiService.toggleShowLoader();
    this.ticketService.getTickets().subscribe(
      (response) => {
        this.data = response.data.tickets
          .sort(
            (a, b) =>
              Date.parse(`${new Date(b.createdAt)}`) -
              Date.parse(`${new Date(a.createdAt)}`)
          )
          .map((ticket) => ({
            ticketNumber: ticket.ticketNumber,
            createdAt: this.convertTime(ticket.createdAt),
            createdBy: ticket.createdBy?.name || 'Me',
          }));
        this.uiService.toggleShowLoader();
      },
      (error) => {
        this.uiService.toggleShowLoader();
        this.uiService.toggleShowAlert('red', error.error.message);
      }
    );
    this.impersonaterToken = this.authService.getImpersonatorToken() || '';
  }

  convertTime(time: number) {
    return new Date(time).toLocaleString('en-us', {
      month: 'long',
      year: 'numeric',
      day: '2-digit',
      hour: 'numeric',
    });
  }

  generateTicket() {
    this.generateTicketBtnLoading = true;
    this.ticketService.generateNewTicket().subscribe(
      (response) => {
        const { ticket } = response.data;
        this.data.unshift({
          ticketNumber: ticket.ticketNumber,
          createdAt: this.convertTime(ticket.createdAt),
          createdBy: ticket.createdBy?.name || 'Me',
        });
        this.generateTicketBtnLoading = false;
      },
      (error) => {
        this.generateTicketBtnLoading = false;
        this.uiService.toggleShowAlert('red', error.error.message);
      }
    );
  }

  openModal() {
    this.uiService.toggleShowModal();
  }

  endImpersonation() {
    this.endImpersonationBtnLoading = true;
    this.authService.endImpersonation().subscribe(
      (response) => {
        console.log(response);
        this.uiService.toggleShowAlert(
          'green',
          ConstantService.successMessages.imporsonationStoped
        );
        this.authService.clearLocalStorage();
        this.authService.setToken(response.token);
        this.authService.setUserData(response.data.user);
        setTimeout(() => {
          location.reload();
        }, 4000);
      },
      (error) => {
        this.endImpersonationBtnLoading = false;
        this.uiService.toggleShowAlert('red', error.error.message);
      }
    );
  }
}
