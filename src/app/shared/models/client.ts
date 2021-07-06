import { ClientDoctors } from "./client-doctors";

export interface Client {
  id: number;
  name: string;
  kind_person: string;
  email: string;
  phone: string;
  status: boolean;
  document: string;
  zipcode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  doctors: ClientDoctors[];
}
