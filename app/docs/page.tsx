"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="group hover:scale-105 transition-transform duration-300"
        >
          <Link href="/">
            <span className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Retour à l'accueil
            </span>
          </Link>
        </Button>
        <h1 className="text-4xl font-bold">Documentation</h1>
      </div>

      <nav className="flex space-x-4 mb-8">
        <Link href="#introduction" className="text-sm font-medium text-muted-foreground hover:text-primary">
          Introduction
        </Link>
        <Link href="#architecture" className="text-sm font-medium text-muted-foreground hover:text-primary">
          Architecture
        </Link>
        <Link href="#routes" className="text-sm font-medium text-muted-foreground hover:text-primary">
          Routes
        </Link>
        <Link href="#auth" className="text-sm font-medium text-muted-foreground hover:text-primary">
          Authentification
        </Link>
        <Link href="#components" className="text-sm font-medium text-muted-foreground hover:text-primary">
          Composants
        </Link>
      </nav>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section id="introduction" className="py-10">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            FDS Pointage UM est une application de gestion d'intérim moderne construite avec Next.js 13,
            utilisant les dernières fonctionnalités comme le App Router et les Server Components.
          </p>
          <p>L&apos;application permet de...</p>
        </section>

        <section id="architecture" className="py-10">
          <h2 className="text-2xl font-bold mb-4">Architecture du Projet</h2>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            {`
fds-pointage-um/
├── app/
│   ├── auth/           # Système d'authentification
│   ├── dashboard/      # Interface principale
│   ├── docs/           # Documentation
│   └── api/           # Routes API
├── components/        # Composants réutilisables
├── lib/              # Utilitaires et configurations
├── prisma/           # Modèles de base de données
└── public/           # Assets statiques
          `}
          </pre>
        </section>

        <section id="routes" className="py-10">
          <h2 className="text-2xl font-bold mb-4">Routes Principales</h2>
          <ul className="space-y-4">
            <li>
              <strong className="block text-lg">/ (Page d'accueil)</strong>
              <p className="text-muted-foreground">
                Landing page avec animation et redirection vers l'authentification
              </p>
            </li>
            <li>
              <strong className="block text-lg">/auth</strong>
              <p className="text-muted-foreground">
                Système d'authentification avec connexion et inscription
              </p>
            </li>
            <li>
              <strong className="block text-lg">/dashboard</strong>
              <p className="text-muted-foreground">
                Interface principale de l'application (protégée)
              </p>
            </li>
          </ul>
        </section>

        <section id="authentication" className="py-10">
          <h2 className="text-2xl font-bold mb-4">Système d'Authentification</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Fonctionnalités Implémentées</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Connexion avec email/mot de passe</li>
              <li>Inscription avec validation des champs</li>
              <li>Sessions persistantes avec NextAuth.js</li>
              <li>Protection des routes par rôle</li>
              <li>Déconnexion sécurisée avec redirection</li>
            </ul>
          </div>
        </section>

        <section id="dashboards" className="py-10">
          <h2 className="text-2xl font-bold mb-4">Tableaux de Bord par Rôle</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Dashboard Administrateur</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Statistiques globales</li>
                <li>Gestion des utilisateurs</li>
                <li>Paramètres système</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Dashboard Responsable</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vue d'ensemble des équipes</li>
                <li>Validation des plannings</li>
                <li>Statistiques et rapports</li>
                <li>Gestion des managers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Dashboard Manager</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestion d'équipe</li>
                <li>Planning</li>
                <li>Rapports d'équipe</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Dashboard Employé</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pointage personnel</li>
                <li>Consultation du planning</li>
                <li>Historique des pointages</li>
                <li>Gestion des demandes</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="components" className="py-10">
          <h2 className="text-2xl font-bold mb-4">Composants Réutilisables</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">LogoutButton</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                {`import { LogoutButton } from "@/components/ui/LogoutButton";
<LogoutButton />`}
              </pre>
              <p>Bouton de déconnexion unifié avec :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Animation au survol</li>
                <li>Icône de déconnexion</li>
                <li>Redirection vers /auth</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">LoadingSpinner</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                {`import { LoadingSpinner } from "@/components/ui/loading-spinner";
<LoadingSpinner />`}
              </pre>
              <p>Indicateur de chargement utilisé pendant :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vérification de session</li>
                <li>Chargement des données</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="middleware" className="py-10">
          <h2 className="text-2xl font-bold mb-4">Protection des Routes</h2>
          <div className="space-y-4">
            <p>Middleware NextAuth configuré pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vérification de session active</li>
              <li>Validation des rôles par route</li>
              <li>Redirection automatique vers /auth si non autorisé</li>
              <li>Persistance de session configurable</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}