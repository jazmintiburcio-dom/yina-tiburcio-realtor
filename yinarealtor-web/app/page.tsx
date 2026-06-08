'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useI18n } from '@/lib/i18n'
import { useIsMobile } from '@/lib/useIsMobile'
import { Home as HomeIcon, Key, Tag, MessageCircle, Bed, Bath, MapPin, Phone, Mail } from 'lucide-react'

/* ─── BILINGUAL PAGE CONTENT ────────────────────────────────────── */
const PAGE = {
  es: {
    hero: {
      eyebrow: 'Rhode Island Realtor®',
      h1a: 'Tu familia merece un ',
      h1em: 'hogar propio',
      h1b: '.',
      body: 'Compra, vende o renta una propiedad en Rhode Island con el respaldo de una Realtor bilingüe, experiencia profesional y atención personalizada en español.',
      btnWa: 'WhatsApp',
      btnCta: 'Consulta Gratis',
    },
    stats: [
      { num: '50+', label: 'Clientes atendidos' },
      { num: '5★', label: 'Calificación' },
      { num: 'ES|EN', label: 'Bilingüe' },
      { num: 'RI', label: 'Rhode Island' },
    ],
    services: {
      eyebrow: 'Lo que ofrezco',
      h2a: 'Te acompaño en cada paso de tu ',
      h2em: 'proceso inmobiliario',
      body: 'Ya sea que estés buscando tu primera vivienda, necesites rentar una propiedad, vender tu hogar o simplemente entender cuáles son tus opciones, recibirás orientación clara y apoyo personalizado durante todo el proceso.',
      cta: 'Ver todos los servicios',
      more: 'Más info →',
    },
    bio: {
      eyebrow: 'Conoce a Yina',
      h2a: 'Una profesional comprometida con la ',
      h2em: 'comunidad latina',
      opener: 'Hola, soy Yina Tiburcio.',
      p1: 'Como Realtor®, Notary Public y NNA Certified Loan Signing Agent, ayudo a familias e inversionistas en Rhode Island a comprar, vender y alquilar propiedades con confianza y claridad.',
      p2: 'Mi misión es acompañar especialmente a la comunidad latina durante cada etapa del proceso inmobiliario, explicando cada paso de forma sencilla, respondiendo preguntas y brindando orientación para que puedas tomar decisiones informadas.',
      p3: 'Ya sea que estés buscando tu primera vivienda, quieras vender una propiedad o necesites orientación para prepararte financieramente antes de comprar, estoy aquí para ayudarte a avanzar con seguridad hacia tus metas.',
      lang: 'Atención disponible en español e inglés.',
      cta: 'Conversemos →',
      badgeSub: 'Años de exp.',
    },
    areas: {
      eyebrow: 'Áreas Atendidas',
      h2a: 'Sirviendo a familias en ',
      h2em: 'Rhode Island',
      body: 'Trabajo con clientes en distintas comunidades de Rhode Island, brindando atención personalizada en español e inglés.',
      sub: 'Si tu ciudad no aparece en esta lista, no te preocupes. Contáctame para conocer cómo puedo ayudarte.',
      cta: 'Consulta Gratis →',
      more: '+ más comunidades de Rhode Island',
    },
    props: {
      eyebrow: 'Propiedades',
      h2a: 'Explora propiedades disponibles en ',
      h2em: 'Rhode Island',
      cta: 'Ver todas →',
      badgeRenta: 'En Renta',
      badgeVenta: 'En Venta',
      hab: 'hab.',
      banos: 'baños',
      verMas: 'Ver más →',
      specMap: { masterSuite: 'Master Suite', gasIncluido: 'Gas Incluido', dosParqueos: '2 Parqueos' },
    },
    testi: {
      eyebrow: 'Testimonios',
      h2a: 'Lo que dicen ',
      h2em: 'nuestros clientes',
      types: { comp: 'Compradores', inq: 'Inquilinos', prop: 'Propietario' },
    },
    contact: {
      eyebrow: 'Contacto',
      h2a: 'Hablemos sobre tus ',
      h2em: 'próximos pasos',
      body: 'Ya sea que estés pensando en comprar, vender o rentar una propiedad, estoy aquí para ayudarte a encontrar la mejor solución para tu situación.',
      wa: 'Escríbeme por WhatsApp',
      formTitle: 'Envía tu consulta',
      labelName: 'Nombre completo',
      placeholderName: 'Tu nombre',
      labelPhone: 'Teléfono',
      labelService: 'Servicio',
      selectService: 'Selecciona un servicio',
      svcOpts: ['Vender Propiedad', 'Comprar Casa', 'Rentar Propiedad', 'Asesoría y Orientación'],
      btnForm: 'Enviar Consulta →',
    },
    faq: {
      eyebrow: 'Preguntas Frecuentes',
      h2a: '¿Tienes ',
      h2em: 'preguntas?',
      body: 'Aquí encontrarás respuestas a las dudas más comunes sobre el proceso de compra, venta y renta de propiedades en Rhode Island.',
      cta: 'Consulta Gratis →',
    },
    faqs: [
      { q: '¿Qué necesito para comprar una casa por primera vez en Rhode Island?', a: 'Cada situación familiar es única, pero el paso fundamental es revisar tus finanzas para determinar tu capacidad de financiamiento y precalificación. Te guiamos paso a paso para entender los requisitos de crédito y conectar con los profesionales adecuados en el mercado local.' },
      { q: '¿Necesito tener un crédito perfecto para comprar una vivienda?', a: 'No necesariamente. Existen diversos programas de préstamos (FHA o convencionales) adaptados a diferentes perfiles financieros. Una consulta gratuita con Yina te ayudará a entender tus alternativas reales.' },
      { q: '¿Qué es una preaprobación hipotecaria (mortgage pre-approval)?', a: 'Es una evaluación preliminar que realiza un prestamista para certificar cuánto dinero te pueden financiar. Es clave en el mercado competitivo de Rhode Island para demostrar seriedad a los vendedores.' },
      { q: 'Quiero poner en venta mi propiedad en Providence o Cranston. ¿Por dónde empiezo?', a: 'El primer paso es realizar un análisis del mercado local para conocer el valor real de tu propiedad. Definimos una estrategia de promoción digital a la medida de tu situación.' },
      { q: 'Soy dueño de una propiedad y quiero ponerla en alquiler. ¿Cómo me ayudas?', a: 'Nos encargamos de toda la gestión, desde la promoción hasta la selección rigurosa de candidatos, evaluando historial crediticio y comprobantes de ingresos.' },
      { q: '¿Qué documentos necesito para rentar una propiedad en Rhode Island?', a: 'Generalmente necesitas identificación oficial vigente, comprobantes de ingresos y completar la solicitud de alquiler. Te acompañamos para presentar una postulación sólida.' },
      { q: '¿Puedo recibir ayuda si mi crédito es limitado?', a: 'Sí, te acompañamos durante la búsqueda y analizamos alternativas como depósitos adicionales o cofirmantes según tu situación.' },
      { q: '¿Cuánto cuesta una consulta inicial?', a: 'La consulta inicial es 100% gratuita y sin compromisos. Agéndala por WhatsApp o el calendario de la web.' },
    ],
  },
  en: {
    hero: {
      eyebrow: 'Rhode Island Realtor®',
      h1a: 'Your family deserves a ',
      h1em: 'home of your own',
      h1b: '.',
      body: 'Buy, sell, or rent a property in Rhode Island with the support of a bilingual Realtor®, professional experience, and personalized attention in Spanish and English.',
      btnWa: 'WhatsApp',
      btnCta: 'Free Consultation',
    },
    stats: [
      { num: '50+', label: 'Clients served' },
      { num: '5★', label: 'Rating' },
      { num: 'ES|EN', label: 'Bilingual' },
      { num: 'RI', label: 'Rhode Island' },
    ],
    services: {
      eyebrow: 'What I offer',
      h2a: 'I guide you through every step of your ',
      h2em: 'real estate journey',
      body: "Whether you're looking for your first home, need to rent a property, sell your home, or simply understand your options — you'll receive clear guidance and personalized support throughout the entire process.",
      cta: 'View all services',
      more: 'Learn more →',
    },
    bio: {
      eyebrow: 'Meet Yina',
      h2a: 'A professional committed to the ',
      h2em: 'Latino community',
      opener: "Hi, I'm Yina Tiburcio.",
      p1: 'As a Realtor®, Notary Public, and NNA Certified Loan Signing Agent, I help families and investors in Rhode Island buy, sell, and rent properties with confidence and clarity.',
      p2: 'My mission is to support the Latino community through every stage of the real estate process — explaining each step clearly, answering questions, and providing guidance so you can make informed decisions.',
      p3: "Whether you're looking for your first home, want to sell a property, or need guidance to prepare financially before buying, I'm here to help you move forward confidently toward your goals.",
      lang: 'Service available in Spanish and English.',
      cta: "Let's talk →",
      badgeSub: 'Years exp.',
    },
    areas: {
      eyebrow: 'Areas Served',
      h2a: 'Serving families across ',
      h2em: 'Rhode Island',
      body: 'I work with clients across different communities in Rhode Island, providing personalized attention in Spanish and English.',
      sub: "If your city isn't on this list, don't worry. Contact me to find out how I can help you.",
      cta: 'Free Consultation →',
      more: '+ more Rhode Island communities',
    },
    props: {
      eyebrow: 'Properties',
      h2a: 'Explore available properties in ',
      h2em: 'Rhode Island',
      cta: 'View all →',
      badgeRenta: 'For Rent',
      badgeVenta: 'For Sale',
      hab: 'bed.',
      banos: 'bath',
      verMas: 'View more →',
      specMap: { masterSuite: 'Master Suite', gasIncluido: 'Gas Included', dosParqueos: '2 Parking spots' },
    },
    testi: {
      eyebrow: 'Testimonials',
      h2a: 'What our ',
      h2em: 'clients say',
      types: { comp: 'Buyers', inq: 'Renters', prop: 'Property Owner' },
    },
    contact: {
      eyebrow: 'Contact',
      h2a: "Let's talk about your ",
      h2em: 'next steps',
      body: "Whether you're thinking about buying, selling, or renting a property, I'm here to help you find the best solution for your situation.",
      wa: 'Message me on WhatsApp',
      formTitle: 'Send your inquiry',
      labelName: 'Full name',
      placeholderName: 'Your name',
      labelPhone: 'Phone',
      labelService: 'Service',
      selectService: 'Select a service',
      svcOpts: ['Sell Property', 'Buy a Home', 'Rent a Property', 'Guidance & Consulting'],
      btnForm: 'Send Inquiry →',
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      h2a: 'Got ',
      h2em: 'questions?',
      body: "Here you'll find answers to the most common questions about buying, selling, and renting properties in Rhode Island.",
      cta: 'Free Consultation →',
    },
    faqs: [
      { q: 'What do I need to buy a home for the first time in Rhode Island?', a: "Every family's situation is unique, but the essential first step is reviewing your finances to determine your financing capacity and pre-qualification. We guide you step by step through credit requirements and connect you with the right professionals in the local market." },
      { q: 'Do I need perfect credit to buy a home?', a: 'Not necessarily. There are various loan programs (FHA or conventional) adapted to different financial profiles. A free consultation with Yina will help you understand your real alternatives.' },
      { q: 'What is a mortgage pre-approval?', a: "It's a preliminary evaluation by a lender certifying how much they can finance for you. It's key in Rhode Island's competitive market to demonstrate seriousness to sellers." },
      { q: 'I want to sell my property in Providence or Cranston. Where do I start?', a: 'The first step is a local market analysis to determine the real value of your property. We then define a digital marketing strategy tailored to your situation.' },
      { q: 'I own a property and want to rent it out. How do you help me find reliable tenants?', a: 'We handle the entire process — from promotion to rigorous candidate screening, evaluating credit history and proof of income.' },
      { q: 'What documents do I need to rent a property in Rhode Island?', a: "You'll generally need valid official ID, proof of income, and completion of the rental application. We accompany you to put together a strong application." },
      { q: 'Can I get help if my credit is limited?', a: 'Yes, we accompany you throughout the search and analyze alternatives such as additional deposits or co-signers depending on your situation.' },
      { q: 'How much does an initial consultation cost?', a: 'The initial consultation is 100% free and no-commitment. Schedule it via WhatsApp or the website calendar.' },
    ],
  },
} as const

