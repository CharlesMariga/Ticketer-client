import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  headers = [
    { text: 'Ticket number', value: 'ticketNumber' },
    { text: 'Created on', value: 'createdOn' },
    { text: 'Created by', value: 'createdBy' },
    { text: 'Updated on', value: 'updatedOn' },
    { text: 'Updated by', value: 'updatedBy' },
  ];

  constructor() {}

  ngOnInit(): void {}

  generateTicket() {}

  impersonate() {}
}
