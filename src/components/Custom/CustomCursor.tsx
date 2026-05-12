'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMousePointer } from '@/hooks/useMousePointer';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const isMouseUser = useMousePointer();

  useEffect(() => {
    if (!isMouseUser) return;

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
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const updateTargets = () => {
      const targets = document.querySelectorAll('a, button, .interactive-card, input, textarea, ul');
      targets.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateTargets();

    const observer = new MutationObserver(updateTargets);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [[isMouseUser]]);

  if (!isMouseUser) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`
          fixed top-0 left-0 pointer-events-none z-[99999]
          ${isMouseUser ? 'hidden md:block' : 'hidden'}
          `}
        style={{
          willChange: 'transform',
          opacity: isVisible ? 1 : 0, 
          transition: 'opacity 0.15s ease',
        }}
      >
        <AnimatePresence mode="wait">
          <div
            key={isHovering ? 'hover' : 'default'}
            style={{
              transform: isHovering
                ? 'translate(-10px, -10px)'
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

      <style>{`
        dialog::backdrop { cursor: none; }
        dialog * { cursor: none !important; }
      `}</style>
    </>
  );
}