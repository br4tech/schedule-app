import { Clinic } from "./clinic";

export interface Office {
  id: number;
  name: string;
  code: string
  clinics: Clinic[];
}

