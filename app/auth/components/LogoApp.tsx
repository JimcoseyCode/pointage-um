import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export const LogoApp = () => (
  <h1 className="text-base md:text-2xl font-bold mb-6 md:mb-8 tracking-tight">
    <span className="bg-clip-text text-transparent bg-gradient-to-b from-black to-white/80">
      Mouv&apos;Up Intérim
    </span>
    <br />
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
        pacifico.className
      )}
    >
      Digital Vision
    </span>
  </h1>
);