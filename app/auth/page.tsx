"use client";

// Ajoutez ces imports
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { FormData } from "./types";
import { LogoApp } from "./components/LogoApp";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { createUser } from "@/services/auth.service";
import Background from "./components/ui/BackgroundAnnimation";
import { ApiError as _ApiError } from "@/types/error";
import type { Error as _CustomError } from "@/types/error"; // Ajoutez cette ligne

export default function AuthForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    firstName: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      name: "",
      firstName: "",
      phoneNumber: "",
    });
    setError("");
  };

  const handleLogin = async () => {
    try {
      if (!formData.email || !formData.password) {
        setError("Veuillez remplir tous les champs");
        return;
      }

      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        resetForm();
        router.push("/dashboard");
      }
    } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue";
    setError(errorMessage);
    console.error("Erreur de connexion:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const { email, password, name, firstName, phoneNumber } = formData;

      if (!email || !password || !name || !firstName || !phoneNumber) {
        setError("Veuillez remplir tous les champs");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Format d'email invalide");
        return;
      }

      if (!/^(\+33|0)[1-9](\d{2}){4}$/.test(phoneNumber)) {
        setError("Format de numéro de téléphone invalide");
        return;
      }

      const { success } = await createUser(formData);

      if (success) {
        resetForm();
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (!result?.error) {
          router.push("/dashboard");
        }
      }
    } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue";
    setError(errorMessage);
    console.error("Erreur d'inscription:", error);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        {/* Ajout du bouton retour */}
        <div className="absolute top-4 left-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group hover:scale-105 transition-transform duration-300 backdrop-blur-sm bg-white/90"
          >
            <Link href="/">
              <span className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Retour
              </span>
            </Link>
          </Button>
        </div>

        <Card className="w-full max-w-md backdrop-blur-sm bg-white/90 shadow-xl">
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between space-x-4">
              {/* <Header badge="Authentification" /> */}
              <LogoApp />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Authentification</CardTitle>
              <CardDescription className="text-gray-500">
                Connectez-vous ou créez un compte.
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Connexion</TabsTrigger>
                <TabsTrigger value="signup">Création de compte</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <LoginForm
                  formData={formData}
                  setFormData={updateFormData}
                  error={error}
                  onSubmit={handleLogin}
                />
              </TabsContent>

              <TabsContent value="signup">
                <SignUpForm
                  formData={formData}
                  setFormData={updateFormData}
                  error={error}
                  onSubmit={handleSignUp}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}