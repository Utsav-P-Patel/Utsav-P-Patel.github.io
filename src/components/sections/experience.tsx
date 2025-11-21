import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Quicko",
    role: "Full Stack Engineer",
    period: "Jan 2025 – Jul 2025",
    desc: [
      "Developed tax platform dashboards and payment modules on AWS Lambda, DynamoDB, and API Gateway.",
      "Built productivity CLI tools and implemented CI/CD pipelines."
    ],
    tech: ["AWS Lambda", "DynamoDB", "API Gateway", "Strapi", "Jenkins", "Node.js"]
  },
  {
    company: "Emerging Five",
    role: "Software Engineer",
    period: "Jan 2024 – Dec 2024",
    desc: [
      "Architected e-commerce microservices using Spring Boot and Redis.",
      "Conducted performance testing for Kalupur Bank using AWS EC2 and Selenium."
    ],
    tech: ["Java", "Spring Boot", "Redis", "Spring Security", "Python", "Selenium", "AWS EC2"]
  },
  {
    company: "Independent Freelance Engineer",
    role: "Freelance",
    period: "",
    desc: [
      "Created CGM Preamble (glucose monitoring system) with Flask, AWS EC2, and D3.js visualizations."
    ],
    tech: ["Flask", "D3.js", "AWS", "Python", "SQL"]
  },
  {
    company: "Epitome Corp",
    role: "Software Developer",
    period: "Jan 2023 – Nov 2023",
    desc: [
      "Built academic routine management app in Laravel with interactive UI."
    ],
    tech: ["Laravel", "PHP", "MySQL"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-[1px] bg-accent"></span>
          Experience
        </motion.h2>

        <div className="relative border-l border-white/10 ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(179,157,219,0.8)]" />

              <GlassCard className="p-6 md:p-8 hover:bg-white/5 transition-colors border-white/5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <p className="text-primary font-medium text-lg">{exp.role}</p>
                  </div>
                  {exp.period && (
                    <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full w-fit border border-white/5 whitespace-nowrap">
                      {exp.period}
                    </span>
                  )}
                </div>
                
                <ul className="space-y-2 list-disc list-inside text-muted-foreground mb-6">
                  {exp.desc.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent/5 text-accent/80 border border-accent/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
