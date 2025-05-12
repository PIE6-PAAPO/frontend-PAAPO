import { HealthInformation } from './health-information.model';
import { Role } from './role.model';

export interface User {
  email: string;
  password: string;
  full_name: string;
  birthdate: string; // yyyy-mm-dd
  phone_number: string;
  address: string;
  occupation: string;
  role: Role;
  health_information: HealthInformation | null;
}
