import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-0" />
      <ParticleBackground />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      <div className="max-w-5xl w-full z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading Group */}
          <div className="space-y-4">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter relative z-10 mix-blend-overlay">
                Utsav Patel
              </h1>
              {/* Ghost text for glow effect */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 absolute top-0 left-0 blur-xl z-0 select-none">
                Utsav Patel
              </h1>
            </div>

            <h3 className="text-2xl md:text-4xl font-light text-white/90">
              Software Engineer
            </h3>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting scalable <span className="text-white">REST APIs</span> and high-performance <span className="text-white">Microservices</span> for the modern web.
          </p>

          {/* Contact Info Grid - Highlighted */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a 
              href="mailto:utsavpatel00265@gmail.com" 
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/50 hover:text-accent transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent/20 transition-colors">
                <Mail size={18} className="text-white group-hover:text-accent transition-colors" />
              </div>
              <span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white">utsavpatel00265@gmail.com</span>
            </a>
            
            <a 
              href="tel:+918511725941" 
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent/50 hover:text-accent transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent/20 transition-colors">
                <Phone size={18} className="text-white group-hover:text-accent transition-colors" />
              </div>
              <span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white">+91 (851) 172 5941</span>
            </a>
          </div>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4"
          >
            <a 
              href="/resume.pdf" 
              download="Utsav_Patel_Resume.pdf"
              className="group relative px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-accent hover:text-black transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(179,157,219,0.4)]"
            >
              <span>Download Resume</span>
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 hover:border-accent/50 transition-all duration-300 text-white group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-accent transition-colors" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 hover:border-accent/50 transition-all duration-300 text-white group"
                aria-label="GitHub"
              >
                <Github size={20} className="group-hover:text-accent transition-colors" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce cursor-pointer hover:text-white transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
