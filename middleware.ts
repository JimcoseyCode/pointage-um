import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "@/types/auth/auth";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Si l'utilisateur est authentifié mais n'a pas accès à la route actuelle
    if (token) {
      // Rediriger vers le bon tableau de bord en fonction du rôle
      switch (token.role) {
        case UserRole.admin:
          if (!path.startsWith("/dashboard/admin")) {
            return NextResponse.redirect(new URL("/dashboard/admin", req.url));
          }
          break;
        case UserRole.responsable:
          if (!path.startsWith("/dashboard/responsable")) {
            return NextResponse.redirect(new URL("/dashboard/responsable", req.url));
          }
          break;
        case UserRole.manager:
          if (!path.startsWith("/dashboard/manager")) {
            return NextResponse.redirect(new URL("/dashboard/manager", req.url));
          }
          break;
        case UserRole.employe:
          if (!path.startsWith("/dashboard/employe")) {
            return NextResponse.redirect(new URL("/dashboard/employe", req.url));
          }
          break;
        default:
          // Si le rôle n'est pas reconnu, rediriger vers /auth
          return NextResponse.redirect(new URL("/auth", req.url));
      }
    }

    // Si l'utilisateur est authentifié et a accès à la route actuelle
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Seuls les utilisateurs authentifiés peuvent accéder
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"], // Appliquer ce middleware à toutes les routes sous /dashboard
};