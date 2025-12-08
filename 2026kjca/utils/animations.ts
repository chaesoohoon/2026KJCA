import { Variants } from 'framer-motion';

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)", y: 50 },
  visible: (i: any) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier for punchy motion
      delay: (typeof i === 'number' ? i : 0) * 0.15,
    },
  }),
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100, filter: "blur(10px)" },
  visible: (i: any) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "circOut",
      delay: (typeof i === 'number' ? i : 0) * 0.1,
    },
  }),
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};