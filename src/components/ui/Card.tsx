import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  className,
  hoverable = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300",
        hoverable && "hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
