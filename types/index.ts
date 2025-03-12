// types/index.ts
export enum UserRole {
    ADMIN = 'admin',
    RESPONSABLE = 'responsable',
    MANAGER = 'manager',
    EMPLOYE = 'employe'
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
