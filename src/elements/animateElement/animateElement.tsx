import * as React from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export interface IAnimateElement {
  children: React.ReactNode | React.ReactNode[];
}

const blockAnimation = {
  hidden: {
    opacity: 0,
    y: "2rem",
  },
  visible: {
    opacity: 1,
    y: "0rem",
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const AnimateElement = (props: IAnimateElement) => {
  const { children } = props;
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={blockAnimation}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateElement;
