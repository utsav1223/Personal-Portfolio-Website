import { motion } from "framer-motion";

/**
 * A high-performance reveal utility for cinematic entry animations.
 * @param {Object} props
 * @param {number} props.delay - Start delay in seconds.
 * @param {number} props.x - Initial X offset.
 * @param {number} props.y - Initial Y offset.
 * @param {number} props.blur - Initial blur amount.
 * @param {boolean} props.once - Whether to animate only once.
 * @param {number} props.threshold - Intersection observer threshold (0 to 1).
 * @param {string} props.width - Container width property.
 */
const Reveal = ({ 
  children, 
  delay = 0, 
  x = 0, 
  y = 40, 
  blur = 10,
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
          willChange: "transform, opacity, filter" // Hardware acceleration
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
          duration: 1.2, // Slightly longer for a more "expensive" feel
          delay,
          ease: [0.16, 1, 0.3, 1], // Custom Apple-style Quintic Ease
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;