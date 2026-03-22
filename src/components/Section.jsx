import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => (
  <section 
    id={id} 
    className={`relative scroll-mt-24 py-16 sm:py-20 md:scroll-mt-32 md:py-28 lg:py-36 ${className}`}
  >
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 md:gap-14 md:px-12">
      
      {/* Section Header */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex max-w-3xl flex-col gap-4">
          {/* Eyebrow with leading accent */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-cyan-500/50" />
            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/40 sm:text-[10px] sm:tracking-[0.5em]">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants} 
            className="text-[clamp(2rem,10vw,5rem)] font-body font-semibold normal-case tracking-tight text-white"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              variants={itemVariants} 
              className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-white/50 sm:text-base md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Decorative Section Index (Optional/Visual) */}
        <motion.div 
          variants={itemVariants}
          className="hidden select-none text-7xl font-black text-white/[0.02] lg:block xl:text-9xl"
        >
          {id.charAt(0).toUpperCase()}
        </motion.div>
      </motion.div>

      {/* Section Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  </section>
);

export default Section;
