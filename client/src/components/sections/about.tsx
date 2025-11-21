import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-accent"></span>
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Short Description */}
            <div>
              <p className="text-xl md:text-3xl lg:text-4xl font-light text-white leading-tight">
                I’m a <span className="text-primary font-normal">Full-Stack Developer</span> passionate about crafting scalable, high-performance REST APIs and elegant user interfaces.
              </p>
            </div>

            {/* Right: Education */}
            <div className="relative pt-8 border-t lg:border-t-0 lg:pt-0 lg:pl-8 lg:border-l border-white/10">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-white/5 text-white shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Bachelor of Technology</h3>
                    <p className="text-base md:text-lg text-primary mb-2">Computer Science and Engineering</p>
                    <p className="text-muted-foreground mb-4">Nirma University (2019–2023)</p>
                    
                    <div className="flex flex-col gap-3">
                      <span className="w-fit px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                        GPA: 8/10
                      </span>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        <span className="text-white/60">Focus:</span> Software Development & Backend Engineering
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
