import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Code, Database, Layers, Cloud, Server, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: ["Java", "JavaScript", "Python"]
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Spring Boot", "Angular", "ReactJS", "Node.js", "Django", "Flask", "FastAPI", "Strapi"]
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: ["DynamoDB", "RDS", "Firebase", "Redis"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", details: "S3, EC2, CloudFront, Lambda, API Gateway, Terraform" },
      "GCP", 
      "Jenkins", 
      "Docker", 
      "GitHub", 
      "RabbitMQ"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-[1px] bg-accent"></span>
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-8 bg-white/5 border-white/10 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:text-white group-hover:bg-primary/20 transition-colors">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => {
                    if (typeof skill === "string") {
                      return (
                        <span 
                          key={skill} 
                          className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-sm text-muted-foreground hover:text-white hover:border-white/20 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      );
                    } else {
                      return (
                        <div key={skill.name} className="w-full mt-2 mb-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20 text-sm text-accent font-medium">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground leading-relaxed">
                              {skill.details}
                            </span>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
