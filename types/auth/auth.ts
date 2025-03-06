export enum UserRole {
  admin = "admin",
  manager = "manager",
  responsable = "responsable",
  employe = "employe"
}

export interface SessionUser {
  id: string;
  name: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  role: UserRole;
}