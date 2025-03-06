import { PrismaClient } from "@prisma/client";
import { SessionUser, UserRole } from "@/types/auth/auth";

const prisma = new PrismaClient();

export async function validateUser(email: string, password: string): Promise<SessionUser> {
  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    throw new Error("Aucun utilisateur trouvé avec cet e-mail.");
  }

  if (password !== user.password) {
    throw new Error("Mot de passe incorrect.");
  }

  return {
    id: user.id,
    name: user.name,
    firstName: user.firstName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role as UserRole,
  };
}