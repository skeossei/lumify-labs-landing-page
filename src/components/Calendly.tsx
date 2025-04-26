"use client";

import { FC, ReactNode } from "react";
import Link from "next/link"; // Import Link!

interface CalendlyProps {
  children: ReactNode;
  className?: string;
}

const Calendly: FC<CalendlyProps> = ({ children, className }) => {
  return (
    <Link href="/call" passHref>
      <button className={className}>{children}</button>
    </Link>
  );
};

export default Calendly;
