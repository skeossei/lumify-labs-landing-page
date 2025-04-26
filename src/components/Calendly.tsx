// components/Calendly.tsx
"use client";

import { FC, ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Assuming you're using shadcn/ui
import { InlineWidget } from "react-calendly";

interface CalendlyProps {
  children: ReactNode;
  className?: string;
}

const Calendly: FC<CalendlyProps> = ({ children, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className={className}>{children}</button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <div className="h-[700px]">
          <InlineWidget
            url="hhttps://calendly.com/sev-keoss/lumify-labs-intro-call"
            styles={{ height: "100%", width: "100%" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Calendly;
