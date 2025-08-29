'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageLoader } from '@/components/ui/LoadingSpinner';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Setting a minimum time to prevent flickering
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    setIsHydrated(true);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <a href='#main-content' className='skip-link'>
        Pular para o conteúdo principal
      </a>

      <Suspense
        fallback={<div className='skeleton' style={{ height: '80px' }} />}
      >
        <Header />
      </Suspense>

      <main id='main-content'>
        <Suspense fallback={<PageLoader />}>{children}</Suspense>
      </main>

      <Suspense
        fallback={<div className='skeleton' style={{ height: '200px' }} />}
      >
        <Footer />
      </Suspense>
    </>
  );
};
