import { SessionUser, UserRole } from "@/types";
import prisma from "@/lib/db.prisma";

type UserInfo = SessionUser;
type PrismaModels = {
  admin: any;
  responsable: any;
  manager: any;
  employe: any;
};

async function authenticateUser(email: string, password: string): Promise<UserInfo | null> {
  const userTypes = [
    { model: 'admin' as const, role: UserRole.ADMIN },
    { model: 'responsable' as const, role: UserRole.RESPONSABLE},
    { model: 'manager' as const, role: UserRole.MANAGER },
    { model: 'employe' as const, role: UserRole.EMPLOYE },
  ];

  for (const userType of userTypes) {
    const model = (prisma as unknown as PrismaModels)[userType.model];
    const user = await model.findUnique({
      where: { email },
    });
    if (user) {
      if (user.password === password) {
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          firstName: user.firstName,
          phoneNumber: user.phoneNumber,
          role: userType.role,
        };
      } else {
        throw new Error("Mot de passe incorrect.");
      }
    }
  }
  throw new Error("Aucun utilisateur trouvé avec cet e-mail.");
}

export async function validateUser(email: string, password: string): Promise<SessionUser | null> {
  try {
    return await authenticateUser(email, password);
  } catch (error) {
    console.error("Erreur d'authentification:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Une erreur s'est produite lors de l'authentification.");
  }
}