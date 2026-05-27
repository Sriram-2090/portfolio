import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dock } from './ui/dock';
import { motion } from 'framer-motion';

// 1. HOME: 3D Isometric Architectural House with Pulsing Clinical Core & Lifting Roof
function Home3DIcon({ isActive, isHovered }) {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5 text-current"
        animate={{
          rotateY: isActive ? 360 : isHovered ? 25 : 0,
          rotateX: isHovered ? 15 : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        {/* Isometric base platform slab */}
        <polygon points="12,21 20,17 12,13 4,17" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
        
        {/* Spatial Floating Roof Gable - lifts up programmatically on hover/active */}
        <motion.polygon
          points="12,3 20,9 17,9 12,5 7,9 4,9"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity={isActive ? 0.35 : isHovered ? 0.18 : 0.05}
          animate={{
            y: isHovered || isActive ? -1.8 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        />

        {/* Isometric Vertical Structural Columns */}
        <line x1="4" y1="9" x2="4" y2="17" stroke="currentColor" strokeWidth="1.2" />
        <line x1="20" y1="9" x2="20" y2="17" stroke="currentColor" strokeWidth="1.2" />
        <line x1="12" y1="5" x2="12" y2="13" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />

        {/* Central glowing clinical core representing safe on-device data containment */}
        <motion.circle
          cx="12"
          cy="12"
          r="2.5"
          fill="currentColor"
          animate={{
            scale: isActive ? [1, 1.25, 1] : isHovered ? [1, 1.15, 1] : 1,
            opacity: isActive ? 1 : isHovered ? 0.85 : 0.45
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

// 2. HOW IT WORKS: 3D Isometric Stepped Columns representing the 3 phases of early detection
function HowItWorks3DIcon({ isActive, isHovered }) {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-5 h-5 text-current"
        animate={{
          rotateY: isHovered ? 25 : 0,
          rotateX: isHovered ? 15 : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        {/* Pillar 1 (Sensor Collection) - Left */}
        <motion.g
          animate={{
            y: isHovered ? [0, -2.5, 0] : 0,
          }}
          transition={{ repeat: isHovered ? Infinity : 0, duration: 1.5, delay: 0, ease: "easeInOut" }}
        >
          <polygon points="4,20 8,18 8,14 4,16" stroke="currentColor" strokeWidth="1" />
          <polygon points="8,18 12,16 12,12 8,14" stroke="currentColor" strokeWidth="1" />
          <polygon points="4,14 8,12 12,12 8,14" fill="currentColor" fillOpacity="0.08" />
        </motion.g>

        {/* Pillar 2 (On-Device Baseline Analysis) - Middle */}
        <motion.g
          animate={{
            y: isHovered ? [0, -2.5, 0] : 0,
          }}
          transition={{ repeat: isHovered ? Infinity : 0, duration: 1.5, delay: 0.18, ease: "easeInOut" }}
        >
          <polygon points="8,15 12,13 12,9 8,11" stroke="currentColor" strokeWidth="1" />
          <polygon points="12,13 16,11 16,7 12,9" stroke="currentColor" strokeWidth="1" />
          <polygon points="8,9 12,7 16,7 12,9" fill="currentColor" fillOpacity="0.15" />
        </motion.g>

        {/* Pillar 3 (Secure Warning Notification) - Right */}
        <motion.g
          animate={{
            y: isHovered ? [0, -2.5, 0] : 0,
          }}
          transition={{ repeat: isHovered ? Infinity : 0, duration: 1.5, delay: 0.36, ease: "easeInOut" }}
        >
          <polygon points="12,10 16,8 16,4 12,6" stroke="currentColor" strokeWidth="1" />
          <polygon points="16,8 20,6 20,2 16,4" stroke="currentColor" strokeWidth="1" />
          <polygon points="12,4 16,2 20,2 16,4" fill="currentColor" fillOpacity="0.25" />
        </motion.g>
        
        {/* A traveling glowing data pulse climbing the timeline steps */}
        <motion.circle
          r="1.5"
          fill="currentColor"
          animate={{
            cx: [6, 12, 18, 6],
            cy: [13, 8, 3, 13],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </div>
  );
}

// 3. TEAM: Overlapping Parallax 3D Research Discs that Float Separately
function Team3DIcon({ isActive, isHovered }) {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center" style={{ perspective: '100px', transformStyle: 'preserve-3d' }}>
      {/* 3 discs representing the small researcher trio */}
      <motion.div
        animate={{
          z: isActive ? 12 : isHovered ? 9 : 0,
          x: isHovered ? -3.5 : 0,
          y: isHovered ? -2.5 : 0,
          rotate: isHovered ? -12 : 0
        }}
        className="absolute w-3.5 h-3.5 border border-white/60 bg-black/90 rounded-full flex items-center justify-center shadow-lg"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span className="text-[6.5px] font-extrabold text-white scale-75">L</span>
      </motion.div>

      <motion.div
        animate={{
          z: isActive ? 6 : isHovered ? 4.5 : 0,
          x: isHovered ? 3.5 : 0,
          y: isHovered ? -3 : 0,
          rotate: isHovered ? 15 : 0
        }}
        className="absolute w-3.5 h-3.5 border border-white/40 bg-zinc-900/95 rounded-full flex items-center justify-center shadow-md"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span className="text-[6.5px] font-extrabold text-zinc-300 scale-75">M</span>
      </motion.div>

      <motion.div
        animate={{
          z: isActive ? 2 : isHovered ? 1.5 : 0,
          x: isHovered ? 0 : 0,
          y: isHovered ? 3.5 : 0,
        }}
        className="absolute w-3.5 h-3.5 border border-white/20 bg-zinc-950/98 rounded-full flex items-center justify-center shadow-sm"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span className="text-[6.5px] font-extrabold text-zinc-500 scale-75">N</span>
      </motion.div>
    </div>
  );
}

// 4. DEMO: Micro 3D Phone Chassis with a Screen Plane that Extrudes and Glows
function Demo3DIcon({ isActive, isHovered }) {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5 text-current"
        animate={{
          rotateY: isActive ? 25 : isHovered ? 15 : 0,
          rotateX: isActive ? 15 : isHovered ? 10 : 0,
          scale: isActive ? 1.12 : isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Micro Phone Base Chassis */}
        <rect x="6" y="2" width="12" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="19" r="0.6" fill="currentColor" />
        
        {/* Floating, glowing screen plane that lifts out of phone chassis */}
        <motion.rect
          x="7.5"
          y="3.5"
          width="9"
          height="13"
          rx="0.8"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity={isActive ? 0.35 : isHovered ? 0.18 : 0}
          animate={{
            y: isHovered || isActive ? 2.5 : 3.5,
            x: isHovered || isActive ? 6.5 : 7.5,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 12 }}
        />
      </motion.svg>
    </div>
  );
}

// 5. BETA/DOWNLOAD: 3D Secure Down-Load Chevron that Presses & Concentric Waves
function Download3DIcon({ isActive, isHovered }) {
  return (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5 text-current"
        animate={{
          y: isHovered ? [0, 1.5, 0] : 0,
        }}
        transition={{ repeat: isHovered ? Infinity : 0, duration: 1.2, ease: "easeInOut" }}
      >
        {/* Base secure download bracket */}
        <path d="M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Upward Concentric waves expanding from secure base on download trigger */}
        <motion.path 
          d="M8 19C 10 16, 14 16, 16 19" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeDasharray="1.5 1.5"
          animate={{
            opacity: isActive ? 1 : isHovered ? [0.2, 0.8, 0.2] : 0.2,
            scale: isActive || isHovered ? [1, 1.18, 1] : 1,
          }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />

        {/* Secure arrow compressing downward on platform click */}
        <motion.path
          d="M12 3V14M12 14L8 10M12 14L16 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            y: isActive ? 2.0 : isHovered ? 3.0 : 0,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 12 }}
        />
      </motion.svg>
    </div>
  );
}

const navItems = [
  { to: '/', label: 'Home', icon: Home3DIcon },
  { to: '/how-it-works', label: 'How It Works', icon: HowItWorks3DIcon },
  { to: '/team', label: 'Team', icon: Team3DIcon },
  { to: '/demo', label: 'Demo', icon: Demo3DIcon },
  { to: '/download', label: 'Beta', icon: Download3DIcon },
];

function ThreeDNavIcon({ icon: Icon, isActive, isHovered }) {
  return (
    <motion.div
      style={{
        perspective: '150px',
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isActive ? 1.15 : isHovered ? 1.08 : 1,
        y: isActive ? -4 : isHovered ? -2 : 0,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
      className="relative flex items-center justify-center w-6 h-6"
    >
      {/* 3D Underlay Reflection Glow */}
      <motion.div
        animate={{
          opacity: isActive ? 0.35 : isHovered ? 0.18 : 0,
          scale: isActive ? 1.1 : isHovered ? 0.95 : 0.6,
          z: isActive ? -12 : isHovered ? -8 : -4,
        }}
        className="absolute inset-0 bg-white rounded-full blur-[6px] mix-blend-screen pointer-events-none"
      />

      {/* Floating 3D Embossed Icon Body */}
      <motion.div
        animate={{
          rotateX: isHovered ? 18 : 0,
          rotateY: isHovered ? -18 : 0,
          z: isActive ? 14 : isHovered ? 8 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 15 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative z-10 flex items-center justify-center text-current"
      >
        <Icon isActive={isActive} isHovered={isHovered} />
      </motion.div>
    </motion.div>
  );
}

function NavItem({ item, isActive, pathname }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <Link 
      to={item.to} 
      title={item.label} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-10 flex items-center px-4 py-3 cursor-pointer outline-none select-none"
      onClick={() => {
        if (pathname === item.to) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'instant'
          });
        }
      }}
    >
      {isActive && (
        <motion.div
          layoutId="nav-active-bg"
          className="absolute inset-0 bg-white/[0.07] rounded-full border border-white/[0.12] shadow-[0_0_20px_rgba(255,255,255,0.06)]"
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        />
      )}
      <div className={`relative z-20 flex items-center gap-2.5 transition-all duration-300 ${isActive ? 'text-white' : 'text-text-secondary hover:text-white'}`}>
        <ThreeDNavIcon icon={Icon} isActive={isActive} isHovered={isHovered} />
        {isActive && (
          <motion.span 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="font-bold text-sm whitespace-nowrap overflow-hidden pr-1"
          >
            {item.label}
          </motion.span>
        )}
      </div>
    </Link>
  );
}

export default function Navigation() {
  const { pathname } = useLocation();
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-50 flex items-end justify-center pb-6">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.15}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }}
        whileDrag={{ scale: 1.05, shadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <Dock className="relative items-center bg-black/50 backdrop-blur-2xl border border-white/[0.05] rounded-full px-2 py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            return (
              <NavItem 
                key={item.to} 
                item={item} 
                isActive={isActive} 
                pathname={pathname} 
              />
            );
          })}
        </Dock>
      </motion.div>
    </div>
  );
}
