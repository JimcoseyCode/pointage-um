import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { validateUser } from "./auth.utils";
import { SessionUser, UserRole } from "@/types/auth/auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Veuillez remplir tous les champs.");
        }

        return await validateUser(credentials.email, credentials.password);
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.firstName = user.firstName;
        token.phoneNumber = user.phoneNumber;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        name: token.name,
        firstName: token.firstName,
        email: token.email,
        phoneNumber: token.phoneNumber,
        role: token.role as UserRole,
      } as SessionUser;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  pages: {
    signIn: "/auth",
  },
};