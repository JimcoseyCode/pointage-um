"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroGeometricProps as _HeroGeometricProps, TitleProps } from '@/types/hero';
const pacifico = Pacifico({
subsets: ["latin"],
weight: ["400"],
variable: '--font-pacifico',
});

// Supprimez l'interface HeroGeometricProps dupliquée ici

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

interface _ErrorResponse {
message: string;
status: number;
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Header badge="fds-pointage-um" />
          <Title title1="Mouv'Up Intérim" title2="Digital Vision" pacifico={pacifico} />
          <Description />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="rounded-full h-12 px-8 text-base relative overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <Link href="/auth">
                <span className="relative z-10 flex items-center">
                  S'authentifier
                  <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
            
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="rounded-full h-12 px-8 text-base group hover:scale-105 transition-transform duration-300 border-white/20"
            >
              <Link href="/docs">
                <span className="relative z-10 flex items-center">
                  Documentation
                  <ArrowRight className="ml-2 size-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

const Header = ({ badge }: { badge: string }) => (
  <motion.div
    custom={0}
    variants={fadeUpVariants}
    initial="hidden"
    animate="visible"
    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
  >
    <Image src="/img/fds-logo.png" alt="FDS Logo" width={20} height={20} />
    <span className="text-sm text-white/60 tracking-wide">{badge}</span>
  </motion.div>
);

const Title = ({ title1, title2, pacifico }: TitleProps) => (
  <motion.div
    custom={1}
    variants={fadeUpVariants}
    initial="hidden"
    animate="visible"
  >
    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
        {title1}
      </span>
      <br />
      <span
        className={cn(
          "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
          pacifico.className
        )}
      >
        {title2}
      </span>
    </h1>
  </motion.div>
);

const Description = () => (
  <motion.div
    custom={2}
    variants={fadeUpVariants}
    initial="hidden"
    animate="visible"
  >
    <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
      Gagnez en temps et en efficacité dans votre gestion d&apos;intérim.
    </p>
    <p>L&apos;application permet de...</p>
  </motion.div>
);