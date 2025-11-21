import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 relative overflow-hidden",
        hoverEffect && "hover:bg-white/10 hover:shadow-[0_0_25px_rgba(179,157,219,0.2)] hover:-translate-y-1 transition-all duration-500",
        className
      )}
      {...props}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {children}
    </motion.div>
  );
}
