'use server'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateUserData {
  email: string;
  password: string;
  name: string;
  firstName: string;
  phoneNumber: string;
}

export async function createUser(data: CreateUserData) {
  try {
    const user = await prisma.user.create({
      data: {
        ...data,
        role: "employe",
      },
    });
    
    return { success: true, user };
  } catch (error: any) {
    if (error.code === "P2002") {
      throw new Error("Cet email est déjà utilisé");
    }
    throw new Error("Une erreur est survenue lors de l'inscription");
  }
}