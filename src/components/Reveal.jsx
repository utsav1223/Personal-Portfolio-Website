import { motion } from "framer-motion";

const Reveal = ({ 
  children, 
  delay = 0, 
  x = 0, 
  y = 24,
  blur = 0,
  once = true, 
  threshold = 0.15,
  width = "auto"
}) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ 
          opacity: 0, 
          y, 
          x, 
          filter: `blur(${blur}px)`,
          willChange: "transform, opacity, filter"
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          x: 0, 
          filter: "blur(0px)" 
        }}
        viewport={{ 
          once, 
          amount: threshold 
        }}
        transition={{
          duration: 0.65,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
