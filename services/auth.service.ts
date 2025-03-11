'use server';

import prisma from "@/lib/db.prisma";
import { UserRole } from "@/types";

interface CreateUserData {
  name: string;
  firstName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: UserRole; // Utilisez l'enum Role de Prisma
}

export async function createUser(data: CreateUserData) {
  try {
    console.log("Données reçues pour la création d'utilisateur :", data);

    let user;
    switch (data.role) {
      case UserRole.ADMIN:
        console.log("Création d'un administrateur...");
        user = await prisma.admin.create({
          data: {
            name: data.name,
            firstName: data.firstName,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber,
            role: data.role,
          },
        });
        break;

      case UserRole.EMPLOYE:
        console.log("Création d'un employé...");
        user = await prisma.employe.create({
          data: {
            name: data.name,
            firstName: data.firstName,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber,
            role: data.role,
          },
        });
        break;

      case UserRole.MANAGER:
        console.log("Création d'un manager...");
        user = await prisma.manager.create({
          data: {
            name: data.name,
            firstName: data.firstName,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber,
            role: data.role,
          },
        });
        break;

      case UserRole.RESPONSABLE:
        console.log("Création d'un responsable...");
        user = await prisma.responsable.create({
          data: {
            name: data.name,
            firstName: data.firstName,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber,
            role: data.role,
          },
        });
        break;

      default:
        throw new Error("Rôle invalide");
    }

    console.log("Utilisateur créé avec succès :", user);
    return { success: true, user };
  } catch (error: any) {
    console.error("Erreur lors de la création de l'utilisateur :", error);

    if (error.code === "P2002") {
      throw new Error("Cet email est déjà utilisé");
    }
    throw new Error("Une erreur est survenue lors de l'inscription");
  }
}