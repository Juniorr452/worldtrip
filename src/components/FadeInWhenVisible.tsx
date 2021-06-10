import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface FadeInWhenVisibleProps {
  visible: object;
  hidden: object;
  duration?: number;
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ 
  visible, 
  hidden, 
  duration = 1,
  children 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration }}
      variants={{
        visible: {opacity: 1, ...visible},
        hidden: {opacity: 0, ...hidden}
      }}
    >
      {children}
    </motion.div>
  );
}