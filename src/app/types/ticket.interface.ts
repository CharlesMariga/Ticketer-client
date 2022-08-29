import { IUser } from './user.interface';

export interface ITicket {
  id: string;
  ticketNumber: string;
  createdOn: number;
  createdBy: IUser;
  user: IUser;
  updatedBy: IUser;
  updateOn: number;
}
