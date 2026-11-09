import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseSpotlight() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 30, stiffness: 180 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable spotlight on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setEnabled(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <motion.div
        className="absolute w-[650px] h-[650px] -ml-[325px] -mt-[325px] rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.055) 0%, rgba(168, 85, 247, 0.035) 40%, rgba(3, 7, 18, 0) 70%)',
          filter: 'blur(30px)'
        }}
      />
    </div>
  );
}
