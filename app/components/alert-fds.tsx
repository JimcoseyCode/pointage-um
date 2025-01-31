import { Badge } from "@/components/ui/badge";

export function BadgeProgressDeveloppement() {
  return <Badge variant="destructive">En cours de développement ! </Badge>;
}
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertFdsProject() {
  return (
    <>
      <BadgeProgressDeveloppement />
      <Alert>
        <AlertTitle className="text-2xl">Pointage-UM</AlertTitle>
        <AlertDescription>
          c &apos;  est la simplicité du pointage mobile au service de votre entreprise.
          Notre application est facile à utiliser, accessible à tous les
          employés et personnalisable selon vos besoins. Fini les feuilles de
          pointage papier, passez à une gestion du temps moderne et efficace.
        </AlertDescription>
      </Alert>
    </>
  );
}
