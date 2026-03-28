import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ContactSection,
  DesignStyles,
  FAQ,
  Features,
  FooterCta,
  Hero,
  MeetAura,
  NavBar,
  PricingAnchor,
  Specs,
  Testimonials,
} from './components';
import './index.css';

function useGlobalRevealObserver() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll('.reveal-left, .reveal-up')
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            // Keep permanently: stop observing this element after first reveal
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Home() {
  useGlobalRevealObserver();
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <main>
        <MeetAura />
        <Features />
        <DesignStyles />
        <Specs />
        <Testimonials />
        <FAQ />
        <PricingAnchor />
        <ContactSection />
        <FooterCta />
      </main>{' '}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{' '}
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;
