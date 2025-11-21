import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <p className="flex items-center gap-2 text-muted-foreground text-sm hover:text-white transition-colors duration-300">
          Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by <span className="text-white font-medium">Utsav Patel</span>
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
