'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const SantaTrackerMap = dynamic(() => import('../components/SantaTrackerMap'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <SantaTrackerMap />
    </main>
  );
}