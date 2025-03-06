import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormFieldProps } from "../types";

export const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);