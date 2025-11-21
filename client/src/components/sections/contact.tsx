import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background gradient for footer area */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-muted-foreground mb-10">
              Open to opportunities in Full-Stack Engineering and Cloud Architecture.
            </p>

            <div className="flex justify-center gap-6">
              <a href="mailto:utsavpatel00265@gmail.com" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white group">
                <Mail className="group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white group">
                <Linkedin className="group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-white group">
                <Github className="group-hover:text-white transition-colors" />
              </a>
            </div>
          </GlassCard>
          
          <p className="text-white/20 text-sm mt-12">
            © {new Date().getFullYear()} Utsav Patel. Crafted with React & Tailwind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
