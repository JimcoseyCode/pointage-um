import { SessionUser } from "./auth/auth";

declare module "next-auth" {
interface Session {
    user: SessionUser;
}

interface User {
    id: string;
    email: string;
    role: import('./auth/auth').UserRole;
    firstName: string;
    phoneNumber: string;
}
}

declare module "next-auth/jwt" {
interface JWT extends SessionUser {}
}

