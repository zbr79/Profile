import { useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion || !ref.current || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold]);

  return [ref, isVisible];
};

export default useInView;
