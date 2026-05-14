/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsSixPeople from './components/WhatIsSixPeople';
import PastEvents from './components/PastEvents';
import NextEvent from './components/NextEvent';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatIsSixPeople />
        <PastEvents />
        <HowItWorks />
        <NextEvent />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

