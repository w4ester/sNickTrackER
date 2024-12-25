'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

<<<<<<< HEAD
=======
// Dynamically import the Map component to avoid SSR issues
>>>>>>> c30e78d (Add package-lock.json)
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