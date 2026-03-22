import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Primary Cyan Orb - Slow drift */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] left-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Subtle Purple Orb - Deep background */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] -right-[5%] h-[600px] w-[600px] rounded-full bg-purple-600/5 blur-[150px]"
      />

      {/* Accenting Indigo Orb */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[10%] left-[20%] h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[100px]"
      />
    </div>
  );
};

export default FloatingOrbs;