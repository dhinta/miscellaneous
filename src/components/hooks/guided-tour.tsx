import { useEffect, useState } from 'react';
import { useCookie } from './cookie';

interface Stop {
  elem: HTMLElement;
  order: number;
  title: string;
  description: string;
}

export function useGuidedTour() {
  const [guideStops, setGuideStops] = useState<Stop[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { setCookie } = useCookie();

  useEffect(() => {
    const stops = document.querySelectorAll('[data-guided-tour-stop]');
    const elements = Array.from(stops).map((stop) => ({
      elem: stop as HTMLElement,
      order: Number(stop.getAttribute('data-order')),
      title: stop.getAttribute('data-title') ?? '',
      description: stop.getAttribute('data-description') ?? '',
    }));

    elements.sort((a, b) => a.order - b.order);
    setGuideStops(elements);
  }, []);

  return {
    getStops() {
      return guideStops;
    },
    getCurrentStop() {
      return guideStops[activeIndex];
    },
    onNext() {
      setActiveIndex((activeIndex) => activeIndex + 1);
    },
    onPrev() {
      setActiveIndex((activeIndex) => activeIndex - 1);
    },
    onTourComplete() {
      setCookie('tour', 'true', 10000);
      setActiveIndex(0);
    },
    isFirstElement() {
      return activeIndex === 0;
    },
    isLastElement() {
      return activeIndex === guideStops.length - 1;
    },
  };
}