/* ─── DATA ──────────────────────────────────────────────────────── */

/* Change 4 — updated FAQ (10 questions across 4 sections, displayed flat) */
const FAQS = [
  /* Comprar y Financiamiento */
  {
    q: '¿Qué necesito para comprar una casa por primera vez en Rhode Island?',
    a: 'Cada situación familiar es única, pero el paso fundamental es revisar tus finanzas para determinar tu capacidad de financiamiento y precalificación. Te guiamos paso a paso para entender los requisitos de crédito y conectar con los profesionales adecuados en el mercado local.',
  },
  {
    q: '¿Necesito tener un crédito perfecto para comprar una vivienda?',
    a: 'No necesariamente. Existen diversos programas de préstamos (FHA o convencionales) adaptados a diferentes perfiles financieros. Una consulta gratuita con Yina te ayudará a entender tus alternativas reales.',
  },
  {
    q: '¿Qué es una preaprobación hipotecaria (mortgage pre-approval)?',
    a: 'Es una evaluación preliminar que realiza un prestamista para certificar cuánto dinero te pueden financiar. Es clave en el mercado competitivo de Rhode Island para demostrar seriedad a los vendedores.',
  },
  /* Para Propietarios */
  {
    q: 'Quiero poner en venta mi propiedad en Providence o Cranston. ¿Por dónde empiezo?',
    a: 'El primer paso es realizar un análisis del mercado local para conocer el valor real de tu propiedad. Definimos una estrategia de promoción digital a la medida de tu situación.',
  },
  {
    q: 'Soy dueño de una propiedad y quiero ponerla en alquiler. ¿Cómo me ayudas?',
    a: 'Nos encargamos de toda la gestión, desde la promoción hasta la selección rigurosa de candidatos, evaluando historial crediticio y comprobantes de ingresos.',
  },
  /* Para Inquilinos */
  {
    q: '¿Qué documentos necesito para rentar una propiedad en Rhode Island?',
    a: 'Generalmente necesitas identificación oficial vigente, comprobantes de ingresos y completar la solicitud de alquiler. Te acompañamos para presentar una postulación sólida.',
  },
  {
    q: '¿Puedo recibir ayuda si mi crédito es limitado?',
    a: 'Sí, te acompañamos durante la búsqueda y analizamos alternativas como depósitos adicionales o cofirmantes según tu situación.',
  },
  /* Servicio y Contacto */
  {
    q: '¿Cuánto cuesta una consulta inicial?',
    a: 'La consulta inicial es 100% gratuita y sin compromisos. Agéndala por WhatsApp o el calendario de la web.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

/* Bilingual service cards */
const SERVICES = [
  {
    icon: Tag,
    title: { es: 'Vender Propiedad', en: 'Sell Property' },
    body: {
      es: 'Cada propiedad tiene una historia y un valor único. Te acompaño para preparar, promocionar y gestionar la venta de tu inmueble de manera estratégica y profesional.',
      en: 'Every property has a unique story and value. I accompany you in preparing, promoting, and managing the sale of your property strategically and professionally.',
    },
    badge: { es: '', en: '' },
    canelaBorder: false,
  },
  {
    icon: HomeIcon,
    title: { es: 'Comprar Casa', en: 'Buy a Home' },
    body: {
      es: 'Encontrar la propiedad adecuada es mucho más que buscar una casa. Te ayudo a entender tus opciones, conectar con profesionales del proceso y avanzar con confianza hacia la compra de tu hogar.',
      en: 'Finding the right property is much more than searching for a house. I help you understand your options, connect with the right professionals, and move confidently toward purchasing your home.',
    },
    badge: { es: 'Popular', en: 'Popular' },
    canelaBorder: false,
  },
  {
    icon: Key,
    title: { es: 'Rentar Propiedad', en: 'Rent a Property' },
    body: {
      es: 'Si buscas una vivienda para rentar o deseas colocar tu propiedad en alquiler, te ayudo a navegar el proceso con mayor tranquilidad y claridad.',
      en: "Whether you're looking to rent a home or want to list your property for rental, I help you navigate the process with ease and clarity.",
    },
    badge: { es: '', en: '' },
    canelaBorder: true,
  },
  {
    icon: MessageCircle,
    title: { es: 'Asesoría y Orientación', en: 'Guidance & Consulting' },
    body: {
      es: '¿No sabes por dónde comenzar? Muchas personas tienen preguntas sobre crédito, financiamiento, documentación o requisitos. Agenda una consulta para conversar sobre tu situación y explorar tus opciones.',
      en: "Not sure where to start? Many people have questions about credit, financing, documentation, or requirements. Schedule a consultation to discuss your situation and explore your options.",
    },
    badge: { es: 'Gratis', en: 'Free' },
    canelaBorder: false,
  },
]

const CITIES = [
  'Providence', 'Cranston', 'Warwick', 'West Warwick',
  'Woonsocket', 'Johnston', 'Bristol', 'Warren',
  'Scituate', 'Pawtucket', 'East Providence', 'Central Falls',
]

const TRUST_BADGES = [
  'Realtor®',
  'Notary Public',
  'NNA Certified Loan Signing Agent',
  'NAHREP Member',
  'Español / English',
]

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const WA_SVG = (size = 19) => (
  <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: 'currentColor', flexShrink: 0 }}>
    <path d={WA_PATH} />
  </svg>
)

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function Home() {
  const { locale, t } = useI18n()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const c = PAGE[locale]
  const isMobile = useIsMobile()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#sobre-yina') {
        videoRef.current?.play()
        document.getElementById('sobre-yina')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      {/* FAQ JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: isMobile ? '65vh' : '100vh', marginTop: 'calc(-1 * var(--nav-h))', paddingTop: 'var(--nav-h)', overflow: 'hidden', display: 'flex', alignItems: 'center', background: '#1a2810' }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
          src="/videos/hero.mp4"
        />
        <div className="hero-overlay" />
        <div className="hero-sol-line" />

        <div style={{ position: 'relative', zIndex: 5, width: '100%', maxWidth: 1280, margin: '0 auto', padding: isMobile ? 'clamp(32px,5vw,64px) clamp(20px,5vw,48px)' : 'clamp(48px,7vw,96px) clamp(24px,5vw,64px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, minHeight: isMobile ? '55vh' : 'calc(100vh - var(--nav-h))' }}>

          {/* Hero text */}
          <div style={{ maxWidth: 510, paddingBottom: 'clamp(56px,7vw,88px)' }}>
            <div className="eyebrow eyebrow-sol reveal d1" style={{ marginBottom: 22 }}>{c.hero.eyebrow}</div>
            <h1 className="reveal d2" style={{ marginBottom: 20, textShadow: '0 2px 24px rgba(0,0,0,.3)' }}>
              {c.hero.h1a}<em>{c.hero.h1em}</em>{c.hero.h1b}
            </h1>
            <p className="reveal d3" style={{ fontSize: 15.5, lineHeight: 1.75, color: 'rgba(251,246,236,.88)', marginBottom: 32, maxWidth: 430 }}>
              {c.hero.body}
            </p>
            <div className="reveal d4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://wa.me/14016025102" target="_blank" rel="noopener noreferrer" className="btn btn-sol">
                {WA_SVG(16)} {c.hero.btnWa}
              </a>
              <Link href="/contacto" className="btn btn-outline-white">{c.hero.btnCta}</Link>
            </div>
          </div>

          {/* ── HERO FLOATING CARD — Change 1: photo + name + credentials only, no paragraph ── */}
          <div className="reveal d3" style={{ alignSelf: 'flex-end', marginBottom: 'clamp(32px,5vw,56px)', background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,.5)', borderRadius: 16, padding: '20px 22px', display: isMobile ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, boxShadow: '0 12px 48px rgba(0,0,0,.18)', minWidth: 220, maxWidth: 270, textAlign: 'center' }}>
            {/* Circular photo */}
            <div style={{ width: 72, height: 72, borderRadius: '50%', border: '2.5px solid #F5D13A', padding: 2, overflow: 'hidden', background: 'var(--sol-pale)', flexShrink: 0 }}>
              <Image src="/images/hero-bio.png" alt="Yina Tiburcio" width={68} height={68} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            {/* Name */}
            <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 600, color: 'var(--tierra)', lineHeight: 1.2 }}>Yina Tiburcio</div>
            {/* Credentials */}
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.5px', color: 'var(--canela)', textTransform: 'uppercase', lineHeight: 1.6, textAlign: 'center' }}>
              Realtor® &nbsp;·&nbsp; Notary Public &nbsp;·&nbsp; NNA Certified Loan Signing Agent
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <div style={{ background: 'var(--sol)', padding: isMobile ? '16px 20px' : '24px clamp(20px,5vw,64px)' }}>
        <div style={{ maxWidth: isMobile ? 340 : 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: 1, background: 'rgba(42,31,14,.12)', borderRadius: 8, overflow: 'hidden' }}>
          {c.stats.map(s => (
            <div key={s.num} style={{ background: 'var(--sol)', padding: isMobile ? '10px 8px' : '20px 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: isMobile ? 20 : 36, fontWeight: 700, color: 'var(--tierra)', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: isMobile ? 8 : 10, fontWeight: 500, letterSpacing: isMobile ? 1 : 2, textTransform: 'uppercase', color: 'rgba(42,31,14,.6)', marginTop: isMobile ? 3 : 5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--crema)' }}>
        <div className="section-inner">
          <div className="s-head reveal">
            <div className="eyebrow" style={{ marginBottom: 12 }}>{c.services.eyebrow}</div>
            <h2>{c.services.h2a}<em>{c.services.h2em}</em></h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--gris)', marginTop: 14, maxWidth: 580 }}>
              {c.services.body}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {SERVICES.map((svc, i) => {
              const cardBgs = ['#F0E8D4', '#E8F0D8', '#E8DCC4', '#FAF7F2']
              const cardBorders = ['var(--arena)', 'rgba(74,94,42,0.15)', 'rgba(196,132,74,0.2)', 'var(--arena)']
              return (
              <div
                key={svc.title.es}
                className={`svc-item reveal d${i + 1}`}
                style={{
                  position: 'relative',
                  padding: 32,
                  borderRadius: 16,
                  background: cardBgs[i % 4],
                  border: `1px solid ${cardBorders[i % 4]}`,
                  transition: 'transform 0.22s, box-shadow 0.22s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 14px 44px rgba(42,31,14,.08)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                }}
              >
                {svc.badge[locale] && (
                  <span style={{ position: 'absolute', top: 14, right: 14, fontSize: 9, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 20, background: 'var(--sol)', color: 'var(--tierra)' }}>
                    {svc.badge[locale]}
                  </span>
                )}
                <div className="svc-item-icon" style={{ width: 48, height: 48, background: 'var(--ceiba-frost)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, border: '1px solid var(--ceiba-pale)' }}>
                  <svc.icon size={22} color="var(--ceiba)" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: 19, marginBottom: 10, color: 'var(--tierra)' }}>{svc.title[locale]}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.75, color: 'var(--gris)', marginBottom: 18 }}>{svc.body[locale]}</p>
                <Link href="/servicios" style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ceiba)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {c.services.more}
                </Link>
              </div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/servicios" className="btn btn-ceiba">{c.services.cta}</Link>
          </div>
        </div>
      </section>

      {/* ── BIO / SOBRE YINA — Change 3: granular reveal + ceiba trust badges ── */}
      <section className="section" style={{ background: 'var(--lino)' }} id="sobre-yina">
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>

            {/* Video — plays once, no loop */}
            <div className="reveal" style={{ position: 'relative', overflow: isMobile ? 'visible' : 'visible' }}>
              <video
                ref={videoRef}
                autoPlay muted playsInline
                style={{ width: '100%', maxWidth: isMobile ? '100%' : 460, aspectRatio: isMobile ? '4/3' : '3/4', objectFit: 'cover', borderRadius: 4, display: 'block' }}
                src="/videos/bio.mp4"
              />
              <div style={{ position: 'absolute', bottom: isMobile ? 12 : -14, right: isMobile ? 12 : -14, background: 'var(--ceiba)', padding: '10px 14px', borderRadius: 8, textAlign: 'center', boxShadow: '0 6px 20px rgba(74,94,42,.35)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1 }}>15+</div>
                <div style={{ fontSize: 8, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', marginTop: 3 }}>{c.bio.badgeSub}</div>
              </div>
            </div>

            {/* Bio text — staggered reveals */}
            <div>
              <div className="eyebrow reveal d1" style={{ marginBottom: 12 }}>{c.bio.eyebrow}</div>
              <h2 className="reveal d2" style={{ marginTop: 10, marginBottom: 18 }}>{c.bio.h2a}<em>{c.bio.h2em}</em></h2>

              <div className="reveal d3">
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--tierra)', fontFamily: 'var(--serif)', fontWeight: 600, marginBottom: 14 }}>
                  {c.bio.opener}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--gris)', marginBottom: 14 }}>
                  {c.bio.p1}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--gris)', marginBottom: 14 }}>
                  {c.bio.p2}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--gris)', marginBottom: 14 }}>
                  {c.bio.p3}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ceiba)', fontStyle: 'italic', fontFamily: 'var(--serif)', marginBottom: 24 }}>
                  {c.bio.lang}
                </p>
              </div>

              {/* Change 3 — trust badges: ceiba bg + crema text */}
              <div className="reveal d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {TRUST_BADGES.map(badge => (
                  <span
                    key={badge}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#FBF6EC',
                      background: '#4A5E2A',
                      border: '1px solid #4A5E2A',
                      borderRadius: 999,
                      padding: '6px 16px',
                      letterSpacing: '0.3px',
                      transition: 'background 0.18s, border-color 0.18s, transform 0.18s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.background = '#C4844A'
                      el.style.borderColor = '#C4844A'
                      el.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.background = '#4A5E2A'
                      el.style.borderColor = '#4A5E2A'
                      el.style.transform = ''
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="reveal d5">
                <Link href="/contacto" className="btn btn-sol">{c.bio.cta}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÁREAS ATENDIDAS ──────────────────────────────── */}
      <section className="section" style={{ background: 'var(--ceiba)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
            <div className="reveal">
              <div className="eyebrow" style={{ color: 'var(--sol)', marginBottom: 12 }}>{c.areas.eyebrow}</div>
              <h2 style={{ color: 'var(--crema)', marginTop: 10, marginBottom: 14 }}>
                {c.areas.h2a}<em style={{ color: 'var(--sol)' }}>{c.areas.h2em}</em>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(251,246,236,.7)', marginBottom: 20 }}>
                {c.areas.body}
              </p>
              <p style={{ fontSize: 13.5, lineHeight: 1.75, color: 'rgba(251,246,236,.45)', fontStyle: 'italic', marginBottom: 28 }}>
                {c.areas.sub}
              </p>
              <Link href="/contacto" className="btn btn-sol">{c.areas.cta}</Link>
            </div>

            <div className="reveal d2">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {CITIES.map((city, i) => (
                  <CityTag key={city} city={city} delay={i * 50} />
                ))}
              </div>
              <p style={{ marginTop: 18, fontSize: 10, color: 'rgba(251,246,236,.3)', fontStyle: 'italic' }}>
                {c.areas.more}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROPIEDADES DESTACADAS ───────────────────────── */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 12 }}>{c.props.eyebrow}</div>
              <h2>{c.props.h2a}<em>{c.props.h2em}</em></h2>
            </div>
            <Link href="/propiedades" className="btn btn-outline-sol reveal">{c.props.cta}</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
            {[
            { src: '/images/propiedades/23-concannon-st/main.jpg', type: 'renta', price: '$2,700', addr: '23 Concannon St', city: 'Providence, RI 02904', beds: 3, baths: 2, spec: 'masterSuite', href: '/propiedades/23-concannon-st' },
              { src: '/images/propiedades/37-humes-st/main.jpg', type: 'renta', price: '$1,950', addr: '37 Humes St', city: 'Providence, RI 02907', beds: 2, baths: 1, spec: 'gasIncluido', href: '/propiedades/37-humes-st' },
              { src: '/images/propiedades/227-dexter-st/main.jpg', type: 'renta', price: '$2,500', addr: '227 Dexter St', city: 'Central Falls, RI 02863', beds: 3, baths: 1, spec: 'dosParqueos', href: '/propiedades/227-dexter-st' },
              { src: '/images/propiedades/86-cooke-st/main.jpeg', type: 'venta', price: '$489,000', addr: '86 Cooke St', city: 'Providence, RI 02906', beds: 5, baths: 3, spec: 'dosParqueos', href: '/propiedades/86-cooke-st' },
            ].map((p, i) => {
              const badge = p.type === 'renta' ? c.props.badgeRenta : c.props.badgeVenta
              return (
                <div key={i} className={`prop-card reveal d${i + 1}`}>
                  <div style={{ position: 'relative', height: 195, overflow: 'hidden' }}>
                    <Image src={p.src} alt={p.addr} fill className="prop-img" style={{ objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: 11, left: 11, fontSize: 9, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 4, background: p.type === 'renta' ? 'var(--ceiba-frost)' : 'var(--sol-pale)', color: p.type === 'renta' ? 'var(--ceiba)' : 'var(--tierra)' }}>{badge}</span>
                  </div>
                  <div style={{ padding: '17px 19px' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--ceiba)', lineHeight: 1, marginBottom: 3 }}>{p.price}{p.type === 'renta' && <small style={{ fontSize: 12, fontWeight: 400, color: 'var(--gris)' }}>{locale === 'en' ? '/mo' : '/mes'}</small>}</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 14.5, color: 'var(--tierra)', marginBottom: 2 }}>{p.addr}</div>
                    <div style={{ fontSize: 11, color: 'var(--gris)', marginBottom: 13 }}>{p.city}</div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 13, borderTop: '1px solid var(--arena)' }}>
                      <span style={{ fontSize: 10.5, color: 'var(--gris)', display: 'flex', alignItems: 'center', gap: 4 }}><Bed size={13} color="var(--canela)" strokeWidth={1.5} /> {p.beds} {c.props.hab}</span>
                      <span style={{ fontSize: 10.5, color: 'var(--gris)', display: 'flex', alignItems: 'center', gap: 4 }}><Bath size={13} color="var(--canela)" strokeWidth={1.5} /> {p.baths} {c.props.banos}</span>
                      <span style={{ fontSize: 10.5, color: 'var(--canela)', fontWeight: 500 }}>✦ {c.props.specMap[p.spec as keyof typeof c.props.specMap]}</span>
                    </div>
                  </div>
                  <div style={{ padding: '12px 19px', borderTop: '1px solid var(--arena)' }}>
                    <PropCardLink href={p.href} label={c.props.verMas} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ───────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--lino)' }}>
        <div className="section-inner">
          <div className="s-head center reveal">
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 12 }}>{c.testi.eyebrow}</div>
            <h2>{c.testi.h2a}<em>{c.testi.h2em}</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 20, marginTop: 44 }}>
            {[
              { q: 'Desde la primera consulta nos sentimos acompañados. Yina respondió nuestras preguntas con paciencia y nos ayudó a entender cada etapa del proceso de compra.', name: 'Familia Rodríguez', loc: 'Cranston, RI', typeKey: 'comp' as const, init: 'R' },
              { q: 'Encontrar una vivienda puede ser estresante, pero contar con alguien que hablara nuestro idioma y nos guiara hizo toda la diferencia.', name: 'María & José L.', loc: 'Providence, RI', typeKey: 'inq' as const, init: 'M' },
              { q: 'Profesional, organizada y siempre disponible para orientarnos. Su apoyo nos permitió avanzar con tranquilidad durante todo el proceso.', name: 'Carlos Méndez', loc: 'Pawtucket, RI', typeKey: 'prop' as const, init: 'C' },
            ].map((testi, i) => (
              <div key={i} className={`testi-card reveal d${i + 1}`} style={isMobile ? { padding: '16px' } : {}}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 13 }}>
                  {'★★★★★'.split('').map((_, j) => <span key={j} style={{ color: 'var(--sol-dark)', fontSize: 14 }}>★</span>)}
                </div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: isMobile ? 13 : 16, fontStyle: 'italic', fontWeight: 300, color: 'var(--tierra)', lineHeight: 1.65, marginBottom: isMobile ? 12 : 17 }}>&ldquo;{testi.q}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--sol-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 14, fontWeight: 600, color: 'var(--ceiba)', flexShrink: 0, border: '1.5px solid var(--sol)' }}>{testi.init}</div>
                  <div>
                    <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--ceiba)' }}>{testi.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--gris)', marginTop: 2 }}>{testi.loc}</div>
                    <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--canela)', marginTop: 3 }}>{c.testi.types[testi.typeKey]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--sol)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'clamp(36px,6vw,80px)', alignItems: 'start' }}>
            <div className="reveal">
              <div className="eyebrow" style={{ color: 'var(--ceiba)', marginBottom: 10 }}>{c.contact.eyebrow}</div>
              <h2 style={{ color: 'var(--tierra)', marginTop: 10, marginBottom: 16 }}>{c.contact.h2a}<em>{c.contact.h2em}</em></h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(42,31,14,.7)', marginBottom: 22 }}>{c.contact.body}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, fontSize: 13, color: 'var(--tierra)', fontWeight: 500 }}><MapPin size={15} color="var(--canela)" strokeWidth={1.5} style={{ flexShrink: 0 }} /> 1738 Broad St, Cranston, RI</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, fontSize: 13, color: 'var(--tierra)', fontWeight: 500 }}><Phone size={15} color="var(--canela)" strokeWidth={1.5} style={{ flexShrink: 0 }} /> +1 (401) 602-5102</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, fontSize: 13, color: 'var(--tierra)', fontWeight: 500 }}><Mail size={15} color="var(--canela)" strokeWidth={1.5} style={{ flexShrink: 0 }} /> yinatiburcio@gmail.com</div>
              </div>
              <a
                href="https://wa.me/14016025102"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#25D366', color: '#fff', fontSize: 12, fontWeight: 600, letterSpacing: '.5px', padding: '13px 24px', borderRadius: 28, boxShadow: '0 6px 24px rgba(37,211,102,.28)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 10px 36px rgba(37,211,102,.5)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = '0 6px 24px rgba(37,211,102,.28)'
                }}
              >
                {WA_SVG(19)} {c.contact.wa}
              </a>
            </div>
            <div className="reveal d2">
              <div style={{ background: 'var(--crema)', borderRadius: 12, padding: 30, boxShadow: '0 10px 40px rgba(42,31,14,.1)' }}>
                <h3 style={{ fontSize: 18, marginBottom: 20, color: 'var(--tierra)' }}>{c.contact.formTitle}</h3>
                <form onSubmit={e => { e.preventDefault(); window.location.href = '/contacto' }}>
                  <div style={{ marginBottom: 15 }}>
                    <label className="form-label">{c.contact.labelName}</label>
                    <input type="text" className="form-control" placeholder={c.contact.placeholderName} required />
                  </div>
                  <div style={{ marginBottom: 15 }}>
                    <label className="form-label">{c.contact.labelPhone}</label>
                    <input type="tel" className="form-control" placeholder="+1 (___) ___-____" />
                  </div>
                  <div style={{ marginBottom: 15 }}>
                    <label className="form-label">{c.contact.labelService}</label>
                    <select className="form-control">
                      <option value="">{c.contact.selectService}</option>
                      {c.contact.svcOpts.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-ceiba" style={{ width: '100%', justifyContent: 'center' }}>{c.contact.btnForm}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ — Change 4: new 10 questions ─────────────── */}
      <section className="section" style={{ background: 'var(--lino)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>

            <div className="reveal" style={{ position: isMobile ? 'static' : 'sticky', top: isMobile ? 'auto' : 'calc(var(--nav-h) + 24px)' }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>{c.faq.eyebrow}</div>
              <h2 style={{ marginTop: 10, marginBottom: 16 }}>{c.faq.h2a}<em>{c.faq.h2em}</em></h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--gris)', marginBottom: 28 }}>
                {c.faq.body}
              </p>
              <Link
                href="/contacto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--sans)',
                  fontSize: 10.5,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  borderRadius: 6,
                  background: '#F5D13A',
                  color: '#4A5E2A',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all .22s',
                  textDecoration: 'none',
                }}
              >
                {c.faq.cta}
              </Link>
            </div>

            <div className="reveal d2" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {c.faqs.map((faq, i) => (
                <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <svg viewBox="0 0 24 24" style={{ width: 17, height: 17, stroke: 'var(--sol-dark)', fill: 'none', strokeWidth: 2, transition: 'transform .3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', flexShrink: 0 }}>
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <div className="faq-a">
                    <div className="faq-a-inner">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

/* ─── SUB-COMPONENTS ─────────────────────────────────────────── */

function CityTag({ city, delay }: { city: string; delay: number }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 15,
        fontWeight: 500,
        color: 'rgba(251,246,236,.9)',
        background: 'rgba(255,255,255,.1)',
        border: '1px solid rgba(255,255,255,.18)',
        padding: '12px 24px',
        borderRadius: 999,
        cursor: 'default',
        transition: 'background 200ms ease, color 200ms ease, transform 200ms ease, border-color 200ms ease',
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = '#F5D13A'
        el.style.color = '#4A5E2A'
        el.style.borderColor = '#F5D13A'
        el.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = 'rgba(255,255,255,.1)'
        el.style.color = 'rgba(251,246,236,.9)'
        el.style.borderColor = 'rgba(255,255,255,.18)'
        el.style.transform = ''
      }}
    >
      {city}
    </span>
  )
}

function PropCardLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        color: '#4A5E2A',
        textDecoration: 'none',
        transition: 'color 150ms ease, text-decoration 150ms ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = '#C4844A'
        el.style.textDecoration = 'underline'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = '#4A5E2A'
        el.style.textDecoration = 'none'
      }}
    >
      {label}
    </Link>
  )
}
