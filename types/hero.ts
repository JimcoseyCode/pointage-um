import { NextFont } from 'next/dist/compiled/@next/font'

export interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  title2?: string;
  pacifico: NextFont;
}

export interface TitleProps {
  title1?: string;
  title2?: string;
  pacifico: {
    className: string;
    variable: string;
  };
}