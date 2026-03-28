/* Duplicate of components.jss to satisfy CRA module resolution (.js). Frontend-only, data mocked. */
import React, { useEffect, useRef, useState } from 'react';

// Image registry (sourced via vision_expert_agent). Each key used at most once.
export const IMAGES = {
  hero_main: 'https://images.unsplash.com/photo-1520170350707-b2da59970118',
  hero_alt_1: 'https://images.unsplash.com/photo-1584585696759-1df9872e1eca',
  hero_alt_2:
    'https://images.pexels.com/photos/2749495/pexels-photo-2749495.jpeg',

  // Materials / Macro
  material_aluminum:
    'https://images.unsplash.com/photo-1487215078519-e21cc028cb29',
  material_hinge:
    'https://images.unsplash.com/photo-1617714313606-283484c136be',
  material_leather:
    'https://images.pexels.com/photos/2858481/pexels-photo-2858481.jpeg',

  // Lifestyle / Model
  model_male_side:
    'https://images.unsplash.com/photo-1593769645155-d6416081c0c5',
  model_person_moody:
    'https://images.pexels.com/photos/1812237/pexels-photo-1812237.jpeg',
  model_female:
    'https://images.pexels.com/photos/2531356/pexels-photo-2531356.jpeg',

  // Smart connectivity
  airpods_dark: 'https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe',
  iphone_dark: 'https://images.unsplash.com/photo-1632560354926-21886c0e811c',

  // Hi-Res (white/silver)
  hires_white_1: 'https://images.unsplash.com/photo-1491927570842-0261e477d937',
  hires_white_2:
    'https://images.pexels.com/photos/3496992/pexels-photo-3496992.jpeg',

  // Additional product shots for variants/pricing
  variant_sony_grey:
    'https://images.unsplash.com/photo-1527283308122-41ee35be6195',
  variant_black_alt:
    'https://images.unsplash.com/photo-1599855129764-f4cc28295202',
  variant_white:
    'https://images.pexels.com/photos/2123430/pexels-photo-2123430.jpeg',

  // Color variants for Design section
  color_black:
    'https://customer-assets.emergentagent.com/job_aura-showcase/artifacts/40d5tl2u_Headphone.png',
  color_white: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
  color_lime: 'https://images.unsplash.com/photo-1606813907291-76e6f2f3b49d',
  color_blue: 'https://images.unsplash.com/photo-1518449071461-3422f49e3d19',

  // Testimonials (8 distinct portraits)
  t1: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c',
  t2: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574',
  t3: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a',
  t4: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6',
  t5: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  t6: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  t7: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  t8: 'https://images.pexels.com/photos/33338682/pexels-photo-33338682.jpeg',
};

// Utilities
export const useInView = (
  options: IntersectionObserverInit = {
    threshold: 0.2,
  }
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(e => {
          if (e.isIntersecting) setInView(true);
        });
      },
      options
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return {
    ref,
    inView,
  };
};

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}
export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
}) => (
  <section id={id} className={`section-wrapper ${className}`}>
    <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
      {' '}
      {children}{' '}
    </div>{' '}
  </section>
);

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur-sm bg-[rgba(5,5,6,0.6)]/60 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-white/90 hover:text-white"
        >
          {' '}
          AuraMax{' '}
        </a>{' '}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#features"
            className="text-white/90 hover:text-white transition-colors"
          >
            {' '}
            Features{' '}
          </a>{' '}
          <a
            href="#design"
            className="text-white/90 hover:text-white transition-colors"
          >
            {' '}
            Color{' '}
          </a>{' '}
          <a
            href="#pricing"
            className="text-white/90 hover:text-white transition-colors"
          >
            {' '}
            Pricing{' '}
          </a>{' '}
          <a
            href="#contact"
            className="text-white/90 hover:text-white transition-colors"
          >
            {' '}
            Contact{' '}
          </a>{' '}
        </nav>{' '}
        <a href="#pricing" className="btn btn-sm">
          {' '}
          Pre-Order{' '}
        </a>{' '}
      </div>{' '}
    </div>
  );
};

