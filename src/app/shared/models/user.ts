import { Access } from "./access";

export interface User {
  id: number;
  name: string;
  email: string;
  document: string;
  phone: string;
  role: string;
  accesses: Access[];
}
        