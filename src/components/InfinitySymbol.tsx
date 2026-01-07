import { motion } from "framer-motion";

const InfinitySymbol = () => {
  return (
    <motion.svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(217 91% 60%)" />
          <stop offset="50%" stopColor="hsl(271 81% 56%)" />
          <stop offset="100%" stopColor="hsl(217 91% 60%)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d="M30 30C30 18 40 10 50 10C60 10 70 18 70 30C70 42 80 50 90 50C100 50 110 42 110 30C110 18 100 10 90 10C80 10 70 18 70 30C70 42 60 50 50 50C40 50 30 42 30 30Z"
        stroke="url(#infinityGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 2.5, ease: "easeInOut" },
          opacity: { duration: 0.5 },
        }}
      />
    </motion.svg>
  );
};

export default InfinitySymbol;
