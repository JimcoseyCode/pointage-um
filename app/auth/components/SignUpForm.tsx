"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FormData} from "../types";
import { UserRole } from "@/types";


interface SignUpFormProps {
    formData: FormData;
    setFormData: (field: keyof FormData, value: string) => void;
    error: string;
    onSubmit: () => void;
}

export default function SignUpForm({ formData, setFormData, error, onSubmit }: SignUpFormProps) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }}>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                            id="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) => setFormData("firstName", e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Nom</Label>
                        <Input
                            id="name"
                            placeholder="Doe"
                            value={formData.name}
                            onChange={(e) => setFormData("name", e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="mouvUp@fds.com"
                        value={formData.email}
                        onChange={(e) => setFormData("email", e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData("password", e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Téléphone</Label>
                    <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="+33 6 12 34 56 78"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData("phoneNumber", e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="role">Rôle</Label>
                    <Select
                        value={formData.role}
                        onValueChange={(value) => setFormData("role", value)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un rôle" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value={UserRole.ADMIN}>Administrateur</SelectItem>
                            <SelectItem value={UserRole.RESPONSABLE}>Responsable</SelectItem>
                            <SelectItem value={UserRole.MANAGER}>Manager</SelectItem>
                            <SelectItem value={UserRole.EMPLOYE}>Employé</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                )}

                <Button type="submit" className="w-full">
                    S'inscrire
                </Button>
            </div>
        </form>
    );
}