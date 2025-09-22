import { useEffect, useState, RefObject } from 'react';

export const useScrollAnimation = (elementRef: RefObject<HTMLElement>, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, threshold]);

  return isVisible;
};

export const useStaggeredAnimation = (itemsCount: number, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const triggerAnimation = () => {
    Array.from({ length: itemsCount }, (_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * delay);
    });
  };

  return { visibleItems, triggerAnimation };
};