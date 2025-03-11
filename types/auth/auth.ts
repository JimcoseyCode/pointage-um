export enum UserRole {
  admin = "admin",
  responsable = "responsable",
  manager = "manager",
  employe = "employe"
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  firstName: string;
  phoneNumber: string;
  role: UserRole;
}