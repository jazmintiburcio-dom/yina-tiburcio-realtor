'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bed, Bath, Car, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { useIsMobile } from '@/lib/useIsMobile'
import { properties } from '@/lib/properties'

/* ─── BILINGUAL CONTENT ─────────────────────────────────────────── */
const PAGE = {
  es: {
    hero: {
      eyebrow: 'Propiedades Disponibles',
      h1: 'Casas y Apartamentos Disponibles',
      h1em: 'en Rhode Island',
      body: 'Explora propiedades disponibles para comprar o alquilar en Providence, Cranston, Pawtucket y comunidades cercanas.',
      sub: 'Dar el siguiente paso comienza con encontrar la propiedad adecuada. Descubre oportunidades disponibles y recibe orientación durante todo el proceso para tomar decisiones con confianza.',
      ctaPrimary: 'Ver Propiedades',
      ctaSecondary: 'Consulta Gratis',
    },
    filters: {
      title: 'Encuentra la propiedad adecuada para ti',
      body: 'Utiliza los filtros para explorar propiedades disponibles según el tipo de operación, ubicación y características que mejor se adapten a tus necesidades.',
      all: 'Todos / All',
      comprar: 'Comprar',
      rentar: 'Rentar',
    },
    badge: { renta: 'En Renta', venta: 'En Venta' },
    beds: 'hab.',
    baths: 'baños',
    perMes: '/mes',
    btnVer: 'Ver propiedad →',
    btnWa: 'Consultar por WhatsApp',
    waPrefix: 'Hola Yina, me interesa esta propiedad: ',
    empty: {
      title: 'Hablemos sobre lo que necesitas',
      body: 'Las propiedades disponibles cambian constantemente y algunas oportunidades pueden no aparecer publicadas en este momento. Si estás buscando una casa, apartamento o propiedad de inversión con características específicas, puedo ayudarte a explorar opciones disponibles y orientarte durante el proceso.',
      cta: 'Consulta Gratis',
    },
    faq: {
      eyebrow: 'Preguntas Frecuentes',
      h2: '¿Tienes',
      h2em: 'preguntas?',
      items: [
        {
          q: '¿Las propiedades publicadas están actualmente disponibles?',
          a: 'Las propiedades se actualizan periódicamente, pero la disponibilidad puede cambiar rápidamente debido a la demanda del mercado. Si una propiedad te interesa, te recomendamos contactarnos para confirmar su disponibilidad y recibir información actualizada antes de programar una visita.',
        },
        {
          q: '¿Cómo puedo programar una visita a una propiedad?',
          a: 'Puedes solicitar una visita utilizando el formulario de contacto, WhatsApp o cualquiera de los botones disponibles en la página. Te ayudaré a coordinar una fecha y hora conveniente según la disponibilidad de la propiedad.',
        },
        {
          q: '¿Las propiedades publicadas son para compra y renta?',
          a: 'Sí. En esta página encontrarás propiedades disponibles tanto para compra como para alquiler. Puedes utilizar los filtros para visualizar únicamente las opciones que se ajusten a tus necesidades y objetivos.',
        },
        {
          q: '¿Qué hago si no encuentro una propiedad que se adapte a mis necesidades?',
          a: 'El inventario inmobiliario cambia constantemente y algunas oportunidades pueden no estar publicadas en este momento. Si estás buscando una propiedad con características específicas, contáctame y podremos orientarte sobre nuevas opciones disponibles en Rhode Island.',
        },
        {
          q: '¿Necesito una preaprobación para comenzar a buscar una casa?',
          a: 'No es obligatoria para comenzar tu búsqueda, pero sí es altamente recomendable. Una preaprobación hipotecaria te ayuda a conocer tu presupuesto real, fortalece tu posición como comprador y facilita el proceso cuando encuentras una propiedad que te interesa.',
        },
        {
          q: '¿Puedo recibir ayuda si es mi primera vez comprando una vivienda?',
          a: 'Sí. Muchas familias comienzan sin saber exactamente por dónde empezar. Puedo orientarte sobre el proceso de compra, requisitos generales, opciones de financiamiento y los pasos necesarios para avanzar con confianza hacia la compra de tu primera vivienda.',
        },
      ],
    },
    owner: {
      eyebrow: 'Para Propietarios',
      h2: '¿Tienes una propiedad para vender o alquilar?',
      body: 'Si estás pensando en vender una propiedad o ponerla en renta, puedo ayudarte a promocionarla, conectar con compradores o inquilinos calificados y acompañarte durante todo el proceso.',
      body2: 'Recibe orientación personalizada, conocimiento del mercado local y una estrategia profesional diseñada para ayudarte a alcanzar tus objetivos con confianza.',
      cta: 'Contáctame',
    },
    ctaFinal: {
      eyebrow: '¿Lista para dar el siguiente paso?',
      h2: 'Tu próxima oportunidad puede estar',
      h2em: 'más cerca de lo que imaginas',
      body: 'Explora las propiedades disponibles o comunícate conmigo para recibir orientación personalizada sobre el mercado inmobiliario de Rhode Island.',
      btnPrimary: 'Ver Propiedades',
      btnSecondary: 'Consulta Gratis',
    },
  },
  en: {
    hero: {
      eyebrow: 'Available Properties',
      h1: 'Homes and Apartments Available',
      h1em: 'in Rhode Island',
      body: 'Explore properties available for sale and rent in Providence, Cranston, Pawtucket, and surrounding communities.',
      sub: 'Finding the right property is the first step toward achieving your goals. Browse available opportunities and receive guidance throughout the process so you can move forward with confidence.',
      ctaPrimary: 'View Properties',
      ctaSecondary: 'Free Consultation',
    },
    filters: {
      title: 'Find the Right Property for You',
      body: 'Use the filters to explore available properties based on your preferred transaction type, location, price range, and property features.',
      all: 'All / Todos',
      comprar: 'Buy',
      rentar: 'Rent',
    },
    badge: { renta: 'For Rent', venta: 'For Sale' },
    beds: 'bd.',
    baths: 'ba.',
    perMes: '/mo',
    btnVer: 'View property →',
    btnWa: 'Inquire on WhatsApp',
    waPrefix: "Hi Yina, I'm interested in this property: ",
    empty: {
      title: "Let's Talk About Your Goals",
      body: "Property availability changes constantly, and some opportunities may not be publicly listed at the moment. If you're looking for a specific type of home, apartment, or investment property, we're here to help you explore additional options and guide you through the process.",
      cta: 'Free Consultation',
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      h2: 'Do you have',
      h2em: 'questions?',
      items: [
        {
          q: 'Are the properties listed currently available?',
          a: "Property availability can change quickly due to market demand. While listings are updated regularly, we recommend contacting us directly to confirm availability and receive the most up-to-date information before scheduling a viewing.",
        },
        {
          q: 'How can I schedule a property tour?',
          a: "You can request a tour through the contact form, WhatsApp, or any of the contact buttons available on the website. We will help coordinate a convenient date and time based on the property's availability.",
        },
        {
          q: 'Are the listings available for both sale and rent?',
          a: "Yes. This page includes properties available for both purchase and rental. You can use the filters to browse only the listings that match your specific needs and goals.",
        },
        {
          q: "What should I do if I can't find a property that fits my needs?",
          a: "The real estate market changes constantly, and some opportunities may not be publicly listed at the moment. If you're looking for a property with specific features, contact us and we'll help guide you toward available options throughout Rhode Island.",
        },
        {
          q: 'Do I need a mortgage pre-approval before I start looking for a home?',
          a: "A mortgage pre-approval is not required to begin your search, but it is highly recommended. It helps you understand your purchasing power, strengthens your position as a buyer, and makes the process smoother when you find the right property.",
        },
        {
          q: "Can I get help if I'm buying a home for the first time?",
          a: "Absolutely. Many families start the home-buying process without knowing where to begin. We can guide you through the process, explain general requirements, discuss financing options, and help you move forward with confidence toward homeownership.",
        },
      ],
    },
    owner: {
      eyebrow: 'For Property Owners',
      h2: 'Looking to Sell or Rent Out Your Property?',
      body: "If you're considering selling your home or placing a property on the rental market, I can help you promote it effectively, connect with qualified buyers or tenants, and guide you through every step of the process.",
      body2: 'Receive personalized support, local market knowledge, and a professional strategy designed to help you achieve your goals with confidence.',
      cta: 'Contact Me',
    },
    ctaFinal: {
      eyebrow: 'Ready to take the next step?',
      h2: 'Your next opportunity could be',
      h2em: 'closer than you think',
      body: 'Browse available properties or reach out for personalized guidance about buying, renting, selling, or investing in Rhode Island real estate.',
      btnPrimary: 'View Properties',
      btnSecondary: 'Free Consultation',
    },
  },
} as const

