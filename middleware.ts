import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    if (!token) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }

    // Protection des routes par rôle
    const roleRoutes = {
      "/dashboard/admin": "admin",
      "/dashboard/manager": "manager",
      "/dashboard/employe": "employe",
      "/dashboard/responsable": "responsable"
    };

    for (const [route, role] of Object.entries(roleRoutes)) {
      if (path.startsWith(route) && token.role !== role) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*"
  ]
};