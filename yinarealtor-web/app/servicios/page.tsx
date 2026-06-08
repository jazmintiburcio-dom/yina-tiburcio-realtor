'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp, CheckCircle, PenLine, Tag, Key, Home as HomeIcon, MapPin } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { useIsMobile } from '@/lib/useIsMobile'

/* ─── BILINGUAL CONTENT ─────────────────────────────────────────── */
const PAGE = {
  es: {
    hero: {
      eyebrow: 'Servicios · Services',
      h1: 'Tu camino hacia un hogar propio en Rhode Island,',
      h1em: 'con asesoría clara y en tu idioma.',
      body: 'Dar el siguiente paso en bienes raíces no tiene por qué ser complicado. Te ofrezco una guía honesta, experiencia en el mercado local de Rhode Island y un acompañamiento cercano en tu propio idioma en cada etapa del camino.',
      btnWa: 'Consulta Gratis',
      btnProps: 'Ver Propiedades',
      badge: '+50 clientes · 5★',
      badgeSub: 'familias',
      nna: 'NNA Certified',
      nnaSub: 'Loan Signing Agent · Notary Public',
      brokerSub: 'Rhode Island · Massachusetts · Connecticut',
    },
    trust: [
      { stat: '+15', unit: 'Años', label: 'de Experiencia', desc: 'Trayectoria profesional en negocios y atención al cliente, ofreciendo un trato respetuoso, transparente y personalizado.' },
      { stat: '100%', unit: '', label: 'Bilingüe', desc: 'Comunicación clara y directa en español e inglés para respaldar a toda la comunidad.' },
      { stat: 'Real', unit: '', label: 'Broker', desc: 'Realtor® activa asociada a Real Broker, combinando conocimiento del mercado local y alcance regional.' },
      { stat: 'NNA', unit: '', label: 'Certified', desc: 'Notary Public y NNA Certified Loan Signing Agent en Rhode Island, garantizando precisión en cada firma.' },
      { stat: '+50', unit: '', label: 'Clientes · 5★', desc: 'Familias, compradores e inversionistas que han respaldado su futuro con una calificación de 5 estrellas.' },
    ],
    intro: {
      eyebrow: '¿Cómo te puedo ayudar?',
      quote: 'Cada historia inmobiliaria es única y sé que dar el siguiente paso puede generar muchas dudas sobre el crédito, el financiamiento o los contratos. Por eso, no ofrezco soluciones generales: me tomo el tiempo de escuchar tu situación particular. Mi compromiso es darte la claridad que necesitas para avanzar con total seguridad.',
    },
    groupA: {
      label: 'Para propietarios',
      services: [
        {
          id: 'vender',
          title: 'Vender tu\nPropiedad',
          titleEN: 'Home Selling',
          badge: 'Venta de Casa',
          headline: 'Maximiza el valor de tu inmueble con una venta sin estrés.',
          desc: 'Tu propiedad representa años de esfuerzo. Aplico un enfoque metódico para fijar un precio competitivo en el mercado actual de Rhode Island y diseño una estrategia de promoción activa para atraer compradores calificados rápidamente.',
          bullets: [
            'Análisis Comparativo de Mercado (CMA) profesional',
            'Estrategia de comercialización y promoción digital avanzada',
            'Gestión integral de consultas, filtros de seguridad y visitas organizadas',
            'Negociación estratégica y acompañamiento notarial completo hasta el cierre',
          ],
          cta: 'Consulta Gratis',
        },
        {
          id: 'alquiler',
          title: 'Colocar en\nAlquiler',
          titleEN: 'Landlord Services',
          badge: 'Para Propietarios',
          headline: 'Protege tu inversión y conecta con los inquilinos correctos.',
          desc: 'Ser arrendador requiere tiempo y cuidado. Te ayudo a promocionar tu inmueble de forma estratégica para encontrar inquilinos solventes lo antes posible, gestionando todo el papeleo con absoluta precisión jurídica.',
          bullets: [
            'Análisis de renta competitiva según la zona (Cranston, Providence, etc.)',
            'Promoción activa para que tu propiedad genere ingresos rápidamente',
            'Verificación estricta de historial crediticio, referencias e ingresos',
            'Estructuración transparente de contratos de alquiler seguros',
          ],
          cta: 'Consulta Gratis',
        },
      ],
    },
    groupB: {
      label: 'Para compradores y familias',
      services: [
        {
          id: 'comprar',
          title: 'Comprar\nuna Casa',
          titleEN: 'Home Buying',
          badge: 'Compra de Casa',
          headline: 'Encuentra el hogar ideal para tu familia con la asesoría correcta.',
          desc: 'Adquirir una propiedad en Rhode Island es un paso importante. Te guío para derribar los mitos sobre el crédito o el financiamiento inicial, conectándote con las mejores opciones de préstamos locales para que alcances tu meta con seguridad.',
          bullets: [
            'Análisis de capacidad de financiamiento y precalificación',
            'Búsqueda de propiedades en zonas clave según tus necesidades y presupuesto',
            'Coordinación de visitas y asesoramiento en ofertas competitivas',
            'Revisión clara y paso a paso de toda la documentación legal',
          ],
          cta: 'Ver Propiedades',
          ctaHref: '/propiedades',
        },
        {
          id: 'renta',
          title: 'Buscar\nPropiedad en Renta',
          titleEN: 'Tenant Services',
          badge: 'Para Inquilinos',
          headline: 'Encuentra una vivienda segura y accesible para los tuyos.',
          desc: 'Buscar una propiedad para rentar puede ser un proceso estresante. Te acompaño durante la búsqueda y la gestión de los requisitos para ayudarte a encontrar opciones adecuadas que se adapten a tu presupuesto familiar y laboral.',
          bullets: [
            'Acceso al inventario de propiedades disponibles para alquiler',
            'Orientación sobre la documentación y los requisitos del mercado local',
            'Apoyo para presentar postulaciones sólidas ante los propietarios',
            'Acompañamiento cercano durante la firma del contrato de renta',
          ],
          cta: 'Ver Propiedades',
          ctaHref: '/propiedades',
        },
      ],
    },
    financial: {
      eyebrow: 'Eje transversal de crecimiento',
      title: 'Asesoría, Crédito y\nEducación Financiera',
      titleEN: 'Financial Coaching',
      badge: 'Educación Financiera',
      headline: 'Prepárate hoy para alcanzar tus metas inmobiliarias del mañana.',
      desc: 'Si sientes que aún no cumples los requisitos de crédito o documentación para dar el paso, diseñamos una hoja de ruta personalizada para entender cómo funciona el sistema hipotecario y qué pasos dar para calificar.',
      topics: [
        'Análisis de tu historial de crédito para aplicaciones inmobiliarias',
        'Orientación sobre préstamos FHA, convencionales y opciones de asistencia',
        'Estructuración de metas financieras a corto y mediano plazo',
        'Estrategias para mejorar tu puntaje crediticio antes de aplicar',
      ],
      cta: 'Consulta Gratis',
    },
    why: {
      eyebrow: 'Por qué elegirme',
      h2: 'Por qué trabajar',
      h2em: 'con Yina',
      items: [
        { title: 'Asesoría 100% Bilingüe', desc: 'Te atiendo y te explico cada documento en tu propio idioma (español e inglés) para que firmes con absoluta tranquilidad.' },
        { title: 'Respaldo Profesional Completo', desc: 'Como Realtor® asociada a Real Broker, combino el conocimiento del mercado local con licencias oficiales de Notary Public y NNA Certified Loan Signing Agent.' },
        { title: 'Compromiso con la Comunidad', desc: 'Orgullosa miembro de NAHREP y creadora de iniciativas que apoyan a las familias y emprendedores locales en Rhode Island.' },
        { title: 'Acompañamiento Humano', desc: 'Creo en las relaciones basadas en la honestidad. Mi meta es que te sientas escuchado de principio a fin, eliminando la jerga técnica confusa.' },
      ],
    },
    cta: {
      eyebrow: '¿Empezamos?',
      h2: '¿Empezamos a diseñar',
      h2em: 'tu próximo paso?',
      body: 'El mercado de bienes raíces en Rhode Island se mueve rápido, pero con la guía correcta el proceso es simple y transparente. Conversemos sobre tu situación sin compromisos.',
      sub: 'Atención bilingüe dedicada para familias y propietarios en Rhode Island, Massachusetts y Connecticut.',
      btnWa: 'Consulta Gratis',
      btnProps: 'Ver Propiedades →',
    },
  },
  en: {
    hero: {
      eyebrow: 'Services · Servicios',
      h1: 'Your path to homeownership in Rhode Island,',
      h1em: 'with clear guidance in your language.',
      body: 'Taking the next step in real estate doesn\'t have to be complicated. I offer honest guidance, local market expertise in Rhode Island, and close support in your own language at every stage of the journey.',
      btnWa: 'Free Consultation',
      btnProps: 'View Properties',
      badge: '50+ clients · 5★',
      badgeSub: 'families',
      nna: 'NNA Certified',
      nnaSub: 'Loan Signing Agent · Notary Public',
      brokerSub: 'Rhode Island · Massachusetts · Connecticut',
    },
    trust: [
      { stat: '+15', unit: 'Yrs', label: 'Experience', desc: 'Professional background in business and client service, offering respectful, transparent, and personalized treatment.' },
      { stat: '100%', unit: '', label: 'Bilingual', desc: 'Clear and direct communication in Spanish and English to support the entire community.' },
      { stat: 'Real', unit: '', label: 'Broker', desc: 'Active Realtor® affiliated with Real Broker, combining local market knowledge with regional reach.' },
      { stat: 'NNA', unit: '', label: 'Certified', desc: 'Notary Public and NNA Certified Loan Signing Agent in Rhode Island, ensuring precision at every signing.' },
      { stat: '50+', unit: '', label: 'Clients · 5★', desc: 'Families, buyers, and investors who have trusted us with their future, backed by a 5-star rating.' },
    ],
    intro: {
      eyebrow: 'How can I help you?',
      quote: 'Every real estate story is unique, and I know that taking the next step can raise many questions about credit, financing, or contracts. That\'s why I don\'t offer one-size-fits-all solutions — I take the time to listen to your specific situation. My commitment is to give you the clarity you need to move forward with complete confidence.',
    },
    groupA: {
      label: 'For property owners',
      services: [
        {
          id: 'vender',
          title: 'Sell Your\nProperty',
          titleEN: 'Home Selling',
          badge: 'Home Selling',
          headline: 'Maximize the value of your property with a stress-free sale.',
          desc: 'Your property represents years of effort. I apply a methodical approach to set a competitive price in the current Rhode Island market and design an active promotion strategy to attract qualified buyers quickly.',
          bullets: [
            'Professional Comparative Market Analysis (CMA)',
            'Advanced digital marketing and promotion strategy',
            'Full management of inquiries, security screening, and organized showings',
            'Strategic negotiation and full notarial support through closing',
          ],
          cta: 'Free Consultation',
        },
        {
          id: 'alquiler',
          title: 'List Your\nRental',
          titleEN: 'Landlord Services',
          badge: 'Landlord Services',
          headline: 'Protect your investment and connect with the right tenants.',
          desc: 'Being a landlord takes time and care. I help you market your property strategically to find solvent tenants as quickly as possible, handling all the paperwork with complete legal precision.',
          bullets: [
            'Competitive rent analysis by area (Cranston, Providence, etc.)',
            'Active promotion to keep your property generating income quickly',
            'Strict screening of credit history, references, and income',
            'Transparent structuring of secure rental agreements',
          ],
          cta: 'Free Consultation',
        },
      ],
    },
    groupB: {
      label: 'For buyers & families',
      services: [
        {
          id: 'comprar',
          title: 'Buy\na Home',
          titleEN: 'Home Buying',
          badge: 'Home Buying',
          headline: 'Find the ideal home for your family with the right guidance.',
          desc: 'Purchasing a property in Rhode Island is a major step. I guide you to break through the myths about credit or initial financing, connecting you with the best local loan options so you can reach your goal safely.',
          bullets: [
            'Financing capacity analysis and pre-qualification',
            'Property search in key areas based on your needs and budget',
            'Visit coordination and advice on competitive offers',
            'Clear, step-by-step review of all legal documentation',
          ],
          cta: 'View Properties',
          ctaHref: '/propiedades',
        },
        {
          id: 'renta',
          title: 'Find a\nRental',
          titleEN: 'Tenant Services',
          badge: 'Tenant Services',
          headline: 'Find a safe and affordable home for your family.',
          desc: 'Searching for a rental property can be stressful. I accompany you through the search and requirements process to help you find suitable options that fit your family and work budget.',
          bullets: [
            'Access to available rental property inventory',
            'Guidance on documentation and local market requirements',
            'Support to submit strong applications to landlords',
            'Close accompaniment during the rental agreement signing',
          ],
          cta: 'View Properties',
          ctaHref: '/propiedades',
        },
      ],
    },
    financial: {
      eyebrow: 'Growth track',
      title: 'Advisory, Credit &\nFinancial Education',
      titleEN: 'Financial Coaching',
      badge: 'Financial Coaching',
      headline: 'Prepare today to achieve your real estate goals tomorrow.',
      desc: 'If you feel you don\'t yet meet the credit or documentation requirements to take the next step, we design a personalized roadmap to understand how the mortgage system works and what steps to take to qualify.',
      topics: [
        'Analysis of your credit history for real estate applications',
        'Guidance on FHA, conventional loans, and assistance options',
        'Structuring short and medium-term financial goals',
        'Strategies to improve your credit score before applying',
      ],
      cta: 'Free Consultation',
    },
    why: {
      eyebrow: 'Why choose me',
      h2: 'Why work',
      h2em: 'with Yina',
      items: [
        { title: '100% Bilingual Service', desc: 'I serve you and explain every document in your own language (Spanish and English) so you can sign with complete peace of mind.' },
        { title: 'Full Professional Support', desc: 'As a Realtor® affiliated with Real Broker, I combine local market knowledge with official Notary Public and NNA Certified Loan Signing Agent licenses.' },
        { title: 'Community Commitment', desc: 'Proud NAHREP member and creator of initiatives that support local families and entrepreneurs in Rhode Island.' },
        { title: 'Human Accompaniment', desc: 'I believe in relationships built on honesty. My goal is for you to feel heard from start to finish, eliminating confusing technical jargon.' },
      ],
    },
    cta: {
      eyebrow: 'Ready to start?',
      h2: 'Let\'s design',
      h2em: 'your next step.',
      body: 'The Rhode Island real estate market moves fast, but with the right guidance the process is simple and transparent. Let\'s talk about your situation with no commitment.',
      sub: 'Bilingual dedicated service for families and property owners in Rhode Island, Massachusetts, and Connecticut.',
      btnWa: 'Free Consultation',
      btnProps: 'View Properties →',
    },
  },
} as const

