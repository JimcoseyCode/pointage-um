// types/index.ts

export enum UserRole {
  admin = "admin",
  manager = "manager",
  employe = "employe",
  responsable = "responsable"

}

export interface User {
    id: string;
    name: string;
    firstName: string;
    email: string;
    phoneNumber: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

export interface SessionUser {
    id: string;
    name: string;
    firstName: string;
    email: string;
    phoneNumber: string;
    role: UserRole;
}
