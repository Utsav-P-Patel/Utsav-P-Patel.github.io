import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const pubs = [
  {
    title: "“Towards Automating Irrigation: A Fuzzy Logic-based Water Irrigation System using IoT and Deep Learning” (Published in Springer’s Modeling Earth Systems and Environment, July 2022)",
    link: "https://link.springer.com/article/10.1007/s40808-022-01452-0"
  },
  {
    title: "ISRO collaboration: Detection and Analysis of Lunar Mineralogy from Hyperspectral Data (Chandrayaan-2)",
    link: null
  },
  {
    title: "Land Use Land Cover Classification using Deep Learning (UNet, SAR data)",
    link: null
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-[1px] bg-accent"></span>
          Publications & Research
        </motion.h2>

        <GlassCard className="p-0 overflow-hidden bg-white/5">
          <div className="divide-y divide-white/10">
            {pubs.map((pub, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 hover:bg-white/5 transition-colors flex gap-4 items-start group"
              >
                <FileText className="shrink-0 text-accent mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {pub.title}
                  </p>
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                      View Publication <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