export const Hero = () => {
  const [open, setOpen] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowImg(true), 60);
    const t2 = setTimeout(() => setShowInfo(true), 1100);
    const t3 = setTimeout(() => setShowBg(true), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <header
      id="top"
      className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24 lg:pb-28 overflow-hidden"
    >
      {' '}
      {/* Flat black background */}{' '}
      <div className="absolute inset-0 -z-10 bg-black" />
      {/* Stage: centered headphone with large faint AURAMAX behind */}{' '}
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <h1 className="sr-only">
          {' '}
          AuraMax— Experience studio-grade audio with industry-leading noise
          cancellation{' '}
        </h1>{' '}
        <div className="relative mx-auto w-full max-w-6xl aspect:[21/9] md:aspect-[16/7] flex items-center justify-center">
          <div
            className={`pointer-events-none select-none absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${showBg ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="hero-bg-text text-center"> AURAMAX </span>{' '}
          </div>{' '}
          <img
            src="https://customer-assets.emergentagent.com/job_aura-showcase/artifacts/40d5tl2u_Headphone.png"
            alt="AuraMax headphones front view"
            loading="eager"
            className={`relative z-10 w-[51%] md:w-[43%] lg:w-[37%] h-auto object-contain drop-shadow-[0_40px_120px_rgba(0,0,0,0.6)] ${showImg ? 'animate-[heroIn_900ms_ease-out_forwards]' : 'opacity-0'}`}
          />{' '}
        </div>
        {/* Info row beneath, horizontally aligned */}{' '}
        <div
          className={`mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start ${showInfo ? 'animate-[infoUp_500ms_ease-out_forwards]' : 'opacity-0'}`}
        >
          <div
            className="text-neutral-300 text-sm md:text-base"
            style={{
              maxWidth: '240px',
            }}
          >
            Industry-leading noise cancellation and stunning minimalist design.{' '}
            <div className="mt-4">
              <button
                className="btn btn-sm md:btn"
                onClick={() => setOpen(true)}
              >
                {' '}
                Watch Demo{' '}
              </button>{' '}
            </div>{' '}
          </div>{' '}
          <div className="text-center text-sm md:text-base text-white/80">
            <span className="text-white/70"> Precision. </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-emerald-300 font-semibold">
              {' '}
              Power.{' '}
            </span>{' '}
            <span className="text-white/85 font-semibold"> Purity. </span>{' '}
          </div>{' '}
          <div className="text-right md:text-right text-xs md:text-[11px] uppercase tracking-[0.25em] text-white/60">
            Ships Starting{' '}
            <span className="text-white/90 font-semibold"> July 15 </span>{' '}
            <span
              className="mx-2 text-white/
        30 "
            >
              ·
            </span>{' '}
            Limited Quantities Available{' '}
          </div>{' '}
        </div>{' '}
      </div>
      {/* Demo Modal */}{' '}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden ring-1 ring-white/10"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 btn btn-sm"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              {' '}
              Close{' '}
            </button>{' '}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              title="AuraMax Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>{' '}
        </div>
      )}{' '}
    </header>
  );
};

export const MeetAura = () => {
  const { ref, inView } = useInView();
  return (
    <Section className="py-16 md:py-24">
      <div ref={ref} className={`fade-up ${inView ? 'inview' : ''}`}>
        <div className="relative mx-auto w-full flex items-center justify-center">
          <div
            role="img"
            aria-label="Person listening to music wearing AuraMax headphones"
            className="block"
            style={{
              width: '500px',
              height: '720px',
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 70.88%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(178deg, rgba(0, 0, 0, 0.00) 62.97%, #000 98.4%), url(https://customer-assets.emergentagent.com/job_aura-showcase/artifacts/3uhb3vxk_person%20Listening%20song.png) center / cover no-repeat`,
            }}
          />{' '}
        </div>{' '}
        <div className="mt-8 mx-auto max-w-[1280px] text-left">
          <p
            className="eyebrow eyebrow-gradient reveal-left"
            data-reveal="left"
          >
            {' '}
            Meet AuraMax{' '}
          </p>{' '}
          <h2 className="h2 reveal-left" data-reveal="left">
            {' '}
            Premium wireless headphones that blend precision, power, and
            comfort.Featuring adaptive noise cancellation, studio-level clarity,
            and a fit so light it disappears.Just pure audio, no
            distractions.{' '}
          </h2>{' '}
        </div>{' '}
      </div>{' '}
    </Section>
  );
};

