import React from 'react';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { Services } from '../components/Services';
import { Differentiation } from '../components/Differentiation';
import { Process } from '../components/Process';
import { Regions } from '../components/Regions';
import { Clients } from '../components/Clients';
import { ProductsSection } from '../components/ProductsSection';
import { AISection } from '../components/AISection';
import { Seo } from '../components/Seo';
import { useContact } from '../components/layout/ContactContext';

const Home: React.FC = () => {
  const { open } = useContact();
  return (
    <>
      <Seo
        title="Basic Tech | FDE-Led AI Engineering Company"
        description="Basic Tech is an FDE-led AI engineering company. Our forward-deployed engineers embed with your team, understand your operations, build custom AI solutions, ship them to production, and measure the business impact — across India and Europe."
        canonical="https://basictech.in/"
      />
      <Hero onStartProject={open} />
      <Philosophy />
      <Services />
      <Differentiation />
      <Process />
      <Regions />
      <Clients />
      <ProductsSection />
      <AISection />
    </>
  );
};

export default Home;
