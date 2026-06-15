'use client';
import { useState, useEffect } from 'react';

export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return show ? (
    <div
      className="flex md:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transform: show ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}
    >
      <a
        href="tel:+918906000160"
        style={{
          flex: 1,
          background: '#0A1628',
          color: '#FFD600',
          textAlign: 'center',
          padding: '16px',
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 800,
          fontSize: '15px',
          textDecoration: 'none',
          borderTop: '2px solid #FFD600',
        }}
      >
        📞 Call Now
      </a>
      <a
        href="/apply"
        style={{
          flex: 1,
          background: '#FFD600',
          color: '#0A1628',
          textAlign: 'center',
          padding: '16px',
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontWeight: 800,
          fontSize: '15px',
          textDecoration: 'none',
        }}
      >
        Apply Free
      </a>
    </div>
  ) : null;
}