export const Features = () => {
  return (
    <Section id="features" className="py-16 md:py-24">
      <p className="eyebrow eyebrow-gradient reveal-left" data-reveal="left">
        {' '}
        Features{' '}
      </p>{' '}
      <h2 className="h2 mt-2 max-w-3xl reveal-left" data-reveal="left">
        {' '}
        Every Note.Exactly as It Was Meant to Be Heard{' '}
      </h2>{' '}
      <p
        className="mt-3 text-neutral-300 max-w-2xl reveal-left"
        data-reveal="left"
      >
        {' '}
        40 mm titanium drivers deliver unmatched clarity and depth— from soaring
        highs to thunderous lows.{' '}
      </p>
      {/* Bento grid */}{' '}
      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[180px] md:auto-rows-[220px]">
        {' '}
        {/* ANC large left: col 1-4, rows 1-2 */}{' '}
        <BentoCard
          title={
            <>
              <span className="block text-white/90 text-2xl md:text-4xl font-extrabold tracking-tight">
                {' '}
                Noise{' '}
              </span>{' '}
              <span className="block text-white/90 text-2xl md:text-4xl font-extrabold tracking-tight">
                {' '}
                Cancellation{' '}
              </span>{' '}
            </>
          }
          tag="Active"
          img={IMAGES.material_hinge}
          alt="Active Noise Cancellation"
          style={{
            gridColumn: '1 / span 4',
            gridRow: '1 / span 2',
          }}
          bg="from-cyan-500/10 to-transparent"
        />
        {/* Scaled Battery card now takes both right columns of row 1-2 */}{' '}
        <BentoCard
          title={
            <span className="text-white/80 font-semibold">
              {' '}
              40 - Hour Battery Life{' '}
            </span>
          }
          tag=""
          img={IMAGES.hero_alt_2}
          alt="Battery life"
          style={{
            gridColumn: '5 / span 2',
            gridRow: '1 / span 2',
          }}
          bg="from-emerald-500/10 to-transparent"
        />
        {/* Row 2 inverted: big right still spans 2 rows; left card scales to match height */}{' '}
        <BentoCard
          title={
            <span className="text-white/80 font-semibold">
              {' '}
              Studio-Grade Clarity{' '}
            </span>
          }
          tag=""
          img={IMAGES.variant_black_alt}
          alt="Studio clarity"
          style={{
            gridColumn: '1 / span 2',
            gridRow: '3 / span 2',
          }}
          bg="from-purple-500/10 to-transparent"
        />
        <BentoCard
          title={
            <>
              <span className="text-emerald-300/90 text-sm uppercase tracking-[.3em]">
                {' '}
                Hi-Res{' '}
              </span>{' '}
              <span className="block mt-2 text-white/90 text-2xl md:text-4xl font-extrabold">
                {' '}
                Audio Certified{' '}
              </span>{' '}
            </>
          }
          tag=""
          img={IMAGES.hires_white_1}
          alt="Hi-Res Audio"
          style={{
            gridColumn: '3 / span 4',
            gridRow: '3 / span 2',
          }}
          bg="from-emerald-400/10 to-transparent"
        />
      </div>{' '}
    </Section>
  );
};

