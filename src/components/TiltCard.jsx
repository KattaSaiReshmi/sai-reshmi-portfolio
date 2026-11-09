import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({
  children,
  className = "",
  intensity = 15,
  glare = true,
  onClick
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), {
    damping: 25,
    stiffness: 300,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), {
    damping: 25,
    stiffness: 300,
  });

  const glareX = useTransform(x, [0, 1], ['0%', '100%']);
  const glareY = useTransform(y, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    x.set(mouseXPos / width);
    y.set(mouseYPos / height);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      className={`relative rounded-2xl transition-shadow duration-300 ${className}`}
    >
      {children}

      {/* Dynamic Glare Overlay */}
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            opacity: isHovered ? 0.15 : 0,
            transition: 'opacity 0.25s ease',
          }}
        >
          <motion.div
            className="absolute -inset-[100%] w-[300%] h-[300%]"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(0,240,255,0.3) 30%, transparent 60%)',
              x: glareX,
              y: glareY,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
