import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, z: -180, rotateX: 8, filter: 'blur(12px)' }}
      animate={{ opacity: 1, scale: 1, z: 0, rotateX: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.05, z: 120, rotateX: -8, filter: 'blur(12px)' }}
      transition={{ 
        type: 'spring',
        stiffness: 130,
        damping: 18,
        mass: 0.7,
        duration: 0.6
      }}
      style={{ 
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  );
}

