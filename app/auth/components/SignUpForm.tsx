"use client";

import { Button } from "@/components/ui/button";
import { FormField } from "./FormField";
import { FormData } from "../types";

interface SignUpFormProps {
  formData: FormData;
  setFormData: (field: keyof FormData, value: string) => void;
  error: string;
  onSubmit: () => void;
}

export default function SignUpForm({
  formData,
  setFormData,
  error,
  onSubmit,
}: SignUpFormProps) {
  return (
    <div className="space-y-4">
      <FormField
        id="name"
        label="Nom"
        value={formData.name}
        onChange={(value) => setFormData("name", value)}
        placeholder="Nom"
      />
      <FormField
        id="firstName"
        label="Prénom"
        value={formData.firstName}
        onChange={(value) => setFormData("firstName", value)}
        placeholder="Prénom"
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={(value) => setFormData("email", value)}
        placeholder="Email"
      />
      <FormField
        id="phoneNumber"
        label="Numéro de téléphone"
        value={formData.phoneNumber}
        onChange={(value) => setFormData("phoneNumber", value)}
        placeholder="Numéro de téléphone"
      />
      <FormField
        id="password"
        label="Mot de passe"
        type="password"
        value={formData.password}
        onChange={(value) => setFormData("password", value)}
        placeholder="Mot de passe"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button className="w-full" onClick={onSubmit}>
        Créer un compte
      </Button>
    </div>
  );
}