import { EventFormValues } from '../Event';

export interface UserFormValues {
  firstname: string;
  lastname: string;
  email: string;
  event: EventFormValues;
}
