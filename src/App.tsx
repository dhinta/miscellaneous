import { GuidedTour, Home, LazyImage } from '@/components/pages';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ScrollAnimations } from './components/pages/scroll-animations/scroll-animations';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/lazy-image',
      element: <LazyImage />,
    },
    {
      path: '/scroll-to-view',
      element: <ScrollAnimations />,
    },
    {
      path: '/guided',
      element: <GuidedTour />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
