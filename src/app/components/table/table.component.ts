import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() headers: { text: string; value: string }[] = [];
  @Input() data = [
    {
      ticketNumber: 'T001',
      createdOn: Date.now(),
      createdBy: 'Me',
      updatedOn: 'Today',
      updatedBy: 'me',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
