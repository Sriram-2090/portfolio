import React, { useState, useRef, forwardRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TiltCard = forwardRef(({ children, className = "", maxTilt = 12 }, ref) => {
  const localRef = useRef(null);
  const cardRef = ref || localRef;
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for 3D rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for card tilt rotation
  const rotateX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const rotateY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });

  // Spring values for the spotlight cursor glow effect inside the card
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const smoothSpotlightX = useSpring(spotlightX, { stiffness: 180, damping: 22 });
  const smoothSpotlightY = useSpring(spotlightY, { stiffness: 180, damping: 22 });

  const handleMouseMove = (e) => {
    const activeRef = cardRef.current;
    if (!activeRef) return;
    const rect = activeRef.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Cursor coordinates relative to the element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize mapping from -0.5 to 0.5
    const rX = ((mouseY / height) - 0.5) * -maxTilt;
    const rY = ((mouseX / width) - 0.5) * maxTilt;

    x.set(rX);
    y.set(rY);

    // Save spotlight pixel coordinates
    spotlightX.set(mouseX);
    spotlightY.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`relative rounded-2xl overflow-hidden glass transition-all duration-300 ${className}`}
    >
      {/* Milled Glass Inner Background Highlight */}
      <div className="absolute inset-0 bg-[#0A0A0C]/40 backdrop-blur-xl z-0 pointer-events-none" />

      {/* Dynamic Cursor Spotlight Overlay - Spring Inertia Glowing Halo */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 220px at ${smoothSpotlightX}px ${smoothSpotlightY}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Interactive Border Highlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 border border-white/[0.04] rounded-2xl transition-colors duration-300"
        style={{
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.05)',
        }}
      />

      {/* Inner Content - Lifted slightly in 3D space for parallax depth */}
      <div 
        style={{ 
          transform: 'translateZ(15px)', 
          transformStyle: 'preserve-3d' 
        }} 
        className="w-full h-full relative z-20"
      >
        {children}
      </div>
    </motion.div>
  );
});

TiltCard.displayName = "TiltCard";
export default TiltCard;

