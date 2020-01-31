import React from 'react';

import Hero from './components/Hero';
import DisastersList from './components/disasters';

export default function Home() {
  return (
    <main>
      <Hero />
      <DisastersList />
    </main>
  );
}