import { Variants } from 'framer-motion';

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 }, // Reduced blur for performance
  visible: (i: any) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: (typeof i === 'number' ? i : 0) * 0.1,
    },
  }),
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "circOut",
      delay: (typeof i === 'number' ? i : 0) * 0.1,
    },
  }),
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};