interface BentoCardProps {
  title: React.ReactNode;
  tag: string;
  img: string;
  alt: string;
  style?: React.CSSProperties;
  centerTitle?: boolean;
  bg?: string;
}
const BentoCard: React.FC<BentoCardProps> = ({
  title,
  tag,
  img,
  alt,
  style,
  centerTitle = false,
  bg = 'from-white/5 to-transparent',
}) => (
  <article
    style={style}
    className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/[0.03] flex"
  >
    <div className={`absolute inset-0 bg-gradient-to-b ${bg}`} />{' '}
    <img
      src={img}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover opacity-70"
    />
    <div
      className={`relative z-10 p-5 md:p-6 ${centerTitle ? 'self-center text-center w-full' : 'self-end'}`}
    >
      {' '}
      {tag && (
        <div className="mb-2 inline-flex items-center text-[10px] uppercase tracking-[.2em] bg-white/5 text-white/80 px-2 py-1 rounded-full ring-1 ring-white/10">
          {' '}
          {tag}{' '}
        </div>
      )}{' '}
      <div className="text-white/90 leading-tight"> {title} </div>{' '}
    </div>{' '}
  </article>
);

export const DesignStyles = () => {
  const variants = {
    black: {
      label: 'Graphite Black',
      src: 'https://customer-assets.emergentagent.com/job_premium-audio-ui/artifacts/1w5e5yho_Frame%202121453887.png',
      dotClass: 'bg-black ring-2 ring-white/70',
    },
    white: {
      label: 'Silver White',
      src: 'https://customer-assets.emergentagent.com/job_premium-audio-ui/artifacts/zeod89vd_whitw.png',
      dotClass: 'bg-white/90 ring-1 ring-white/30',
    },
    lime: {
      label: 'Lime',
      src: 'https://customer-assets.emergentagent.com/job_premium-audio-ui/artifacts/u7e0g1vp_Frame%202121453885.png',
      dotClass: 'bg-lime-300/90 ring-1 ring-white/20',
    },
    blue: {
      label: 'Blue',
      src: 'https://customer-assets.emergentagent.com/job_premium-audio-ui/artifacts/6635jgng_Frame%202121453886.png',
      dotClass: 'bg-blue-500/90 ring-1 ring-white/20',
    },
  };
  const [color, setColor] = useState<keyof typeof variants>('black');
  const active = variants[color];
  const [fade, setFade] = useState(false);

  const onPick = (key: keyof typeof variants) => {
    if (key === color) return;
    setFade(true);
    // small fade-out then swap then fade-in
    setTimeout(() => {
      setColor(key);
      setFade(false);
    }, 120);
  };

  return (
    <Section id="design" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <p className="eyebrow eyebrow-gradient reveal-left" data-reveal="left">
          {' '}
          Design & amp; Build{' '}
        </p>{' '}
        <h2 className="h2 mt-6 text-left reveal-left" data-reveal="left">
          {' '}
          Choose your Style.{' '}
        </h2>{' '}
        {/* Product image */}{' '}
        <div className="mt-10 flex justify-center">
          <img
            src={active.src}
            alt={`AuraMax ${active.label}`}
            loading="lazy"
            className={`w-full max-w-[400px] h-auto object-contain transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
          />{' '}
        </div>{' '}
        {/* Variant selector block */}{' '}
        <div className="mt-8 flex flex-col items-center text-center">
          <p className="font-medium text-white/90"> {active.label} </p>{' '}
          <div className="mt-4 flex items-center gap-4">
            {' '}
            {Object.entries(variants).map(([key, v]) => (
              <button
                key={key}
                aria-label={v.label}
                onClick={() => onPick(key as keyof typeof variants)}
                className={`w-7 h-7 rounded-full ring-offset-2 ring-offset-black focus:outline-none focus:ring-2 focus:ring-white/40 ${v.dotClass} ${color === key ? '' : 'opacity-80'}`}
                title={v.label}
              />
            ))}{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </Section>
  );
};

export const Specs = () => {
  const rows = [
    ['Driver Size', '40mm Titanium-Coated Dynamic Drivers'],
    ['Frequency Response', '10Hz – 40kHz'],
    ['Impedance', '32Ω'],
    ['Bluetooth Version', '5.3 with Multipoint Connectivity'],
    ['Audio Codecs', 'SBC, AAC, aptX™, aptX Adaptive™'],
    ['Noise Cancellation', 'Hybrid Active Noise Cancellation (up to 40dB)'],
    ['Battery Life', 'Up to 40h (ANC off), 30h (ANC on)'],
    ['Charging Time', '1.5h (USB-C Fast Charge)'],
    ['Microphones', 'Dual Beamforming Mics with ENC'],
    ['Weight', '260g'],
  ];
  const wrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(e => {
          if (e.isIntersecting) el.classList.add('specs-inview');
        });
      },
      {
        threshold: 0.2,
      }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Section id="specs" className="py-16 md:py-24">
      <p className="eyebrow eyebrow-gradient reveal-left" data-reveal="left">
        {' '}
        Technical Specifications{' '}
      </p>{' '}
      <h2 className="h2 reveal-left" data-reveal="left">
        {' '}
        Engineered to Perform{' '}
      </h2>{' '}
      <p className="mt-4 text-neutral-300 reveal-left" data-reveal="left">
        {' '}
        All the details that make the AuraMax exceptional.{' '}
      </p>{' '}
      {/* Vertical stacked specifications with separators; no card background */}{' '}
      <div ref={wrapRef} className="mt-10">
        <dl className="divide-y divide-white/10">
          {' '}
          {rows.map(([k, v]) => (
            <div
              key={k}
              className={`grid grid-cols-1 md:grid-cols-3 items-start gap-4 md:gap-8 py-5 md:py-6 opacity-0 translate-y-4 will-change-transform spec-row`}
            >
              <dt className="text-white/60 text-sm md:text-base col-span-1">
                {' '}
                {k}{' '}
              </dt>{' '}
              <dd className="text-white/90 text-sm md:text-base md:col-span-2">
                {' '}
                {v}{' '}
              </dd>{' '}
            </div>
          ))}{' '}
        </dl>{' '}
      </div>
      {/* badges grid removed as per request */}{' '}
    </Section>
  );
};

export const Testimonials = () => {
  const cards = [
    {
      img: IMAGES.t1,
      name: 'Beat Craft',
      handle: '@beatcraft',
      quote: 'These sound better than my studio monitors.',
    },
    {
      img: IMAGES.t2,
      name: 'Emily L.',
      handle: '@emilylondon',
      quote: 'I wear them for 8 hours straight — no fatigue.',
    },
    {
      img: IMAGES.t3,
      name: 'Marcus T.',
      handle: '@marcusprod',
      quote: 'You’ll hear songs you thought you knew, differently.',
    },
  ];
  return (
    <Section id="reviews" className="py-16 md:py-24">
      {' '}
      {/* Header */}{' '}
      <div className="text-center max-w-3xl mx-auto">
        <span
          className="eyebrow eyebrow-gradient block reveal-up"
          data-reveal="up"
        >
          {' '}
          Testimonials{' '}
        </span>{' '}
        <h2 className="h2 mt-3 reveal-up" data-reveal="up">
          {' '}
          Loved by Audiophiles & Creators{' '}
        </h2>{' '}
        <p className="mt-3 text-white/60 reveal-up" data-reveal="up">
          {' '}
          Trusted by producers, streamers, and everyday listeners
          worldwide.{' '}
        </p>{' '}
      </div>
      {/* Cards */}{' '}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {' '}
        {cards.map((p: any, i: number) => (
          <figure
            key={i}
            className="rounded-2xl ring-1 ring-white/10 p-6 bg-white/[0.04]"
          >
            <div className="text-2xl text-white/30 mb-4"> ✻ </div>{' '}
            <blockquote className="text-white/85 text-base leading-relaxed">
              {' '}
              “{p.quote}”{' '}
            </blockquote>{' '}
            <div className="mt-6 flex items-center gap-3">
              <img
                src={p.img}
                alt={`${p.name} portrait`}
                className="w-9 h-9 rounded-full object-cover ring-1 ring-white/10"
                loading="lazy"
              />
              <figcaption className="text-sm text-white/80">
                {' '}
                {p.name}{' '}
                <span className="ml-2 text-white/50"> {p.handle} </span>{' '}
              </figcaption>{' '}
            </div>{' '}
          </figure>
        ))}{' '}
      </div>
      {/* Dots */}{' '}
      <div className="mt-8 flex items-center justify-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
      </div>{' '}
    </Section>
  );
};

export const FAQ = () => {
  const items = [
    {
      q: 'What’s the battery life like with ANC on?',
      a: 'Up to 30 hours with ANC on; 40 hours with ANC off.',
    },
    {
      q: 'Can I use it wired and wireless?',
      a: 'Yes, Bluetooth 5.3 or 3.5mm analog with included cable.',
    },
    {
      q: 'Is it compatible with iOS and Android?',
      a: 'Fully compatible with iOS, Android, Mac, and Windows.',
    },
    {
      q: 'Does it support multipoint Bluetooth connections?',
      a: 'Yes — connect to two devices simultaneously.',
    },
    {
      q: 'How long does it take to fully charge?',
      a: 'About 1.5 hours via USB‑C Fast Charge.',
    },
    {
      q: 'What’s included in the box?',
      a: 'AuraMax, travel case, USB‑C cable, 3.5mm cable, quick start guide.',
    },
  ];
  return (
    <Section id="faq" className="py-16 md:py-24">
      <p
        className="eyebrow eyebrow-gradient text-center reveal-up"
        data-reveal="up"
      >
        {' '}
        FAQ{' '}
      </p>{' '}
      <h2
        className="h2 mx-auto max-w-[872px] text-center mt-2 reveal-up"
        data-reveal="up"
      >
        {' '}
        Got Questions ? We’ ve Got Answers.{' '}
      </h2>{' '}
      <div className="mt-8 divide-y divide-white/10 rounded-2xl ring-1 ring-white/10 overflow-hidden">
        {' '}
        {items.map((it: any, idx: number) => (
          <Disclosure key={idx} q={it.q} a={it.a} />
        ))}{' '}
      </div>{' '}
    </Section>
  );
};

interface DisclosureProps {
  q: string;
  a: React.ReactNode;
}
const Disclosure: React.FC<DisclosureProps> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/[0.02]">
      <button
        className="w-full px-5 py-4 flex items-center justify-between text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white/90"> {q} </span>{' '}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform ${open ? 'rotate-45' : ''}`}
        >
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>{' '}
      </button>{' '}
      {open && <div className="px-5 pb-5 -mt-2 text-white/70"> {a} </div>}{' '}
    </div>
  );
};

