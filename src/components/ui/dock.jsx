import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React from "react";

const Dock = React.forwardRef(({ className, children, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "mx-auto flex h-14 items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/[0.06] px-4 shadow-[0_12px_40px_rgba(0,0,0,0.8)] rounded-full",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
));
Dock.displayName = "Dock";

const DockIcon = ({ children, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.15, 
        y: -3,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
      }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center transition-all duration-300 p-2 text-text-secondary hover:text-white rounded-full", 
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
