'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner } from '@chakra-ui/react';

export default function AuthRedirect({ to = '/chat' }: { to?: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80">
      <Spinner color="white" className="h-12 w-12" />
    </div>
  );
}
