'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Not found page with redirection to home page

export default function Custom404() {
  // Using hook useRouter() to redirect user

  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return null;
}