export const PricingAnchor = () => (
  <Section id="pricing" className="py-20">
    <div className="max-w-2xl mx-auto text-center">
      <p className="eyebrow eyebrow-gradient"> Pricing </p>{' '}
      <h3 className="h3 mt-2"> Pre‑ order opens soon </h3>{' '}
      <p className="mt-3 text-white/60">
        {' '}
        Be the first to know when pricing goes live.Use the contact form below
        to get notified.{' '}
      </p>{' '}
      <a href="#contact" className="btn mt-6">
        {' '}
        Contact Sales{' '}
      </a>{' '}
    </div>{' '}
  </Section>
);

export const ContactSection = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!state.name.trim()) e.name = 'Required';
    if (!state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = 'Enter a valid email';
    if (!state.message.trim()) e.message = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setState({
      name: '',
      email: '',
      message: '',
    });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow eyebrow-gradient text-center"> Contact </p>{' '}
        <h3 className="h3 text-center mt-2"> We’ d love to hear from you </h3>{' '}
        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm text-white/70"> Name </span>{' '}
            <input
              type="text"
              value={state.name}
              onChange={e => setState({ ...state, name: e.target.value })}
              required
              className="input"
              placeholder="Your name"
            />{' '}
            {errors.name && (
              <span className="text-xs text-red-400"> {errors.name} </span>
            )}{' '}
          </label>{' '}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-white/70"> Email </span>{' '}
            <input
              type="email"
              value={state.email}
              onChange={e => setState({ ...state, email: e.target.value })}
              required
              className="input"
              placeholder="you@example.com"
            />{' '}
            {errors.email && (
              <span className="text-xs text-red-400"> {errors.email} </span>
            )}{' '}
          </label>{' '}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-white/70"> Message </span>{' '}
            <textarea
              rows={5}
              value={state.message}
              onChange={e => setState({ ...state, message: e.target.value })}
              required
              className="input min-h-[120px] resize-y"
              placeholder="Tell us a bit about your needs"
            />{' '}
            {errors.message && (
              <span className="text-xs text-red-400"> {errors.message} </span>
            )}{' '}
          </label>{' '}
          <div className="flex items-center justify-between mt-2">
            <button type="submit" className="btn">
              {' '}
              Send{' '}
            </button>{' '}
            {sent && (
              <span className="text-emerald-300/90">
                {' '}
                Message sent.We’ ll get back to you shortly.{' '}
              </span>
            )}{' '}
          </div>{' '}
        </form>{' '}
      </div>{' '}
    </Section>
  );
};

