'use client'
import { useState, useEffect } from 'react';

export function useMousePointer() {
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    // Media query para ponteiro fino (mouse/trackpad)
    const mouseQuery = window.matchMedia('(pointer: fine)');
    
    // Define o estado inicial
    setHasMouse(mouseQuery.matches);

    // Ouve mudanças (ex: conectar um mouse via USB-C no tablet)
    const handler = (e: MediaQueryListEvent) => setHasMouse(e.matches);
    mouseQuery.addEventListener('change', handler);
    
    return () => mouseQuery.removeEventListener('change', handler);
  }, []);

  return hasMouse;
}