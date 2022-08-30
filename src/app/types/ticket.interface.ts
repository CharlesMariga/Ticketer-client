import { IUser } from './user.interface';

export interface ITicket {
  id: string;
  ticketNumber: string;
  createdAt: number;
  createdBy: IUser;
  user: IUser;
  updatedBy: IUser;
  updateOn: number;
}

export interface ITicketsResponse {
  status: string;
  length: number;
  data: {
    tickets: ITicket[];
  };
}

export interface ITicketResponse {
  status: string;
  data: {
    ticket: ITicket;
  };
}