const WA = '14016025102'
const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: 'currentColor', flexShrink: 0 }}>
      <path d={WA_PATH} />
    </svg>
  )
}

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */
export default function Servicios() {
  const { locale } = useI18n()
  const c = PAGE[locale]
  const isMobile = useIsMobile()

  const waConsulta = `https://wa.me/${WA}?text=${encodeURIComponent(
    locale === 'en'
      ? 'Hi Yina, I would like a free consultation about your services.'
      : 'Hola Yina, quisiera una consulta gratuita sobre tus servicios.'
  )}`

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: isMobile ? 'auto' : '92vh',
          marginTop: 'calc(-1 * var(--nav-h))',
          paddingTop: 'var(--nav-h)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background: '#F5D13A',
        }}
      >
        {/* Blobs difusos */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true">
          <div style={{ position: 'absolute', top: -128, left: -96, width: 520, height: 520, borderRadius: '50%', opacity: 0.3, background: 'radial-gradient(circle, #4A5E2A 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, borderRadius: '50%', opacity: 0.15, background: 'radial-gradient(ellipse, #C4844A 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: -160, right: -96, width: 480, height: 480, borderRadius: '50%', opacity: 0.25, background: 'radial-gradient(circle, #4A5E2A 0%, transparent 70%)' }} />
        </div>

        {/* Grid 3 columnas — glass panel visible sobre el amarillo */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '10px' }}>
          <div style={{
            background: 'rgba(251,246,236,0.28)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 28,
            border: '1px solid rgba(255,255,255,0.55)',
            boxShadow: '0 8px 48px rgba(42,31,14,0.08)',
            padding: 'clamp(32px,4vw,52px)',
          }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '360px 1fr 200px', gap: isMobile ? 24 : 48, alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>

            {/* Col 1 — Foto grande (protagonista) */}
            <div className="reveal" style={{ position: 'relative', display: isMobile ? 'none' : 'block' }}>
              <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: '0 28px 72px rgba(42,31,14,0.24)', aspectRatio: '4/5' }}>
                <Image
                  src="/images/Services/Services_Heroe_1.png"
                  alt="Yina Tiburcio con cliente revisando documentos"
                  fill
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="380px"
                  priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(42,31,14,0.45) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: 20, left: 20, background: 'rgba(74,94,42,0.92)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: '8px 14px' }}>
                  <p style={{ color: '#FBF6EC', fontSize: 13, fontWeight: 600, fontFamily: 'var(--sans)', margin: 0 }}>Real Broker®</p>
                  <p style={{ color: 'rgba(168,191,120,0.9)', fontSize: 10, fontFamily: 'var(--sans)', margin: 0, marginTop: 2 }}>{c.hero.brokerSub}</p>
                </div>
              </div>
            </div>

            {/* Col 2 — Texto central */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ display: 'block', width: 28, height: 1, background: '#4A5E2A' }} aria-hidden="true" />
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#4A5E2A', fontFamily: 'var(--sans)' }}>
                  {c.hero.eyebrow}
                </span>
              </div>
              <h1
                className="reveal d1"
                style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(34px, 4vw, 54px)', lineHeight: 1.06, color: '#2A1F0E', margin: 0 }}
              >
                {c.hero.h1}{' '}
                <em style={{ color: '#4A5E2A', fontStyle: 'italic' }}>{c.hero.h1em}</em>
              </h1>
              <p className="reveal d2" style={{ fontSize: 15, lineHeight: 1.75, color: '#5A4A2A', fontFamily: 'var(--sans)', maxWidth: 420, margin: 0 }}>
                {c.hero.body}
              </p>
              <div className="reveal d3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href={waConsulta}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#4A5E2A', color: '#FBF6EC', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '13px 24px', borderRadius: 28, boxShadow: '0 6px 24px rgba(74,94,42,0.3)', transition: 'transform 0.2s, box-shadow 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 10px 36px rgba(74,94,42,0.45)' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 6px 24px rgba(74,94,42,0.3)' }}
                >
                  <WaIcon size={15} /> {c.hero.btnWa}
                </a>
                <Link
                  href="/propiedades"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #4A5E2A', color: '#4A5E2A', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '13px 24px', borderRadius: 28, transition: 'background 0.2s', textDecoration: 'none', background: 'transparent' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(74,94,42,0.08)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
                >
                  {c.hero.btnProps} →
                </Link>
              </div>

              {/* Imagen hero visible solo en mobile — después de los botones */}
              {isMobile && (
                <div style={{ position: 'relative', width: '100%', maxWidth: 380, margin: '12px auto 0', aspectRatio: '3/4' }}>
                  <Image
                    src="/images/Services/Services_Heroe_1.png"
                    alt="Yina Tiburcio con cliente revisando documentos"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
                    sizes="100vw"
                  />
                </div>
              )}
            </div>

            {/* Col 3 — Foto secundaria (más pequeña) + badges */}
            <div className="reveal d2" style={{ display: isMobile ? 'none' : 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Foto 2 — notablemente más pequeña */}
              <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', boxShadow: '0 16px 40px rgba(42,31,14,0.16)', aspectRatio: '3/4' }}>
                <Image
                  src="/images/Services/Services_Heroe_2.png"
                  alt="Yina Tiburcio revisando documentos"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="220px"
                  priority
                />
              </div>

              {/* Badge +50 — fuera de la foto */}
              <div style={{ background: 'rgba(74,94,42,0.92)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: '#F5D13A', lineHeight: 1 }}>+50</span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: '#E0EBC8', lineHeight: 1.4 }}>{c.hero.badgeSub}<br />· 5★</span>
              </div>

              {/* Badge NNA */}
              <div style={{ background: 'rgba(251,246,236,0.85)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: '#4A5E2A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <PenLine size={16} color="#F5D13A" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#4A5E2A', fontFamily: 'var(--sans)', margin: 0 }}>{c.hero.nna}</p>
                  <p style={{ fontSize: 9.5, color: '#8A7A6A', fontFamily: 'var(--sans)', margin: 0, marginTop: 2 }}>{c.hero.nnaSub}</p>
                </div>
              </div>
            </div>

          </div>
          </div>{/* end glass panel */}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.5 }} aria-hidden="true">
          <div style={{ width: 1, height: 32, background: '#4A5E2A', animation: 'bounce 1s infinite' }} />
          <span style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: '#4A5E2A', fontFamily: 'var(--sans)' }}>Scroll</span>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <div style={{ background: 'var(--crema)', borderBottom: '1px solid var(--arena)', padding: 'clamp(32px,4vw,48px) clamp(24px,5vw,40px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(5, minmax(160px, 1fr))' : 'repeat(5,1fr)', gap: 0, borderRadius: 0, overflowX: isMobile ? 'auto' : 'visible' }}>
          {c.trust.map((item, i) => (
            <div
              key={item.label}
              className={`reveal d${i + 1}`}
              style={{ textAlign: 'center', padding: '16px clamp(12px,2vw,24px)', borderRight: i < 4 ? '1px solid var(--arena)' : 'none', borderRadius: 8, transition: 'transform 0.22s, box-shadow 0.22s', cursor: 'default' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 8px 28px rgba(42,31,14,.07)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '' }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 3, marginBottom: 4 }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 300, color: '#4A5E2A', lineHeight: 1 }}>{item.stat}</span>
                {item.unit && <span style={{ fontSize: 12, color: '#4A5E2A', fontFamily: 'var(--sans)', marginLeft: 2 }}>{item.unit}</span>}
              </div>
              <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#C4844A', fontFamily: 'var(--sans)', marginBottom: 8 }}>{item.label}</p>
              <p style={{ fontSize: 11, lineHeight: 1.6, color: '#8A7A6A', fontFamily: 'var(--sans)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO QUOTE ──────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--lino)', paddingTop: 64, paddingBottom: 48 }}>
        <div className="section-inner">
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ display: 'block', width: 28, height: 1, background: '#C4844A' }} aria-hidden="true" />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#C4844A', fontFamily: 'var(--sans)' }}>{c.intro.eyebrow}</span>
              <span style={{ display: 'block', width: 28, height: 1, background: '#C4844A' }} aria-hidden="true" />
            </div>
            <p className="reveal d2" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(18px,2.2vw,26px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.65, color: '#2A1F0E' }}>
              &ldquo;{c.intro.quote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — Grupo B: Compradores ─────────────────── */}
      <ServicesGroup
        label={c.groupB.label}
        services={c.groupB.services}
        accent="#4A5E2A"
        bgs={['#FFFFFF', '#FFFFFF']}
        sectionBg="var(--crema)"
        locale={locale}
        waBase={WA}
      />

      {/* ── SERVICIOS — Grupo A: Propietarios ────────────────── */}
      <ServicesGroup
        label={c.groupA.label}
        services={c.groupA.services}
        accent="#C4844A"
        bgs={['#FFFFFF', '#FFFFFF']}
        sectionBg="var(--lino)"
        locale={locale}
        waBase={WA}
        reverse
      />

      {/* ── EDUCACIÓN FINANCIERA ─────────────────────────────── */}
      <section style={{ background: 'var(--off-white)', padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,40px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
            <span style={{ display: 'block', width: 40, height: 1, background: '#5A4A2A' }} aria-hidden="true" />
            <h2 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#5A4A2A', fontFamily: 'var(--sans)', margin: 0 }}>{c.financial.eyebrow}</h2>
            <span style={{ flex: 1, height: 1, background: 'rgba(90,74,42,0.15)' }} aria-hidden="true" />
          </div>

          <div className="reveal" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--arena)', maxWidth: 860, margin: '0 auto' }}>
            <div style={{ height: 4, background: 'linear-gradient(90deg, #4A5E2A, #C4844A)' }} />
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0 }}>
              {/* Texto */}
              <div style={{ padding: 'clamp(32px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--ceiba-frost)', border: '1px solid var(--ceiba-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <TrendingUp size={20} color="#4A5E2A" strokeWidth={1.5} />
                  </div>
                  <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#5A4A2A', background: 'rgba(90,74,42,0.1)', padding: '4px 12px', borderRadius: 20, fontFamily: 'var(--sans)' }}>{c.financial.badge}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(24px,2.8vw,36px)', lineHeight: 1.15, color: '#2A1F0E', margin: 0, whiteSpace: 'pre-line' }}>
                  {c.financial.title.split('\n').map((line, i) =>
                    i === 1 ? <em key={i} style={{ color: '#4A5E2A', fontStyle: 'italic' }}>{line}</em> : <span key={i}>{line}{'\n'}</span>
                  )}
                </h3>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#C4844A', fontFamily: 'var(--sans)', margin: 0 }}>{c.financial.headline}</p>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: '#5A4A2A', fontFamily: 'var(--sans)', margin: 0 }}>{c.financial.desc}</p>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent(locale === 'en' ? 'Hi Yina, I want guidance on credit and mortgage.' : 'Hola Yina, quiero asesoría sobre crédito e hipoteca.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    marginTop: 8, alignSelf: 'flex-start',
                    padding: '10px 22px', borderRadius: 8,
                    border: '1.5px solid #4A5E2A',
                    background: 'transparent',
                    color: '#4A5E2A', fontFamily: 'var(--sans)',
                    fontSize: 11, fontWeight: 600, letterSpacing: '1.5px',
                    textTransform: 'uppercase', textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = '#4A5E2A'
                    el.style.color = '#FBF6EC'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = 'transparent'
                    el.style.color = '#4A5E2A'
                    el.style.transform = ''
                  }}
                >
                  {c.financial.cta} →
                </a>
              </div>

              {/* Topics */}
              <div style={{ background: '#E0EBC8', padding: 'clamp(32px,4vw,48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
                <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4A5E2A', fontFamily: 'var(--sans)', marginBottom: 6 }}>
                  {locale === 'en' ? 'Topics covered' : 'Temas frecuentes abordados'}
                </p>
                {c.financial.topics.map((topic) => (
                  <div
                    key={topic}
                    style={{ background: 'rgba(255,255,255,0.5)', borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'flex-start', gap: 12, transition: 'background 0.2s, transform 0.2s', cursor: 'default' }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'rgba(255,255,255,0.85)'; el.style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(255,255,255,0.5)'; el.style.transform = '' }}
                  >
                    <span style={{ color: '#4A5E2A', fontWeight: 700, flexShrink: 0, marginTop: 1 }} aria-hidden="true">✓</span>
                    <p style={{ fontSize: 13, lineHeight: 1.55, color: '#2A1F0E', fontFamily: 'var(--sans)', margin: 0 }}>{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ YINA ─────────────────────────────────────── */}
      <section style={{ background: '#4A5E2A', padding: 'clamp(56px,7vw,88px) clamp(24px,5vw,40px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ display: 'block', width: 28, height: 1, background: '#F5D13A' }} aria-hidden="true" />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#F5D13A', fontFamily: 'var(--sans)' }}>{c.why.eyebrow}</span>
            </div>
            <h2 className="reveal d2" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(32px,4vw,52px)', color: '#FBF6EC', lineHeight: 1.05, margin: 0 }}>
              {c.why.h2} <em style={{ color: '#F5D13A', fontStyle: 'italic' }}>{c.why.h2em}</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: 18 }}>
            {c.why.items.map((item, i) => (
              <WhyCard key={item.title} item={item} delay={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section style={{ background: '#F5D13A', padding: 'clamp(64px,8vw,96px) clamp(24px,5vw,40px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#4A5E2A' }} aria-hidden="true" />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#4A5E2A', fontFamily: 'var(--sans)' }}>{c.cta.eyebrow}</span>
            <span style={{ display: 'block', width: 28, height: 1, background: '#4A5E2A' }} aria-hidden="true" />
          </div>
          <h2 className="reveal d2" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(36px,5vw,60px)', color: '#2A1F0E', lineHeight: 1.05, margin: '0 0 20px' }}>
            {c.cta.h2} <em style={{ color: '#4A5E2A', fontStyle: 'italic' }}>{c.cta.h2em}</em>
          </h2>
          <p className="reveal d3" style={{ fontSize: 15, lineHeight: 1.8, color: '#5A4A2A', fontFamily: 'var(--sans)', marginBottom: 8 }}>{c.cta.body}</p>
          <p className="reveal d3" style={{ fontSize: 13, lineHeight: 1.7, color: '#5A4A2A', fontFamily: 'var(--sans)', fontStyle: 'italic', marginBottom: 40 }}>{c.cta.sub}</p>
          <div className="reveal d4" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={waConsulta}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#4A5E2A', color: '#FBF6EC', fontSize: 12, fontWeight: 600, letterSpacing: '1px', padding: '16px 32px', borderRadius: 32, boxShadow: '0 8px 32px rgba(74,94,42,0.3)', transition: 'transform 0.2s, box-shadow 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 14px 40px rgba(74,94,42,0.45)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 8px 32px rgba(74,94,42,0.3)' }}
            >
              <WaIcon size={18} /> {c.cta.btnWa}
            </a>
            <Link
              href="/propiedades"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #4A5E2A', color: '#4A5E2A', fontSize: 12, fontWeight: 600, letterSpacing: '1px', padding: '16px 32px', borderRadius: 32, transition: 'background 0.2s', textDecoration: 'none', background: 'transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(74,94,42,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
            >
              {c.cta.btnProps}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── SUB-COMPONENTS ─────────────────────────────────────────── */

type ServiceItem = {
  id: string
  title: string
  titleEN: string
  badge: string
  headline: string
  desc: string
  bullets: readonly string[]
  cta: string
  ctaHref?: string
}

function ServicesGroup({
  label,
  services,
  accent,
  bgs,
  sectionBg,
  locale,
  waBase,
  reverse = false,
}: {
  label: string
  services: readonly ServiceItem[]
  accent: string
  bgs: string[]
  sectionBg: string
  locale: 'es' | 'en'
  waBase: string
  reverse?: boolean
}) {
  const isMobile = useIsMobile()
  return (
    <section style={{ background: sectionBg, padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,40px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Group label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
          <span style={{ display: 'block', width: 40, height: 1, background: accent }} aria-hidden="true" />
          <h2 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: accent, fontFamily: 'var(--sans)', margin: 0 }}>{label}</h2>
          <span style={{ flex: 1, height: 1, background: accent, opacity: 0.2 }} aria-hidden="true" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>
          {services.map((svc, i) => (
            <ServiceCard
              key={svc.id}
              svc={svc}
              accent={accent}
              bg={bgs[i] ?? bgs[0]}
              delay={i + 1}
              locale={locale}
              waBase={waBase}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  vender: Tag,
  alquiler: Key,
  comprar: HomeIcon,
  renta: MapPin,
}

function ServiceCard({
  svc,
  accent,
  bg,
  delay,
  locale,
  waBase,
}: {
  svc: ServiceItem
  accent: string
  bg: string
  delay: number
  locale: 'es' | 'en'
  waBase: string
}) {
  const [expanded, setExpanded] = useState(false)
  const isMobile = useIsMobile()
  const showFull = !isMobile || expanded
  const href = svc.ctaHref
    ? svc.ctaHref
    : `https://wa.me/${waBase}?text=${encodeURIComponent(
        locale === 'en'
          ? `Hi Yina, I'm interested in: ${svc.titleEN}`
          : `Hola Yina, me interesa el servicio: ${svc.title.replace('\n', ' ')}`
      )}`
  const isExternal = href.startsWith('http')
  const WatermarkIcon = SERVICE_ICONS[svc.id]

  const cardStyle: React.CSSProperties = {
    background: bg,
    border: `1px solid ${accent}25`,
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.22s, box-shadow 0.22s',
    boxShadow: '0 4px 24px rgba(42,31,14,0.09)',
  }

  return (
    <article
      className={`reveal d${delay}`}
      style={cardStyle}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = `0 16px 48px ${accent}28`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.transform = ''
        el.style.boxShadow = ''
      }}
    >
      {/* Top accent */}
      <div style={{ height: 4, background: accent }} />

      <div style={{ padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        {/* Icon box — mismo sistema que el home */}
        {WatermarkIcon && (
          <div style={{ width: 48, height: 48, borderRadius: 10, background: `${accent}14`, border: `1px solid ${accent}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <WatermarkIcon size={22} color={accent} strokeWidth={1.5} />
          </div>
        )}
        {/* Badge EN */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: accent, background: `${accent}15`, padding: '4px 12px', borderRadius: 20, fontFamily: 'var(--sans)' }}>
            {svc.badge}
          </span>
        </div>

        {/* Título */}
        <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(24px,2.5vw,34px)', lineHeight: 1.15, color: '#2A1F0E', margin: 0, whiteSpace: 'pre-line' }}>
          {svc.title}
        </h3>

        {/* Headline */}
        <p style={{ fontSize: 13, fontWeight: 600, color: accent, fontFamily: 'var(--sans)', margin: 0, lineHeight: 1.4 }}>{svc.headline}</p>

        {/* Desc — oculto en mobile hasta expandir (CSS media query + expanded class) */}
        <p className={`service-desc${expanded ? ' expanded' : ''}`} style={{ fontSize: 13.5, lineHeight: 1.75, color: '#5A4A2A', fontFamily: 'var(--sans)', margin: 0 }}>{svc.desc}</p>

        {/* Bullets — todos ocultos en mobile hasta expandir */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0, listStyle: 'none' }}>
          {svc.bullets.map((b) => (
            <li key={b} className={`service-bullet${expanded ? ' expanded' : ''}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#5A4A2A', fontFamily: 'var(--sans)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, flexShrink: 0, marginTop: 5 }} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        {/* Leer más — solo mobile via CSS, visible siempre si >2 bullets */}
        {svc.bullets.length > 2 && (
          <button
            onClick={() => setExpanded(v => !v)}
            className="service-readmore"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: accent, fontFamily: 'var(--sans)',
              fontSize: 12, fontWeight: 600, letterSpacing: '0.5px',
              padding: '2px 0', alignSelf: 'flex-start',
              textDecoration: 'underline', textDecorationColor: `${accent}50`,
            }}
          >
            {expanded
              ? (locale === 'en' ? '↑ See less' : '↑ Ver menos')
              : (locale === 'en' ? '↓ Read more' : '↓ Leer más')}
          </button>
        )}

        {/* CTA — botón outline con el accent de cada tarjeta */}
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 8, alignSelf: 'flex-start',
              padding: '10px 22px', borderRadius: 8,
              border: `1.5px solid ${accent}`,
              background: 'transparent',
              color: accent, fontFamily: 'var(--sans)',
              fontSize: 11, fontWeight: 600, letterSpacing: '1.5px',
              textTransform: 'uppercase', textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = accent
              el.style.color = '#FBF6EC'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'transparent'
              el.style.color = accent
              el.style.transform = ''
            }}
          >
            {svc.cta} →
          </a>
        ) : (
          <Link
            href={href}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 8, alignSelf: 'flex-start',
              padding: '10px 22px', borderRadius: 8,
              border: `1.5px solid ${accent}`,
              background: 'transparent',
              color: accent, fontFamily: 'var(--sans)',
              fontSize: 11, fontWeight: 600, letterSpacing: '1.5px',
              textTransform: 'uppercase', textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = accent
              el.style.color = '#FBF6EC'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'transparent'
              el.style.color = accent
              el.style.transform = ''
            }}
          >
            {svc.cta} →
          </Link>
        )}
      </div>
    </article>
  )
}

function WhyCard({ item, delay }: { item: { title: string; desc: string }; delay: number }) {
  return (
    <div
      className={`reveal d${delay + 1}`}
      style={{
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 20,
        padding: 'clamp(20px,2.5vw,28px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        transition: 'background 0.22s, transform 0.22s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(255,255,255,0.12)'
        el.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(255,255,255,0.07)'
        el.style.transform = ''
      }}
    >
      <CheckCircle size={22} color="#F5D13A" strokeWidth={1.5} />
      <h3 style={{ fontSize: 15, fontWeight: 600, color: '#F5D13A', fontFamily: 'var(--sans)', margin: 0, lineHeight: 1.3 }}>{item.title}</h3>
      <p style={{ fontSize: 13, lineHeight: 1.7, color: '#A8BF78', fontFamily: 'var(--sans)', margin: 0 }}>{item.desc}</p>
    </div>
  )
}