const WA = '14016025102'
const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

function WaIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: 'currentColor', flexShrink: 0 }}>
      <path d={WA_PATH} />
    </svg>
  )
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */
export default function Propiedades() {
  const { locale } = useI18n()
  const c = PAGE[locale]
  const isMobile = useIsMobile()
  const [activeTab, setActiveTab] = useState<'all' | 'comprar' | 'rentar'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = properties.filter(prop => {
    if (activeTab === 'all') return true
    if (activeTab === 'comprar') return prop.type === 'venta'
    if (activeTab === 'rentar') return prop.type === 'renta'
    return true
  })

  const waConsulta = `https://wa.me/${WA}?text=${encodeURIComponent(
    locale === 'en'
      ? 'Hi Yina, I would like a free consultation about available properties.'
      : 'Hola Yina, quisiera una consulta gratuita sobre propiedades disponibles.'
  )}`

  return (
    <>
      {/* ── HERO CON FOTO ────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '68vh',
          marginTop: 'calc(-1 * var(--nav-h))',
          paddingTop: 'var(--nav-h)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Foto Providence */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/propiedades-hero.png"
            alt="Providence, Rhode Island — arquitectura colonial"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlay direccional sutil */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: 'linear-gradient(105deg, rgba(42,31,14,0.60) 0%, rgba(42,31,14,0.35) 45%, rgba(42,31,14,0.08) 75%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Línea Sol */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, zIndex: 2,
            background: 'linear-gradient(90deg, #F5D13A 0%, rgba(245,209,58,0.3) 60%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Contenido */}
        <div style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,7vw,80px) clamp(24px,5vw,40px)' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#F5D13A' }} aria-hidden="true" />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#F5D13A', fontFamily: 'var(--sans)' }}>
              {c.hero.eyebrow}
            </span>
          </div>

          <h1
            className="reveal d1"
            style={{
              fontFamily: 'var(--serif)', fontWeight: 300,
              fontSize: 'clamp(38px,5.5vw,70px)', lineHeight: 1.02,
              color: '#FBF6EC', maxWidth: 700, margin: '0 0 20px',
              textShadow: '0 2px 20px rgba(42,31,14,0.3)',
            }}
          >
            {c.hero.h1}{' '}
            <em style={{ color: '#F5D13A', fontStyle: 'italic' }}>{c.hero.h1em}</em>
          </h1>

          <p
            className="reveal d2"
            style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(251,246,236,0.9)', maxWidth: 520, margin: '0 0 10px', fontFamily: 'var(--sans)', textShadow: '0 1px 8px rgba(42,31,14,0.4)' }}
          >
            {c.hero.body}
          </p>
          <p
            className="reveal d3"
            style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(251,246,236,0.75)', maxWidth: 520, margin: '0 0 32px', fontFamily: 'var(--sans)', textShadow: '0 1px 8px rgba(42,31,14,0.4)' }}
          >
            {c.hero.sub}
          </p>

          <div className="reveal d4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#propiedades"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F5D13A', color: '#2A1F0E', fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '13px 24px', borderRadius: 28, textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 6px 24px rgba(245,209,58,0.4)' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 10px 36px rgba(245,209,58,0.5)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 6px 24px rgba(245,209,58,0.4)' }}
            >
              {c.hero.ctaPrimary} ↓
            </a>
            <a
              href={waConsulta}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid rgba(251,246,236,0.7)', color: '#FBF6EC', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '13px 24px', borderRadius: 28, textDecoration: 'none', transition: 'all 0.2s', background: 'transparent' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(251,246,236,0.15)'; el.style.borderColor = '#FBF6EC' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.borderColor = 'rgba(251,246,236,0.7)' }}
            >
              <WaIcon size={14} /> {c.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ── FILTERS + GRID ───────────────────────────────── */}
      <section id="propiedades" className="section" style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">

          {/* Título de filtros */}
          <div className="reveal" style={{ marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 300, color: 'var(--tierra)', marginBottom: 8 }}>
              {c.filters.title}
            </h2>
            <p style={{ fontSize: 13.5, color: 'var(--gris)', fontFamily: 'var(--sans)', lineHeight: 1.65, maxWidth: 600 }}>
              {c.filters.body}
            </p>
          </div>

          {/* Sticky filter tabs */}
          <div style={{ position: 'sticky', top: 'var(--nav-h)', zIndex: 100, background: 'var(--off-white)', paddingBottom: 24, paddingTop: 8 }}>
            <div style={{ display: 'flex', gap: 3, background: 'var(--arena)', padding: 3, borderRadius: 8, width: 'fit-content' }}>
              {([
                ['all', c.filters.all],
                ['comprar', c.filters.comprar],
                ['rentar', c.filters.rentar],
              ] as const).map(([val, label]) => (
                <button
                  key={val}
                  className={`filter-tab${activeTab === val ? ' active' : ''}`}
                  onClick={() => setActiveTab(val)}
                  style={{ transition: 'all 0.2s' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {filtered.map((prop, i) => {
              const isRenta = prop.type === 'renta'
              const badge = isRenta ? c.badge.renta : c.badge.venta
              const desc = locale === 'en' ? prop.descEN : prop.desc
              const spec = locale === 'en' ? prop.specEN : prop.spec
              const waMsg = `${c.waPrefix}${prop.address}, ${prop.city}`
              return (
                <PropCard
                  key={prop.id}
                  prop={prop}
                  badge={badge}
                  desc={desc}
                  spec={spec}
                  isRenta={isRenta}
                  perMes={c.perMes}
                  beds={c.beds}
                  baths={c.baths}
                  btnVer={c.btnVer}
                  btnWa={c.btnWa}
                  waMsg={waMsg}
                  delay={(i % 3) + 1}
                />
              )
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div
              className="reveal"
              style={{ textAlign: 'center', padding: '80px 20px', maxWidth: 560, margin: '0 auto' }}
            >
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 300, color: 'var(--tierra)', marginBottom: 16 }}>
                {c.empty.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--gris)', fontFamily: 'var(--sans)', marginBottom: 28 }}>
                {c.empty.body}
              </p>
              <a
                href={waConsulta}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sol"
              >
                <WaIcon size={15} /> {c.empty.cta}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--lino)' }}>
        <div className="section-inner">
          <div className="s-head reveal" style={{ marginBottom: 44 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>{c.faq.eyebrow}</div>
            <h2>{c.faq.h2} <em>{c.faq.h2em}</em></h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {c.faq.items.map((faq, i) => (
              <div
                key={i}
                className={`faq-item reveal d${(i % 4) + 1}${openFaq === i ? ' open' : ''}`}
              >
                <button
                  className="faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={17} color="var(--sol-dark)" strokeWidth={2} />
                    : <ChevronDown size={17} color="var(--sol-dark)" strokeWidth={2} />
                  }
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OWNER BANNER ─────────────────────────────────── */}
      <section style={{ background: 'var(--ceiba)', padding: 'clamp(56px,7vw,80px) clamp(24px,5vw,40px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto', alignItems: 'center', gap: isMobile ? 24 : 48 }}>
            <div className="reveal">
              <div className="eyebrow" style={{ color: 'var(--sol)', marginBottom: 12 }}>{c.owner.eyebrow}</div>
              <h2 style={{ color: 'var(--crema)', marginBottom: 16, fontSize: 'clamp(22px,3vw,36px)' }}>{c.owner.h2}</h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(251,246,236,.75)', marginBottom: 10 }}>{c.owner.body}</p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(251,246,236,.55)' }}>{c.owner.body2}</p>
            </div>
            <div className="reveal d2" style={{ flexShrink: 0 }}>
              <Link
                href="/contacto"
                className="btn btn-sol"
                style={{ whiteSpace: 'nowrap' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 10px 32px rgba(245,209,58,0.4)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '' }}
              >
                {c.owner.cta} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section style={{ background: '#F5D13A', padding: 'clamp(64px,8vw,96px) clamp(24px,5vw,40px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#4A5E2A' }} aria-hidden="true" />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#4A5E2A', fontFamily: 'var(--sans)' }}>{c.ctaFinal.eyebrow}</span>
            <span style={{ display: 'block', width: 28, height: 1, background: '#4A5E2A' }} aria-hidden="true" />
          </div>

          <h2
            className="reveal d2"
            style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(34px,4.5vw,56px)', color: '#2A1F0E', lineHeight: 1.05, margin: '0 0 20px' }}
          >
            {c.ctaFinal.h2}{' '}
            <em style={{ color: '#4A5E2A', fontStyle: 'italic' }}>{c.ctaFinal.h2em}</em>
          </h2>

          <p
            className="reveal d3"
            style={{ fontSize: 15, lineHeight: 1.8, color: '#5A4A2A', fontFamily: 'var(--sans)', marginBottom: 40 }}
          >
            {c.ctaFinal.body}
          </p>

          <div className="reveal d4" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#propiedades"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#4A5E2A', color: '#FBF6EC', fontSize: 12, fontWeight: 600, letterSpacing: '1px', padding: '16px 32px', borderRadius: 32, textDecoration: 'none', boxShadow: '0 8px 32px rgba(74,94,42,0.3)', transition: 'transform 0.2s, box-shadow 0.2s', width: isMobile ? '100%' : 'auto' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 14px 40px rgba(74,94,42,0.45)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 8px 32px rgba(74,94,42,0.3)' }}
            >
              {c.ctaFinal.btnPrimary} ↓
            </a>
            <a
              href={waConsulta}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, border: '1.5px solid #4A5E2A', color: '#4A5E2A', fontSize: 12, fontWeight: 600, letterSpacing: '1px', padding: '16px 32px', borderRadius: 32, textDecoration: 'none', background: 'transparent', transition: 'background 0.2s', width: isMobile ? '100%' : 'auto' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(74,94,42,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
            >
              <WaIcon size={15} /> {c.ctaFinal.btnSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── PROP CARD ──────────────────────────────────────────────────── */
function PropCard({
  prop, badge, desc, spec, isRenta, perMes, beds, baths, btnVer, btnWa, waMsg, delay,
}: {
  prop: any; badge: string; desc: string; spec: string; isRenta: boolean
  perMes: string; beds: string; baths: string; btnVer: string; btnWa: string
  waMsg: string; delay: number
}) {
  return (
    <article
      className={`prop-card reveal d${delay}`}
      style={{ transition: 'transform 0.22s, box-shadow 0.22s' }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 16px 48px rgba(42,31,14,0.12)' }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '' }}
    >
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
        <Image
          src={prop.src}
          alt={prop.address}
          fill
          style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
        />
        <span style={{
          position: 'absolute', top: 11, left: 11,
          fontSize: 9, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
          padding: '4px 10px', borderRadius: 4,
          background: isRenta ? 'var(--ceiba-frost)' : 'var(--sol-pale)',
          color: isRenta ? 'var(--ceiba)' : 'var(--tierra)',
        }}>{badge}</span>
      </div>

      <div style={{ padding: '17px 19px' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--ceiba)', lineHeight: 1, marginBottom: 3 }}>
          {prop.price}
          {isRenta && <small style={{ fontSize: 12, fontWeight: 400, color: 'var(--gris)' }}>{perMes}</small>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
          <MapPin size={11} color="var(--canela)" strokeWidth={1.5} />
          <span style={{ fontFamily: 'var(--serif)', fontSize: 14.5, color: 'var(--tierra)' }}>{prop.address}</span>
        </div>
        <div style={{ fontSize: 11, color: 'var(--gris)', marginBottom: 10, paddingLeft: 15 }}>{prop.city}</div>
        <p style={{ fontSize: 12.5, lineHeight: 1.7, color: 'var(--gris)', marginBottom: 13 }}>{desc}</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', paddingTop: 13, borderTop: '1px solid var(--arena)' }}>
          <span style={{ fontSize: 10.5, color: 'var(--gris)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Bed size={13} color="var(--canela)" strokeWidth={1.5} />{prop.beds} {beds}
          </span>
          <span style={{ fontSize: 10.5, color: 'var(--gris)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Bath size={13} color="var(--canela)" strokeWidth={1.5} />{prop.baths} {baths}
          </span>
          {prop.parking && (
            <span style={{ fontSize: 10.5, color: 'var(--gris)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Car size={13} color="var(--canela)" strokeWidth={1.5} />{prop.parking}
            </span>
          )}
          <span style={{ fontSize: 10.5, color: 'var(--canela)', fontWeight: 600 }}>✦ {spec}</span>
        </div>
      </div>

      <div style={{ padding: '11px 19px', borderTop: '1px solid var(--arena)', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Link
          href={`/propiedades/${prop.slug}`}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, width: '100%', fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '10px', borderRadius: 5, border: '1.5px solid var(--ceiba)', color: 'var(--ceiba)', background: 'transparent', transition: 'all 0.2s', textDecoration: 'none' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--ceiba)'; el.style.color = '#FBF6EC' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.color = 'var(--ceiba)' }}
        >
          {btnVer}
        </Link>
        <a
          href={`https://wa.me/${WA}?text=${encodeURIComponent(waMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, width: '100%', fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '10px', borderRadius: 5, background: '#25D366', color: '#fff', transition: 'all 0.2s' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(-1px)'; el.style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = ''; el.style.boxShadow = '' }}
        >
          <WaIcon size={14} />{btnWa}
        </a>
      </div>
    </article>
  )
}
