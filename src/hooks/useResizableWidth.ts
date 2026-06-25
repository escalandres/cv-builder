import { useCallback, useEffect, useRef, useState } from 'react';

interface Options {
  defaultWidth?: number;
  min?:          number;
  max?:          number;
  storageKey?:   string;
}

export function useResizableWidth({
  defaultWidth = 440,
  min          = 320,
  max          = 720,
  storageKey   = 'cvbuilder.sidebarWidth',
}: Options = {}) {

  const [width, setWidth] = useState<number>(() => {
    const saved = Number(localStorage.getItem(storageKey));
    return saved >= min && saved <= max ? saved : defaultWidth;
  });

  const dragging = useRef(false);
  const moved    = useRef(false);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    moved.current    = false;
    document.body.style.cursor     = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      moved.current = true;
      const next = Math.min(max, Math.max(min, e.clientX));
      setWidth(next);
    };

    const onMouseUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      document.body.style.cursor     = '';
      document.body.style.userSelect = '';

      if (!moved.current) return;

      setWidth(w => {
        localStorage.setItem(storageKey, String(w));
        return w;
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',   onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup',   onMouseUp);
    };
  }, [min, max, storageKey]);

  const resetWidth = useCallback(() => {
    setWidth(defaultWidth);
    localStorage.setItem(storageKey, String(defaultWidth));
  }, [defaultWidth, storageKey]);

  return { width, onMouseDown, resetWidth, min, max };
}
