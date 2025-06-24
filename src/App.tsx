import React from 'react';
import Header from './components/Header';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import ContentPreview from './components/ContentPreview';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <PainPoints />
      <Solution />
      <Benefits />
      <ContentPreview />
      <Offer />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;