import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Moviespace",
    desc: "A movie discovery app with login, watchlist, ratings, and reviews features.",
    stack: ["Angular", "Node.js", "Serverless", "AWS", "DynamoDB", "Jenkins"],
    link: "https://d2sr3k22f3k9wg.cloudfront.net/"
  },
  {
    title: "Eventify",
    desc: "Event management app using Spring Boot, React, Docker, GraphQL, AWS.",
    stack: ["Spring Boot", "React", "Docker", "GraphQL", "AWS"]
  },
  {
    title: "CGM Preamble",
    desc: "Patient glucose monitoring platform with Flask, AWS, D3.js.",
    stack: ["Flask", "AWS", "D3.js"],
    link: "http://cgm-preamble.s3-website.ap-south-1.amazonaws.com/CGM-Demo.mp4"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-px bg-accent"></span>
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard hoverEffect={true} className="h-full flex flex-col p-8 bg-white/5 border-white/5 group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </div>

                <p className="text-muted-foreground mb-8 grow leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
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
