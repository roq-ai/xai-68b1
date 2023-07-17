import { UserInterface } from 'interfaces/user';
import { DoctorInterface } from 'interfaces/doctor';
import { ServiceInterface } from 'interfaces/service';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  user_id?: string;
  doctor_id?: string;
  service_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  doctor?: DoctorInterface;
  service?: ServiceInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  doctor_id?: string;
  service_id?: string;
}
