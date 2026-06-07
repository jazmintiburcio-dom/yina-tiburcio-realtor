// src/app/servicios/page.tsx
// Yina Tiburcio Realtor — Página de Servicios
// Copy Oficial Aprobado v1.0
// Next.js 14 · App Router · Tailwind CSS
// Sistema: Cormorant Garamond + DM Sans · Paleta Sol y Ceiba

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// ─── Meta ────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Servicios | Yina Tiburcio — Realtor® & Loan Signing Agent Rhode Island',
  description:
    'Compra, venta, alquiler y firma de préstamos en Rhode Island. Asesoría 100% bilingüe para familias latinas. Realtor® asociada a Real Broker · NNA Certified.',
  alternates: {
    canonical: 'https://yinatiburcio.com/servicios',
    languages: { 'en-US': '/en/services', 'es-US': '/servicios' },
  },
}

// ─── Data: Trust Bar ─────────────────────────────────────────────────────────
const trustItems = [
  {
    stat: '+15',
    unit: 'Años',
    label: 'de Experiencia',
    desc: 'Trayectoria profesional en negocios y atención al cliente, ofreciendo un trato respetuoso, transparente y personalizado.',
  },
  {
    stat: '100%',
    unit: '',
    label: 'Bilingüe',
    desc: 'Comunicación clara y directa en español e inglés para respaldar a toda la comunidad.',
  },
  {
    stat: 'Real',
    unit: '',
    label: 'Broker',
    desc: 'Realtor® activa asociada a Real Broker, combinando conocimiento del mercado local y alcance regional.',
  },
  {
    stat: 'NNA',
    unit: '',
    label: 'Certified',
    desc: 'Notary Public y NNA Certified Loan Signing Agent en Rhode Island, garantizando precisión en cada firma.',
  },
  {
    stat: '+50',
    unit: '',
    label: 'Clientes · 5★',
    desc: 'Familias, compradores e inversionistas que han respaldado su futuro con una calificación de 5 estrellas.',
  },
]

