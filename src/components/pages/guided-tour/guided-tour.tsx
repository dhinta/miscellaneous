import { useCookie } from '@/components/hooks/cookie';
import { useGuidedTour } from '@/components/hooks/guided-tour';
import { Button } from '@/components/ui/button';
import { Dispatch, SetStateAction, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Footer, NavigationDemo, TableDemo } from './demo-components';

export function GuideMeWindow({ onClose }: { onClose: Dispatch<SetStateAction<boolean>> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [startTour, setStartTour] = useState(false);
  const { getCurrentStop, onTourComplete, onPrev, onNext, isFirstElement, isLastElement } = useGuidedTour();
  const activeStop = getCurrentStop();

  const [style, setStyle] = useState({ top: '33%', left: '33%' });

  useLayoutEffect(() => {
    if (startTour && ref.current) {
      const { top, left } = activeStop.elem.getBoundingClientRect();
      let newLeft = left - (ref.current.offsetWidth || 0) / 2;
      let newTop = top + activeStop.elem.offsetHeight;

      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newLeft + (ref.current?.offsetWidth || 0) > window.innerWidth) {
        newLeft = window.innerWidth - (ref.current?.offsetWidth || 0);
      }

      if (newTop + (ref.current?.offsetHeight || 0) > window.innerHeight) {
        newTop = window.innerHeight - (ref.current?.offsetHeight || 0) - activeStop.elem.offsetHeight - 10;
      }

      if (newTop < 0) {
        newTop = 0;
      }

      setStyle({ top: `${newTop}px`, left: `${newLeft}px` });
    }
  }, [activeStop, startTour]);

  const endTour = () => {
    onTourComplete();
    onClose(true);
  };

  const welcomeWindow = (
    <>
      <div className="text-bold text-2xl mb-2">Guided Tour</div>
      <p className="text-sm text-muted-foreground">
        This is a guided tour that will help you navigate through the features of the app.
      </p>
      <div className="mt-5 sm:mt-6 flex justify-end">
        <Button onClick={() => setStartTour(true)}>Start Tour</Button>
        <Button onClick={() => endTour()} className="ml-2" variant="outline">
          Skip Tour
        </Button>
      </div>
    </>
  );

  const tourWindow = activeStop && (
    <>
      <div className="text-bold text-2xl mb-2">{activeStop.title}</div>
      <p className="text-sm text-muted-foreground">{activeStop.description}</p>
      <div className="mt-5 sm:mt-6 flex justify-end">
        <Button onClick={onPrev} disabled={isFirstElement()}>
          Prev
        </Button>
        <Button onClick={onNext} className="ml-2" disabled={isLastElement()}>
          Next
        </Button>
        <Button onClick={() => endTour()} className={`ml-2 ${isLastElement() ? '' : 'hidden'}`} variant="outline">
          End Tour
        </Button>
      </div>
    </>
  );

  return (
    <div className="flex justify-center items-center">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black opacity-50"></div>
      <div
        className="bg-white px-4 pb-4 z-20 w-96 pt-5 sm:p-6 sm:pb-4 absolute transition-all duration-1000"
        style={{ ...style }}
        ref={ref}
      >
        {!startTour ? welcomeWindow : tourWindow}
      </div>
    </div>
  );
}

export function GuidedTour() {
  const { hasCookie } = useCookie();
  const [hasGuideMeCookie, setHasGuideMeCookie] = useState(hasCookie('tour'));
  const guideMePortal = !hasGuideMeCookie
    ? createPortal(<GuideMeWindow onClose={setHasGuideMeCookie} />, document.body)
    : null;
  return (
    <>
      {guideMePortal}
      <div className="w-3/4 flex flex-col items-center justify-center m-auto">
        <NavigationDemo className="my-4" />
        <TableDemo />
        <Footer />
      </div>
    </>
  );
}

export function GuideMeStop({
  children,
  title,
  description,
  order,
  className = '',
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  order: number;
  className?: string;
}) {
  return (
    <div
      data-guided-tour-stop
      data-title={title}
      data-description={description}
      data-order={order}
      className={className}
    >
      {children}
    </div>
  );
}
