import React from 'react';
import { motion } from 'framer-motion';

// Personalized Baseline - 3D Undulating Rhythm Wave
export function ThreeDBaseline() {
  const bars = Array.from({ length: 9 });
  return (
    <div 
      className="relative w-28 h-28 flex items-center justify-center pointer-events-none select-none" 
      style={{ 
        perspective: '800px', 
        transformStyle: 'preserve-3d' 
      }}
    >
      {/* 3D Undulating Sine-Wave Grid */}
      <div 
        className="flex gap-1.5 items-end justify-center h-14" 
        style={{ 
          transform: 'rotateX(30deg) rotateY(-15deg)', 
          transformStyle: 'preserve-3d' 
        }}
      >
        {bars.map((_, i) => {
          const delay = i * 0.16;
          return (
            <motion.div
              key={i}
              animate={{ 
                height: [14, 46, 14],
                backgroundColor: [
                  'rgba(255, 255, 255, 0.12)', 
                  'rgba(255, 255, 255, 0.75)', 
                  'rgba(255, 255, 255, 0.12)'
                ],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.2, 
                delay: delay, 
                ease: "easeInOut" 
              }}
              className="w-1.5 rounded-full"
              style={{ 
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.08)' 
              }}
            />
          );
        })}
      </div>

      {/* Surrounding slow-floating calibration orbital ring */}
      <motion.div
        animate={{ 
          rotateX: 75, 
          rotateY: 0, 
          rotateZ: 360 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 9.5, 
          ease: "linear" 
        }}
        className="absolute w-24 h-24 rounded-full border border-white/[0.08]"
        style={{ transformStyle: 'preserve-3d' }}
      />
    </div>
  );
}

// Passive Collection - Floating 3D Phone with Concentric Data Waves
export function ThreeDPassiveCollection() {
  return (
    <div 
      className="relative w-28 h-28 flex items-center justify-center pointer-events-none select-none" 
      style={{ 
        perspective: '800px', 
        transformStyle: 'preserve-3d' 
      }}
    >
      {/* 3D Floating Mobile Phone Chassis */}
      <motion.div
        animate={{ 
          rotateY: [-15, 15, -15], 
          rotateX: [20, 32, 20],
          y: [-5, 5, -5]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6, 
          ease: "easeInOut" 
        }}
        className="absolute w-12 h-20 rounded-[10px] border border-white/20 bg-white/[0.02] backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Notch details */}
        <div className="absolute top-1 w-4 h-0.5 bg-white/30 rounded-full" />
        
        {/* Bouncing core sensor particle inside screen */}
        <motion.div
          animate={{ 
            scale: [0.75, 1.2, 0.75], 
            opacity: [0.4, 0.8, 0.4] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.2, 
            ease: "easeInOut" 
          }}
          className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        />
      </motion.div>

      {/* Satisfying concentric passive collection waves */}
      {[0, 1, 2].map((idx) => {
        const delay = idx * 0.8;
        return (
          <motion.div
            key={idx}
            initial={{ scale: 0.4, opacity: 0, translateZ: 0 }}
            animate={{ 
              scale: [0.55, 1.35, 1.6], 
              opacity: [0, 0.25, 0],
              translateZ: [0, 20, 35]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.4, 
              delay: delay, 
              ease: "easeOut" 
            }}
            className="absolute w-20 h-20 rounded-full border border-t-white/30 border-r-transparent border-b-transparent border-l-transparent"
            style={{ 
              transformStyle: 'preserve-3d', 
              transform: 'rotateX(75deg)' 
            }}
          />
        );
      })}
    </div>
  );
}

// Private Processing - 3D Secure Shield & Inbound Data Containment Capsule
export function ThreeDPrivateProcessing() {
  const particles = Array.from({ length: 4 });
  return (
    <div 
      className="relative w-28 h-28 flex items-center justify-center pointer-events-none select-none" 
      style={{ 
        perspective: '800px', 
        transformStyle: 'preserve-3d' 
      }}
    >
      {/* 3D Security Shield Centerpiece */}
      <motion.div
        animate={{ 
          y: [-4, 4, -4],
          rotateY: [-22, 22, -22]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5, 
          ease: "easeInOut" 
        }}
        className="absolute w-12 h-16 flex items-center justify-center z-20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.6" 
          className="w-10 h-12 text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.4)]"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" 
          />
        </svg>
      </motion.div>

      {/* Orbiting Secure Ring */}
      <motion.div
        animate={{ 
          rotateX: 75, 
          rotateZ: 360 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8, 
          ease: "linear" 
        }}
        className="absolute w-20 h-20 rounded-full border border-dashed border-white/20"
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* Orbiting secure shield arc (horizontal guard) */}
      <motion.div
        animate={{ 
          rotateY: -360, 
          rotateX: 20 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10, 
          ease: "linear" 
        }}
        className="absolute w-24 h-24 rounded-full border border-t-white/25 border-r-transparent border-b-white/10 border-l-transparent"
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* Satisfying orbiting data fragments that feed INTO the shield and lock inside */}
      {particles.map((_, i) => {
        const delay = i * 0.8;
        const angle = (i * Math.PI) / 2; // Shoot from 4 cardinal directions
        return (
          <motion.div
            key={i}
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ 
              x: [Math.cos(angle) * 32, 0],
              y: [Math.sin(angle) * 32, 0],
              scale: [0.3, 1.0, 0.1],
              opacity: [0, 0.85, 0],
              z: [30, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.8, 
              delay: delay, 
              ease: "easeIn" 
            }}
            className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)] z-30"
          />
        );
      })}
    </div>
  );
}