// ─── Data: Servicios ──────────────────────────────────────────────────────────
const serviceGroups = [
  {
    groupLabel: 'Para propietarios',
    groupColor: '#C4844A',
    groupBg: '#F8E8D8',
    services: [
      {
        id: 'vender',
        icon: '🏷️',
        headline: 'Maximiza el valor de tu inmueble con una venta sin estrés.',
        title: 'Vender tu\nPropiedad',
        titleEn: 'Home Selling',
        desc: 'Tu propiedad representa años de esfuerzo. Aplico un enfoque metódico para fijar un precio competitivo en el mercado actual de Rhode Island y diseño una estrategia de promoción activa para atraer compradores calificados rápidamente.',
        bullets: [
          'Análisis Comparativo de Mercado (CMA) profesional',
          'Estrategia de comercialización y promoción digital avanzada',
          'Gestión integral de consultas, filtros de seguridad y visitas organizadas',
          'Negociación estratégica y acompañamiento notarial completo hasta el cierre',
        ],
        cta: 'Consulta Gratis',
        ctaHref: 'https://wa.me/14015551234?text=Hola%20Yina%2C%20quiero%20vender%20mi%20propiedad',
      },
      {
        id: 'alquiler',
        icon: '🔑',
        headline: 'Protege tu inversión y conecta con los inquilinos correctos.',
        title: 'Colocar en\nAlquiler',
        titleEn: 'Landlord Services',
        desc: 'Ser arrendador requiere tiempo y cuidado. Te ayudo a promocionar tu inmueble de forma estratégica para encontrar inquilinos solventes lo antes posible, gestionando todo el papeleo con absoluta precisión jurídica.',
        bullets: [
          'Análisis de renta competitiva según la zona (Cranston, Providence, etc.)',
          'Promoción activa para que tu propiedad genere ingresos rápidamente',
          'Verificación estricta de historial crediticio, referencias e ingresos',
          'Estructuración transparente de contratos de alquiler seguros',
        ],
        cta: 'Consulta Gratis',
        ctaHref: 'https://wa.me/14015551234?text=Hola%20Yina%2C%20quiero%20alquilar%20mi%20propiedad',
      },
    ],
  },
  {
    groupLabel: 'Para compradores y familias',
    groupColor: '#4A5E2A',
    groupBg: '#F0F5E8',
    services: [
      {
        id: 'comprar',
        icon: '🏡',
        headline: 'Encuentra el hogar ideal para tu familia con la asesoría correcta.',
        title: 'Comprar\nuna Casa',
        titleEn: 'Home Buying',
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
        icon: '🏘️',
        headline: 'Encuentra una vivienda segura y accesible para los tuyos.',
        title: 'Buscar\nPropiedad en Renta',
        titleEn: 'Tenant Services',
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
]

// ─── Data: Eje transversal ───────────────────────────────────────────────────
const financialService = {
  headline: 'Prepárate hoy para alcanzar tus metas inmobiliarias del mañana.',
  desc: 'Si sientes que aún no cumples los requisitos de crédito o documentación para dar el paso, diseñamos una hoja de ruta personalizada para entender cómo funciona el sistema hipotecario y qué pasos dar para calificar.',
  topics: [
    'Análisis de tu historial de crédito para aplicaciones inmobiliarias',
    'Orientación sobre préstamos FHA, convencionales y opciones de asistencia',
    'Estructuración de metas financieras a corto y mediano plazo',
  ],
}

// ─── Data: Por qué Yina ──────────────────────────────────────────────────────
const whyYina = [
  {
    icon: '🌎',
    title: 'Asesoría 100% Bilingüe',
    desc: 'Te atiendo y te explico cada documento en tu propio idioma (español e inglés) para que firmes con absoluta tranquilidad.',
  },
  {
    icon: '🏛️',
    title: 'Respaldo Profesional Completo',
    desc: 'Como Realtor® asociada a Real Broker, combino el conocimiento del mercado local con licencias oficiales de Notary Public y NNA Certified Loan Signing Agent, garantizando seguridad legal en tu cierre hipotecario.',
  },
  {
    icon: '🤝',
    title: 'Compromiso con la Comunidad',
    desc: 'Orgullosa miembro de NAHREP y creadora de iniciativas que apoyan a las familias y emprendedores locales en Rhode Island.',
  },
  {
    icon: '💛',
    title: 'Acompañamiento Humano',
    desc: 'Creo en las relaciones basadas en la honestidad. Mi meta es que te sientas escuchado de principio a fin, eliminando la jerga técnica confusa.',
  },
]

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ServiciosPage() {
  return (
    <main className="bg-[#FBF6EC] overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
         ══════════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: '#F5D13A' }}
        aria-label="Hero — Servicios Yina Tiburcio"
      >
        {/* Blobs */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #4A5E2A 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(ellipse, #C4844A 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-40 -right-24 w-[480px] h-[480px] rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, #4A5E2A 0%, transparent 70%)' }}
          />
        </div>

        {/* Glassmorphism */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(251,246,236,0.22)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
          }}
          aria-hidden="true"
        />

        {/* Grid 3 columnas */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px_300px] gap-6 lg:gap-8 items-center">

            {/* Col 1 — Foto grande */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-[380px] mx-auto lg:mx-0">
                <Image
                  src="/images/services/Services_Heroe_1.png"
                  alt="Yina Tiburcio con cliente revisando documentos de compraventa en Rhode Island"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:1024px) 90vw, 380px"
                  priority
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{ background: 'linear-gradient(to top, rgba(42,31,14,0.4), transparent)' }}
                />
                <div
                  className="absolute bottom-5 left-5 rounded-xl px-4 py-2"
                  style={{ background: 'rgba(74,94,42,0.92)', backdropFilter: 'blur(8px)' }}
                >
                  <p className="text-[#FBF6EC] text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="font-semibold">Real Broker®</span>
                  </p>
                  <p className="text-[#A8BF78] text-[11px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Rhode Island · Massachusetts · Connecticut
                  </p>
                </div>
              </div>
            </div>

            {/* Col 2 — Copy central */}
            <div className="order-1 lg:order-2 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="block w-7 h-px bg-[#4A5E2A]" aria-hidden="true" />
                <span
                  className="text-[10px] font-medium tracking-[3px] uppercase text-[#4A5E2A]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Servicios · Services
                </span>
              </div>

              <h1
                className="leading-[1.02] text-[#2A1F0E]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: 'clamp(38px, 5vw, 64px)',
                }}
              >
                Tu camino hacia{' '}
                <em className="italic" style={{ color: '#4A5E2A' }}>
                  un hogar propio
                </em>{' '}
                en Rhode Island, con asesoría clara y en tu idioma.
              </h1>

              <p
                className="leading-relaxed max-w-[420px] text-[#5A4A2A]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px' }}
              >
                Dar el siguiente paso en bienes raíces no tiene por qué ser complicado. Te ofrezco
                una guía honesta, experiencia en el mercado local de Rhode Island y un
                acompañamiento cercano en tu propio idioma en cada etapa del camino.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://wa.me/14015551234?text=Hola%20Yina%2C%20quisiera%20una%20consulta%20gratuita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[#FBF6EC] text-sm font-medium transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md"
                  style={{ background: '#4A5E2A', fontFamily: "'DM Sans', sans-serif" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consulta Gratis
                </a>
                <Link
                  href="/propiedades"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium border transition-all duration-200 hover:bg-[#4A5E2A]/10"
                  style={{ borderColor: '#4A5E2A', color: '#4A5E2A', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Ver Propiedades →
                </Link>
              </div>
            </div>

            {/* Col 3 — Foto pequeña + badges */}
            <div className="order-3 hidden lg:flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <Image
                  src="/images/services/Services_Heroe_2.png"
                  alt="Yina Tiburcio revisando documentos en su oficina"
                  fill
                  className="object-cover object-top"
                  sizes="300px"
                  priority
                />
                {/* Badge +50 clientes */}
                <div
                  className="absolute top-4 right-4 rounded-xl px-4 py-3 text-center"
                  style={{ background: 'rgba(74,94,42,0.95)', backdropFilter: 'blur(8px)' }}
                >
                  <span
                    className="block text-[#F5D13A] leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 600 }}
                  >
                    +50
                  </span>
                  <span
                    className="block text-[#E0EBC8] text-[10px] tracking-[2px] uppercase mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    clientes · 5★
                  </span>
                </div>
              </div>

              {/* Badge NNA */}
              <div
                className="rounded-xl px-4 py-3 flex items-center gap-3"
                style={{ background: 'rgba(251,246,236,0.80)', backdropFilter: 'blur(12px)' }}
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">✍️</span>
                <div>
                  <p className="text-xs font-semibold text-[#4A5E2A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    NNA Certified
                  </p>
                  <p className="text-[11px] text-[#8A7A6A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Loan Signing Agent · Notary Public
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
          <div className="w-px h-8 animate-bounce bg-[#4A5E2A]" />
          <span className="text-[9px] tracking-[3px] uppercase text-[#4A5E2A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Scroll
          </span>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TRUST BAR — 5 credenciales
         ══════════════════════════════════════════ */}
      <section
        className="py-12 border-b border-[#E8DCC4]"
        style={{ background: '#FBF6EC' }}
        aria-label="Credenciales de confianza"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E8DCC4]">
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center px-5 py-2">
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span
                    className="leading-none text-[#4A5E2A]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 300 }}
                  >
                    {item.stat}
                  </span>
                  {item.unit && (
                    <span className="text-[#4A5E2A] text-sm ml-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item.unit}
                    </span>
                  )}
                </div>
                <p
                  className="text-[10px] font-semibold tracking-[2px] uppercase text-[#C4844A] mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[12px] leading-relaxed text-[#8A7A6A]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO — ¿Cómo te puedo ayudar?
         ══════════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-10" aria-label="Introducción a los servicios">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-7 h-px bg-[#C4844A]" aria-hidden="true" />
            <span className="text-[10px] font-medium tracking-[3px] uppercase text-[#C4844A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              ¿Cómo te puedo ayudar?
            </span>
            <span className="block w-7 h-px bg-[#C4844A]" aria-hidden="true" />
          </div>
          <p
            className="leading-relaxed text-[#2A1F0E]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, fontStyle: 'italic' }}
          >
            "Cada historia inmobiliaria es única y sé que dar el siguiente paso puede generar muchas
            dudas sobre el crédito, el financiamiento o los contratos. Por eso, no ofrezco soluciones
            generales: me tomo el tiempo de escuchar tu situación particular. Mi compromiso es darte
            la claridad que necesitas para avanzar con total seguridad."
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICIOS — 2 grupos (Propietarios + Compradores)
         ══════════════════════════════════════════ */}
      <section id="servicios" className="pb-24 px-6 lg:px-10" aria-label="Catálogo de servicios">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
          {serviceGroups.map((group) => (
            <div key={group.groupLabel}>
              {/* Group label */}
              <div className="flex items-center gap-4 mb-10">
                <span
                  className="block w-10 h-px"
                  style={{ background: group.groupColor }}
                  aria-hidden="true"
                />
                <h2
                  className="text-[11px] font-semibold tracking-[3px] uppercase"
                  style={{ color: group.groupColor, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {group.groupLabel}
                </h2>
                <span
                  className="flex-1 h-px"
                  style={{ background: group.groupColor, opacity: 0.2 }}
                  aria-hidden="true"
                />
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.services.map((svc) => (
                  <article
                    key={svc.id}
                    className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ background: group.groupBg, border: `1px solid ${group.groupColor}25` }}
                  >
                    <div className="h-1 w-full" style={{ background: group.groupColor }} />
                    <div className="flex flex-col flex-1 p-8 gap-5">
                      {/* Icon + EN label */}
                      <div className="flex items-center justify-between">
                        <span className="text-3xl" aria-hidden="true">{svc.icon}</span>
                        <span
                          className="text-[9px] font-medium tracking-[2px] uppercase px-3 py-1 rounded-full"
                          style={{
                            color: group.groupColor,
                            background: `${group.groupColor}15`,
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {svc.titleEn}
                        </span>
                      </div>

                      {/* Título */}
                      <h3
                        className="leading-tight text-[#2A1F0E]"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 400,
                          fontSize: 'clamp(26px, 3vw, 36px)',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {svc.title}
                      </h3>

                      {/* Headline */}
                      <p
                        className="text-sm font-medium leading-snug"
                        style={{ color: group.groupColor, fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {svc.headline}
                      </p>

                      {/* Descripción */}
                      <p
                        className="text-sm leading-relaxed text-[#5A4A2A] flex-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {svc.desc}
                      </p>

                      {/* Bullets */}
                      <ul className="flex flex-col gap-2">
                        {svc.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-sm text-[#5A4A2A]"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: group.groupColor }}
                              aria-hidden="true"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <a
                        href={svc.ctaHref}
                        target={svc.ctaHref.startsWith('http') ? '_blank' : undefined}
                        rel={svc.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 text-sm font-medium mt-1 transition-all duration-200 group-hover:gap-3"
                        style={{ color: group.groupColor, fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {svc.cta} →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          {/* ── Eje transversal D1 — Educación Financiera ── */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="block w-10 h-px bg-[#5A4A2A]" aria-hidden="true" />
              <h2
                className="text-[11px] font-semibold tracking-[3px] uppercase text-[#5A4A2A]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Eje transversal de crecimiento
              </h2>
              <span className="flex-1 h-px bg-[#5A4A2A] opacity-20" aria-hidden="true" />
            </div>

            <article
              className="rounded-2xl overflow-hidden"
              style={{ background: '#F5EDD8', border: '1px solid #E8DCC425' }}
            >
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #4A5E2A, #C4844A)' }} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Texto */}
                <div className="p-10 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">📊</span>
                    <span
                      className="text-[9px] font-medium tracking-[2px] uppercase px-3 py-1 rounded-full text-[#5A4A2A] bg-[#5A4A2A]/10"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Financial Coaching
                    </span>
                  </div>

                  <h3
                    className="leading-tight text-[#2A1F0E]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 'clamp(26px,3vw,38px)' }}
                  >
                    Asesoría, Crédito y{' '}
                    <em className="italic text-[#4A5E2A]">Educación Financiera</em>
                  </h3>

                  <p
                    className="text-sm font-medium text-[#C4844A]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {financialService.headline}
                  </p>

                  <p
                    className="text-sm leading-relaxed text-[#5A4A2A]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {financialService.desc}
                  </p>

                  <a
                    href="https://wa.me/14015551234?text=Hola%20Yina%2C%20quiero%20asesor%C3%ADa%20sobre%20cr%C3%A9dito%20e%20hipoteca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#4A5E2A] transition-all duration-200 hover:gap-3 w-fit"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Consulta Gratis →
                  </a>
                </div>

                {/* Topics */}
                <div
                  className="p-10 flex flex-col justify-center gap-4"
                  style={{ background: '#E0EBC8' }}
                >
                  <p
                    className="text-[10px] font-semibold tracking-[2.5px] uppercase text-[#4A5E2A] mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Temas frecuentes abordados
                  </p>
                  {financialService.topics.map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.5)' }}
                    >
                      <span className="mt-0.5 text-[#4A5E2A]" aria-hidden="true">✓</span>
                      <p
                        className="text-sm leading-snug text-[#2A1F0E]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {t}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          POR QUÉ TRABAJAR CON YINA
         ══════════════════════════════════════════ */}
      <section
        className="py-24 px-6 lg:px-10"
        style={{ background: '#4A5E2A' }}
        aria-label="Por qué trabajar con Yina Tiburcio"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14 max-w-[560px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-px bg-[#F5D13A]" aria-hidden="true" />
              <span
                className="text-[10px] font-medium tracking-[3px] uppercase text-[#F5D13A]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Por qué elegirme
              </span>
            </div>
            <h2
              className="leading-none text-[#FBF6EC]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(36px,4vw,54px)' }}
            >
              Por qué trabajar{' '}
              <em className="italic text-[#F5D13A]">con Yina</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyYina.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 p-7 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                <h3
                  className="text-[#F5D13A] font-medium text-base leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-[#A8BF78]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL
         ══════════════════════════════════════════ */}
      <section
        className="py-24 px-6 lg:px-10 text-center"
        style={{ background: '#F5D13A' }}
        aria-label="Llamada a la acción final"
      >
        <div className="max-w-[680px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-[#4A5E2A]" aria-hidden="true" />
            <span
              className="text-[10px] font-medium tracking-[3px] uppercase text-[#4A5E2A]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ¿Empezamos?
            </span>
            <span className="block w-7 h-px bg-[#4A5E2A]" aria-hidden="true" />
          </div>

          <h2
            className="leading-[1.05] text-[#2A1F0E] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(38px,5vw,62px)' }}
          >
            ¿Empezamos a diseñar{' '}
            <em className="italic text-[#4A5E2A]">tu próximo paso?</em>
          </h2>

          <p
            className="text-[15px] leading-relaxed text-[#5A4A2A] mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            El mercado de bienes raíces en Rhode Island se mueve rápido, pero con la guía correcta
            el proceso es simple y transparente. Conversemos sobre tu situación sin compromisos.
          </p>

          <p
            className="text-sm text-[#5A4A2A] mb-10 italic"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Atención bilingüe dedicada para familias y propietarios en Rhode Island, Massachusetts y Connecticut.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/14015551234?text=Hola%20Yina%2C%20quiero%20una%20consulta%20gratuita%20sin%20compromisos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-[#FBF6EC] font-medium transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
              style={{ background: '#4A5E2A', fontFamily: "'DM Sans', sans-serif", fontSize: '15px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consulta Gratis
            </a>
            <Link
              href="/propiedades"
              className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 font-medium border transition-all duration-200 hover:bg-[#4A5E2A]/10"
              style={{ borderColor: '#4A5E2A', color: '#4A5E2A', fontFamily: "'DM Sans', sans-serif", fontSize: '15px' }}
            >
              Ver Propiedades →
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
