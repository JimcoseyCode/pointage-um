import { UserRole } from '@/types';
export interface FormData {
  email: string;
  password: string;
  name: string;
  firstName: string;
  phoneNumber: string;
  role:UserRole;
}
export enum UserType {
  ADMIN = 'admin',
  RESPONSABLE = 'responsable',
  MANAGER = 'manager',
  EMPLOYE = 'employe'
}

export interface FormFieldProps {
  id: keyof FormData;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface HeaderProps {
  badge: string;
}