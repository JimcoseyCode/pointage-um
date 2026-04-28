# FDS Pointage UM 🎯

Système de gestion de pointage et d'intérim pour la Faculté des Sciences de l'Université de Montpellier (Projet L3 Informatique).

## 🚀 Installation

```bash
# Cloner le projet
git clone git@github.com:JimcoseyCode/pointage-um.git

# Installer les dépendances
npm install

# Configurer la base de données (Prisma)
npx prisma generate
npx prisma db push

# Lancer en développement
npm run dev
```

## 🔑 Identifiants de Test

| Rôle | Email | Mot de passe |
| :--- | :--- | :--- |
| **Admin** | admin@e.com | test |
| **Responsable** | responsable@e.com | test |
| **Manager** | manager@e.com | test |
| **Employé** | employe@e.com | test |

## 🛠️ Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Langage**: TypeScript
- **Style**: Tailwind CSS + shadcn/ui
- **Base de données**: MongoDB via Prisma
- **Authentification**: NextAuth.js

## 👥 Équipe de Développement

- Al Charif Mohamad
- Al Mahmoud Al Ali Mahmoud
- Bouchrani Raphael
- El Hilali Hamza
- Yamoul Rajaa

---
Faculté des Sciences de Montpellier © 2024
