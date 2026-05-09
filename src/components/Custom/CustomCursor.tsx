'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform =
            `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
        }
      });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    const updateTargets = () => {
      const targets = document.querySelectorAll('a, button, .interactive-card, input, textarea');
      targets.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateTargets();

    // Re-escaneia quando o DOM mudar (rotas, lazy load)
    const observer = new MutationObserver(updateTargets);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{ willChange: 'transform' }}
    >
      <AnimatePresence mode="wait">
        {/* Div externa controla o offset — fora do controle do Framer */}
        <div
          key={isHovering ? 'hover' : 'default'}
          style={{
            transform: isHovering
              ? 'translate(-10px, -10px)' // 👈 aqui você controla de verdade
              : 'translate(0px, 0px)',
          }}
        >
          <motion.img
            src={isHovering ? '/assets/cursor-hover.png' : '/assets/cursor-pointer.png'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0 }}
          />
        </div>
      </AnimatePresence>
    </div>
  );
}