'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner as ChakraSpinner } from '@chakra-ui/react';

export const Spinner = ({ to }: { to?: string }) => {
  const router = useRouter();

  useEffect(() => {
    if (to) router.replace(to);
  }, [router, to]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80">
      <ChakraSpinner color="white" className="h-12 w-12" />
    </div>
  );
};
