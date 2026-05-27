import { useEffect, useRef } from 'react';

export default function BackgroundDynamics() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    targetX: 0,
    targetY: 0,
    isIdle: true,
    idleTimer: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track historical points for the smooth energy/liquid trail
    let trail = [];
    const maxTrailPoints = 32;

    // Track standard hover ripple waves
    let ripples = [];
    const maxRipples = 6;

    // Track click event shockwaves (heavy, expanding ripple rings)
    let shockwaves = [];

    // Track click event liquid-light swirling filaments
    let filaments = [];

    // Track click event tiny glowing fragments
    let fragments = [];

    // Track ambient optical streaks
    let streaks = [];
    const maxStreaks = 4;

    // Eased coordinates for the smoke-like spotlight glow
    let springX = width / 2;
    let springY = height / 2;

    // Initialize optical streaks
    for (let i = 0; i < maxStreaks; i++) {
      streaks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: 100 + Math.random() * 250,
        speed: 0.15 + Math.random() * 0.35,
        opacity: 0.01 + Math.random() * 0.03,
        width: 0.5 + Math.random() * 1.0,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = mouseRef.current;
    mouse.targetX = width / 2;
    mouse.targetY = height / 2;
    mouse.x = width / 2;
    mouse.y = height / 2;

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isIdle = false;

      clearTimeout(mouse.idleTimer);
      mouse.idleTimer = setTimeout(() => {
        mouse.isIdle = true;
      }, 1500);

      // Spawn a subtle ripple wave if speed is high enough
      const dx = mouse.targetX - mouse.lastX;
      const dy = mouse.targetY - mouse.lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist > 18 && ripples.length < maxRipples) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 1,
          maxRadius: 60 + Math.random() * 50,
          opacity: 0.14,
          speed: 1.0 + Math.random() * 0.8,
        });
      }

      mouse.lastX = mouse.targetX;
      mouse.lastY = mouse.targetY;
    };

    const handleMouseDown = (e) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      // 1. Trigger a powerful, expanding ripple shockwave (exponential easing)
      shockwaves.push({
        x: clickX,
        y: clickY,
        radius: 2,
        maxRadius: 360 + Math.random() * 80,
        opacity: 0.45,
        targetWidth: 6,
      });

      // 2. Trigger swirling liquid-light filaments (white energy burst lines)
      const filamentCount = 7 + Math.floor(Math.random() * 4);
      for (let i = 0; i < filamentCount; i++) {
        const angle = (i / filamentCount) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
        filaments.push({
          x: clickX,
          y: clickY,
          history: [{ x: clickX, y: clickY }],
          angle: angle,
          speed: 12 + Math.random() * 10,
          curl: (Math.random() - 0.5) * 0.09,
          opacity: 0.45,
          decay: 0.012 + Math.random() * 0.008,
          width: 0.8 + Math.random() * 1.4,
        });
      }

      // 3. Trigger tiny glowing fragments (dust-like dispersal)
      const fragmentCount = 14 + Math.floor(Math.random() * 8);
      for (let i = 0; i < fragmentCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2.5 + Math.random() * 5.5;
        fragments.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.0 + Math.random() * 1.8,
          opacity: 0.75,
          decay: 0.008 + Math.random() * 0.008,
        });
      }

      // 4. Intensify the spotlight briefly to simulate space-time warping
      mouse.speed += 32; 
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    // Keep track of animation loop
    let animationFrameId;
    let time = 0;

    const render = () => {
      time += 1;
      
      // Black Matte Background
      ctx.fillStyle = '#0E0E10';
      ctx.fillRect(0, 0, width, height);

      // Easing current mouse coordinates towards target
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Calculate instantaneous mouse velocity for distortions
      mouse.vx = mouse.targetX - mouse.x;
      mouse.vy = mouse.targetY - mouse.y;
      
      // Decelerate speed surge from clicks
      mouse.speed += (Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy) - mouse.speed) * 0.08;

      // Add smoothed coordinate to the liquid energy trail
      trail.push({ x: mouse.x, y: mouse.y });
      if (trail.length > maxTrailPoints) {
        trail.shift();
      }

      // 1. Render Ambient Drifting Haze (Smoke-like Glow)
      springX += (mouse.x - springX) * 0.05;
      springY += (mouse.y - springY) * 0.05;

      const glowBreathe = Math.sin(time * 0.01) * 35;
      const spotlightSize = 480 + glowBreathe + (mouse.speed * 2.2);
      
      // Cursor Spotlight Glow
      const spotlightGrad = ctx.createRadialGradient(
        springX, springY, 0,
        springX, springY, spotlightSize
      );
      spotlightGrad.addColorStop(0, `rgba(255, 255, 255, ${0.038 + (mouse.speed * 0.0006)})`);
      spotlightGrad.addColorStop(0.4, `rgba(255, 255, 255, ${0.012 + (mouse.speed * 0.0002)})`);
      spotlightGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = spotlightGrad;
      ctx.fillRect(0, 0, width, height);

      // Cinematic Slow-Morphing Backdrop Glow
      const driftX = width / 2 + Math.cos(time * 0.001) * (width / 5);
      const driftY = height / 2 + Math.sin(time * 0.0012) * (height / 5);
      const backdropGrad = ctx.createRadialGradient(
        driftX, driftY, 0,
        driftX, driftY, 650
      );
      backdropGrad.addColorStop(0, 'rgba(255, 255, 255, 0.012)');
      backdropGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = backdropGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Render Thin Glowing White Streaks
      streaks.forEach((streak) => {
        streak.x += streak.speed;
        if (streak.x - streak.length > width) {
          streak.x = -streak.length;
          streak.y = Math.random() * height;
        }

        ctx.beginPath();
        const streakGrad = ctx.createLinearGradient(
          streak.x, streak.y,
          streak.x + streak.length, streak.y
        );
        streakGrad.addColorStop(0, 'transparent');
        streakGrad.addColorStop(0.5, `rgba(255, 255, 255, ${streak.opacity})`);
        streakGrad.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = streak.width;
        ctx.moveTo(streak.x, streak.y);
        ctx.lineTo(streak.x + streak.length, streak.y);
        ctx.stroke();
      });

      // 3. Render Hover Ripple Waves
      ripples.forEach((ripple, index) => {
        ripple.radius += ripple.speed;
        ripple.opacity = (1 - (ripple.radius / ripple.maxRadius)) * 0.14;

        if (ripple.opacity <= 0) {
          ripples.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // 4. Render Click Shockwaves (Decelerating heavy rings)
      shockwaves.forEach((shock, index) => {
        // Exponential ease out for the shockwave radius
        shock.radius += (shock.maxRadius - shock.radius) * 0.08;
        shock.opacity = (1 - (shock.radius / shock.maxRadius)) * 0.45;
        const currentWidth = (1 - (shock.radius / shock.maxRadius)) * shock.targetWidth;

        if (shock.opacity <= 0.005 || shock.radius >= shock.maxRadius - 2) {
          shockwaves.splice(index, 1);
          return;
        }

        // Draw double concentric glass refraction rings
        ctx.beginPath();
        ctx.arc(shock.x, shock.y, shock.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${shock.opacity})`;
        ctx.lineWidth = currentWidth;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(shock.x, shock.y, Math.max(1, shock.radius - 8), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${shock.opacity * 0.3})`;
        ctx.lineWidth = currentWidth * 0.5;
        ctx.stroke();
      });

      // 5. Render Swirling Liquid-Light Click Filaments
      filaments.forEach((fil, index) => {
        // Curve mathematically and slow down
        fil.angle += fil.curl;
        fil.speed *= 0.91; // Smooth friction deceleration

        const lastPoint = fil.history[fil.history.length - 1];
        const nextX = lastPoint.x + Math.cos(fil.angle) * fil.speed;
        const nextY = lastPoint.y + Math.sin(fil.angle) * fil.speed;

        fil.history.push({ x: nextX, y: nextY });
        if (fil.history.length > 20) {
          fil.history.shift();
        }

        fil.opacity -= fil.decay;

        if (fil.opacity <= 0 || fil.speed < 0.1) {
          filaments.splice(index, 1);
          return;
        }

        // Draw the curved glowing energy line
        ctx.beginPath();
        ctx.moveTo(fil.history[0].x, fil.history[0].y);
        for (let i = 1; i < fil.history.length; i++) {
          ctx.lineTo(fil.history[i].x, fil.history[i].y);
        }
        
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
        ctx.strokeStyle = `rgba(255, 255, 255, ${fil.opacity})`;
        ctx.lineWidth = fil.width;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // 6. Render Tiny Glowing Click Fragments (Physics-based)
      fragments.forEach((frag, index) => {
        frag.x += frag.vx;
        frag.y += frag.vy;

        // Apply friction drag
        frag.vx *= 0.94;
        frag.vy *= 0.94;

        frag.opacity -= frag.decay;

        if (frag.opacity <= 0) {
          fragments.splice(index, 1);
          return;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${frag.opacity})`;
        ctx.beginPath();
        ctx.arc(frag.x, frag.y, frag.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 7. Render Hover Liquid-Light Trails
      if (trail.length > 2) {
        ctx.shadowBlur = 18;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.15)';
        
        for (let i = 1; i < trail.length; i++) {
          const pt1 = trail[i - 1];
          const pt2 = trail[i];
          
          const ratio = i / trail.length;
          const segmentOpacity = ratio * 0.16;
          const segmentWidth = ratio * 2.2;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${segmentOpacity})`;
          ctx.lineWidth = segmentWidth;
          ctx.lineCap = 'round';
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);
          ctx.stroke();
        }
        
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(mouse.idleTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#0E0E10]"
    />
  );
}
