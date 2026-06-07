'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useI18n } from '@/lib/i18n'

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

/* Leaf / house icon in ceiba green */
function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 3C14 3 5 10 5 17.5C5 22.2 9.03 26 14 26C18.97 26 23 22.2 23 17.5C23 10 14 3 14 3Z" fill="#4A5E2A" fillOpacity="0.15" stroke="#4A5E2A" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M14 26V16M14 16C14 16 10 13.5 10 10.5M14 16C14 16 18 13.5 18 10.5" stroke="#4A5E2A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function Nav() {
  const { locale, setLocale, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* All 4 nav links — labels come from i18n so EN toggle translates everything */
  const links = [
    { href: '/#sobre-yina', label: t.nav.sobreMi,    anchor: true },
    { href: '/servicios',   label: t.nav.servicios,  anchor: false },
    { href: '/propiedades', label: t.nav.propiedades, anchor: false },
    { href: '/contacto',   label: t.nav.contacto,   anchor: false },
  ]

  const pillBase: React.CSSProperties = {
    fontFamily: 'var(--sans)',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    padding: '5px 10px',
    borderRadius: 4,
    border: 'none',
    cursor: 'pointer',
    transition: 'background 150ms ease, color 150ms ease',
  }
  const pillActive: React.CSSProperties   = { ...pillBase, background: 'var(--sol)', color: 'var(--ceiba)' }
  const pillInactive: React.CSSProperties = { ...pillBase, background: 'transparent', color: 'var(--gris)' }

  return (
    <>
      <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)} aria-label="Yina Tiburcio Real Estate">
            <svg width="162" height="40" viewBox="0 0 162 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* House icon — left side, vertically centered */}
              <line x1="4"  y1="23" x2="20" y2="9"  stroke="#4A5E2A" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="20" y1="9"  x2="36" y2="23" stroke="#4A5E2A" strokeWidth="1.4" strokeLinecap="round"/>
              <rect x="25" y="9" width="9" height="9" fill="none" stroke="#4A5E2A" strokeWidth="1.4"/>
              {/* Divider */}
              <line x1="44" y1="6" x2="44" y2="34" stroke="#E8DCC4" strokeWidth="1"/>
              {/* Name */}
              <text x="52" y="21" fontFamily="Cormorant Garamond, serif" fontSize="16" fontWeight="400" fill="#4A5E2A" letterSpacing="0.3">Yina Tiburcio</text>
              {/* Tagline */}
              <text x="52" y="32" fontFamily="DM Sans, sans-serif" fontSize="5.5" fontWeight="600" fill="#C4844A" letterSpacing="2.2">REAL ESTATE AGENT</text>
            </svg>
          </Link>

          {/* Links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link${!l.anchor && pathname === l.href ? ' active' : ''}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right — desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* ES | EN pill toggle */}
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--crema)', border: '1px solid var(--arena)', borderRadius: 6, padding: 2, gap: 2 }}>
              <button onClick={() => setLocale('es')} style={locale === 'es' ? pillActive : pillInactive} aria-label="Español">ES</button>
              <button onClick={() => setLocale('en')} style={locale === 'en' ? pillActive : pillInactive} aria-label="English">EN</button>
            </div>
            <a href="https://wa.me/14016025102" target="_blank" rel="noopener noreferrer" className="btn btn-sol">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d={WA_PATH} /></svg>
              {t.nav.wa}
            </a>
          </div>

          {/* Hamburger — mobile */}
          <div className="flex md:hidden items-center gap-2">
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--crema)', border: '1px solid var(--arena)', borderRadius: 5, padding: 2, gap: 1 }}>
              <button onClick={() => setLocale('es')} style={{ ...pillBase, fontSize: 9, padding: '3px 7px', ...(locale === 'es' ? { background: 'var(--sol)', color: 'var(--ceiba)' } : { background: 'transparent', color: 'var(--gris)' }) }}>ES</button>
              <button onClick={() => setLocale('en')} style={{ ...pillBase, fontSize: 9, padding: '3px 7px', ...(locale === 'en' ? { background: 'var(--sol)', color: 'var(--ceiba)' } : { background: 'transparent', color: 'var(--gris)' }) }}>EN</button>
            </div>
            <button className="flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer" onClick={() => setMenuOpen(true)} aria-label={t.nav.menu}>
              <span className="block w-[22px] h-[1.5px] bg-[var(--ceiba)]" />
              <span className="block w-[22px] h-[1.5px] bg-[var(--ceiba)]" />
              <span className="block w-[22px] h-[1.5px] bg-[var(--ceiba)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button className="absolute top-5 right-6 bg-transparent border-none text-[var(--crema)] text-3xl cursor-pointer leading-none" onClick={() => setMenuOpen(false)} aria-label={t.nav.close}>×</button>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link" style={{ fontSize: 14, letterSpacing: 3, color: 'rgba(251,246,236,0.75)' }} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="https://wa.me/14016025102" target="_blank" rel="noopener noreferrer" className="btn btn-sol mt-4" onClick={() => setMenuOpen(false)}>
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d={WA_PATH} /></svg>
          {t.nav.wa}
        </a>
      </div>
    </>
  )
}
