export interface FormData {
  email: string;
  password: string;
  name: string;
  firstName: string;
  phoneNumber: string;
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