"use client";

import { Button } from "@/components/ui/button";
import { FormField } from "@/app/auth/components/FormField";
import { FormData } from "@/app/auth/types";

interface LoginFormProps {
  formData: FormData;
  setFormData: (field: keyof FormData, value: string) => void;
  error: string;
  onSubmit: () => void;
}

export default function LoginForm({
  formData,
  setFormData,
  error,
  onSubmit,
}: LoginFormProps) {
  return (
    <div className="space-y-4">
      <FormField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={(value) => setFormData("email", value)}
        placeholder="Email"
      />
      <FormField
        id="password"
        label="Mot de passe"
        type="password"
        value={formData.password}
        onChange={(value: string) => setFormData("password", value)}
        placeholder="Mot de passe"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button className="w-full" onClick={onSubmit}>
        Se connecter
      </Button>
    </div>
  );
}