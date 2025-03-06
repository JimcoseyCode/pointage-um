export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhoneNumber = (phone: string) => {
  return /^(\+33|0)[1-9](\d{2}){4}$/.test(phone);
};