export const FooterCta = () => {
  return (
    <footer className="relative mt-20">
      {' '}
      {/* Dark footer with subtle hero-like gradient accents */}{' '}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(800px 240px at 20% 10%, rgba(16,185,129,.08), transparent 60%),' +
              'radial-gradient(700px 220px at 80% 40%, rgba(147,51,234,.10), transparent 60%)',
          }}
        />
        <div className="mx-auto max-w-[1240px] px-6 md:px-8 py-16 md:py-24 relative">
          {' '}
          {/* Top row: brand at left, two nav columns at right */}{' '}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="flex flex-col gap-3">
              <span className="font-display text-xl tracking-wide text-white/90">
                {' '}
                AuraMax{' '}
              </span>{' '}
              <p className="text-white/60"> Designed to Move You </p>{' '}
            </div>{' '}
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div>
                <p className="text-white/50 mb-3"> Quick Links </p>{' '}
                <ul className="space-y-2">
                  <li>
                    {' '}
                    <a
                      href="#features"
                      className="text-white/80 hover:text-white"
                    >
                      {' '}
                      Features{' '}
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      href="#design"
                      className="text-white/80 hover:text-white"
                    >
                      {' '}
                      Color{' '}
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      href="#contact"
                      className="text-white/80 hover:text-white"
                    >
                      {' '}
                      Contact{' '}
                    </a>
                  </li>
                </ul>{' '}
              </div>{' '}
              <div>
                <p className="text-white/50 mb-3"> Pages </p>{' '}
                <ul className="space-y-2">
                  <li>
                    {' '}
                    <a
                      href="#pricing"
                      className="text-white/80 hover:text-white"
                    >
                      {' '}
                      Pricing{' '}
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      href="#contact"
                      className="text-white/80 hover:text-white"
                    >
                      {' '}
                      Contact{' '}
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a href="#terms" className="text-white/80 hover:text-white">
                      {' '}
                      Term of Use{' '}
                    </a>
                  </li>
                </ul>{' '}
              </div>{' '}
            </div>{' '}
          </div>
          {/* Large hero-style background word centered */}{' '}
          <div className="mt-16 text-center" aria-hidden>
            <span className="hero-bg-text block"> AURAMAX </span>{' '}
          </div>
          {/* Bottom bar with centered copyright */}{' '}
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/40 text-sm">
            AuraMax© {new Date().getFullYear()}— All rights reserved{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </footer>
  );
};

// Export all
export {};
