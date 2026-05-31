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
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => (
  <section
    id={id}
    className={`relative scroll-mt-24 py-16 sm:py-20 md:scroll-mt-28 lg:py-24 ${className}`}
  >
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 md:gap-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex max-w-3xl flex-col gap-3">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="h-1.5 w-8 rounded-full bg-teal-600" />
            <span className="section-kicker">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="max-w-4xl text-3xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          variants={itemVariants}
          className="hidden items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-bold uppercase text-slate-500 shadow-sm lg:flex"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-teal-600" />
          Portfolio Section
        </motion.div>
      </motion.div>

      <div className="relative z-10">{children}</div>
    </div>
  </section>
);

export default Section;
