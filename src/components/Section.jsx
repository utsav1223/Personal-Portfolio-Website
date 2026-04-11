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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex max-w-3xl flex-col gap-4">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-100/75 sm:text-[10px] sm:tracking-[0.5em]">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="max-w-4xl text-[clamp(2.2rem,8vw,4.8rem)] font-body font-semibold normal-case tracking-tight text-white"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="mt-1 max-w-2xl text-sm font-medium leading-relaxed text-white/55 sm:text-base md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          variants={itemVariants}
          className="hidden items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.35em] text-white/35 backdrop-blur-xl lg:flex"
        >
          <div className="h-[1px] w-10 bg-gradient-to-r from-cyan-400/60 to-transparent" />
          Section Focus
        </motion.div>
      </motion.div>

      <div className="relative z-10">{children}</div>
    </div>
  </section>
);

export default Section;
