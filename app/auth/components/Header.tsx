import Image from "next/image";
import { HeaderProps } from "../types";

export const Header = ({ badge }: HeaderProps) => (
  <div className="flex items-center space-x-3">
    <Image src="/img/fds-logo.png" alt="FDS Logo" width={50} height={50} />
    <span className="text-sm text-muted-foreground tracking-wide">{badge}</span>
  </div>
);