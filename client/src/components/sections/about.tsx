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

          <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-12 lg:gap-16 items-start">
            {/* Left: Short Description */}
            <div>
              <p className="text-xl font-light text-white leading-tight">
                I’m a <span className="text-primary font-normal">Full Stack Engineer</span> with 1.5 years of experience in building scalable microservices and cloud-native solutions. With hands-on expertise in <span className="text-primary font-normal">Spring Boot</span>, <span className="text-primary font-normal">AWS</span>, and <span className="text-primary font-normal">Angular</span>, I build performant systems and seamless integrations. Passionate about clean code, automation, and system design, I focus on delivering reliable, efficient, and production-ready solutions built to scale.
                <br></br>
                <br></br>
                When I'm not coding, you can find me playing Volleyball or Pickleball, or reading articles to continuously expand my knowledge in the ever-evolving world.
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
