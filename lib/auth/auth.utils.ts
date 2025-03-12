import { SessionUser, UserRole } from "@/types";
import prisma from "@/lib/db.prisma";

type UserInfo = SessionUser;



async function authenticateUser(email: string, password: string): Promise<UserInfo | null> {
  // Try to find the user in each model sequentially
  const findUser = async () => {
    const admin = await prisma.admin.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        firstName: true,
        phoneNumber: true,
        password: true,
      },
    });
    if (admin) return { user: admin, role: UserRole.ADMIN };

    const responsable = await prisma.responsable.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        firstName: true,
        phoneNumber: true,
        password: true,
      },
    });
    if (responsable) return { user: responsable, role: UserRole.RESPONSABLE };

    const manager = await prisma.manager.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        firstName: true,
        phoneNumber: true,
        password: true,
      },
    });
    if (manager) return { user: manager, role: UserRole.MANAGER };

    const employe = await prisma.employe.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        firstName: true,
        phoneNumber: true,
        password: true,
      },
    });
    if (employe) return { user: employe, role: UserRole.EMPLOYE };

    return null;
  };

  const result = await findUser();
  if (!result) {
    throw new Error("Aucun utilisateur trouvé avec cet e-mail.");
  }

  const { user, role } = result;
  if (user.password !== password) {
    throw new Error("Mot de passe incorrect.");
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    firstName: user.firstName,
    phoneNumber: user.phoneNumber,
    role,
  };
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