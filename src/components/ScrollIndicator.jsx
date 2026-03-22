import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="relative mt-20 flex flex-col items-center gap-4"
    >
      {/* Scroll Text with letter-spacing animation */}
      <motion.span 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/30"
      >
        Scroll
      </motion.span>

      {/* The Mouse Icon */}
      <div className="relative flex h-[52px] w-[28px] items-start justify-center rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
        {/* Animated Scroll Dot */}
        <motion.div
          animate={{
            y: [6, 28, 6],
            opacity: [0, 1, 0],
            scaleY: [1, 1.5, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
          className="mt-2 h-2 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
        />
      </div>

      {/* Elegant Vertical Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 40 }}
        transition={{ delay: 2.5, duration: 1.5, ease: "circOut" }}
        className="h-10 w-[1px] bg-gradient-to-b from-white/20 to-transparent"
      />
    </motion.div>
  );
};

export default ScrollIndicator;