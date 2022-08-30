import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicketsResponse, ITicketResponse } from '../types/ticket.interface';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  getTickets(): Observable<ITicketsResponse> {
    return this.http.get<ITicketsResponse>(
      ConstantService.apiRoutes.getTickets
    );
  }

  generateNewTicket(): Observable<ITicketResponse> {
    return this.http.post<ITicketResponse>(
      ConstantService.apiRoutes.generateTicket,
      {}
    );
  }
}
