/** साधे SVG आयकॉन — टेलविंड रंग वापरू शकता */

export function IconHome({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1v-10.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMap({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 20l-4 2V6l4-2 6 2 4-2v14l-4 2-6-2z" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" strokeLinecap="round" />
    </svg>
  );
}

export function IconBus({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="7" width="16" height="9" rx="1" />
      <path d="M7 16v2M17 16v2M3 11h16" strokeLinecap="round" />
      <circle cx="7.5" cy="19" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconGallery({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
      <path d="M21 15l-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** लाइव्ह लोकेशन — पिन + रेडिअस */
export function IconLiveLocation({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z" strokeLinejoin="round" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

export function IconContact({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .8 2.9a2 2 0 01-.5 2.1L9 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.4 1.9.7 2.9.8a2 2 0 011.7 1.9z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSnowflake({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M5.6 5.6l12.8 12.8M19 12H5M18.4 5.6L5.6 18.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlug({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 3v4M16 3v4M9 7v5a3 3 0 006 0V7M12 12v9" strokeLinecap="round" />
    </svg>
  );
}

export function IconCctv({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="7" width="14" height="10" rx="2" />
      <path d="M17 10l4-2v8l-4-2" strokeLinejoin="round" />
      <circle cx="10" cy="12" r="2" />
    </svg>
  );
}

export function IconBed({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12v8M3 16h18v4M3 16V9a2 2 0 012-2h5v9" strokeLinecap="round" />
      <path d="M21 12v8" strokeLinecap="round" />
    </svg>
  );
}

export function IconSuspension({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 18c2-4 4-6 8-6s6 2 8 6M4 6c2 4 4 6 8 6s6-2 8-6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function featureIconMap(id) {
  const map = {
    ac: IconSnowflake,
    charge: IconPlug,
    cctv: IconCctv,
    beds: IconBed,
    susp: IconSuspension,
  };
  return map[id] || IconBus;
}
