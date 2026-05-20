'use client'
import { useState, useEffect } from 'react';

export function useMousePointer() {
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    const mouseQuery = window.matchMedia('(pointer: fine)');
    
    setHasMouse(mouseQuery.matches);

    const handler = (e: MediaQueryListEvent) => setHasMouse(e.matches);
    mouseQuery.addEventListener('change', handler);
    
    return () => mouseQuery.removeEventListener('change', handler);
  }, []);

  return hasMouse;
}