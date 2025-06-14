import { ReactNode } from "react";

interface BackgroundLayoutProps {
  card_bg: string;
  children?: ReactNode; // allows any HTML/JSX
}

const BackgroundLayout = ({ card_bg, children }: BackgroundLayoutProps) => {
    const heightClass = children ? '' : 'min-h-100';
  return (
    <div
      className={`${card_bg} ${heightClass} py-12 px-4 md:px-8 lg:px-12 2xl:px-16 overflow-x-hidden`}

    >
      {children}
    </div>
  );
};

export default BackgroundLayout;
