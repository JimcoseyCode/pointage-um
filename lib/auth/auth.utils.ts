import { SessionUser, UserRole } from "@/types/auth/auth";
import prisma from "@/lib/db.prisma";

type UserInfo = SessionUser;

async function authenticateUser(email: string, password: string): Promise<UserInfo | null> {
  const userTypes = [
    { model: 'admin', role: UserRole.admin },
    { model: 'responsable', role: UserRole.responsable },
    { model: 'manager', role: UserRole.manager },
    { model: 'employe', role: UserRole.employe },
  ];

  for (const userType of userTypes) {
    const user = await prisma[userType.model].findUnique({
      where: { email },
    });

    // Si l'utilisateur existe
    if (user) {
      // Vérifie si le mot de passe correspond
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
        // Si le mot de passe est incorrect
        throw new Error("Mot de passe incorrect.");
      }
    }
  }

  // Si aucun utilisateur n'est trouvé avec cet email
  throw new Error("Aucun utilisateur trouvé avec cet e-mail.");
}

export async function validateUser(email: string, password: string): Promise<SessionUser | null> {
  try {
    return await authenticateUser(email, password);
  } catch (error) {
    console.error("Erreur d'authentification:", error);

    // Renvoie l'erreur spécifique à l'appelant
    if (error instanceof Error) {
      throw error; // Renvoie l'erreur avec le message spécifique
    }

    // En cas d'erreur inattendue
    throw new Error("Une erreur s'est produite lors de l'authentification.");
  }
}