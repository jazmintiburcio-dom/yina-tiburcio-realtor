'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { useIsMobile } from '@/lib/useIsMobile'

/* ─── BILINGUAL CONTENT ─────────────────────────────────────────── */
const PAGE = {
  es: {
    hero: {
      eyebrow: 'Contacto',
      h1: 'Hablemos sobre tus objetivos inmobiliarios',
      body: 'Comprar, vender o alquilar una propiedad es una decisión importante. Estoy aquí para responder tus preguntas y ayudarte a dar el siguiente paso con confianza.',
      trust: [
        'Atención en Español e Inglés',
        'Realtor® — Real Broker',
        'Notary Public',
        'NNA Certified Loan Signing Agent',
      ],
    },
    info: {
      eyebrow: 'Información de contacto',
      phone: { label: 'Teléfono', value: '(401) 602-5102' },
      email: { label: 'Correo electrónico', value: 'yinatiburciorealtor@gmail.com' },
      office: { label: 'Oficina', value: '1738 Broad Street, Cranston, Rhode Island' },
      hours: { label: 'Horario', value: 'Lunes a Viernes · 9:00 AM – 6:00 PM' },
      social: 'Redes Sociales',
      waTitle: '¿Prefieres escribir por WhatsApp?',
      waBody: 'Estoy disponible para responder consultas generales y ayudarte a encontrar la mejor manera de avanzar según tu situación.',
      waBtn: 'Escribir por WhatsApp',
    },
    form: {
      title: 'Hablemos',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      service: '¿Cómo puedo ayudarte?',
      servicePlaceholder: 'Selecciona una opción',
      serviceOptions: [
        'Comprar una vivienda',
        'Alquilar una vivienda',
        'Vender una propiedad',
        'Alquilar una propiedad',
        'Consulta general',
      ],
      message: 'Mensaje (opcional)',
      messagePlaceholder: 'Cuéntame un poco sobre tu situación...',
      submit: 'Enviar Consulta',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Te contactaré pronto.',
      trust: 'Gratis · Sin compromiso · En español o English',
    },
    cta2: {
      eyebrow: '¿No sabes por dónde empezar?',
      h2: 'No necesitas tener todas las',
      h2em: 'respuestas antes de comunicarte.',
      body: 'Muchas personas nos contactan porque tienen preguntas sobre crédito, financiamiento, programas para compradores primerizos o simplemente quieren entender cuáles son sus opciones.',
      body2: 'Estoy aquí para ayudarte.',
      btn: 'Consulta Gratis',
    },
    map: {
      eyebrow: 'Ubicación',
      title: 'Nuestra oficina',
      address: '1738 Broad Street, Cranston, RI',
    },
    ctaFinal: {
      eyebrow: '¿Lista para dar el siguiente paso?',
      h2: 'Tu próximo paso comienza con',
      h2em: 'una conversación',
      body: 'Ya sea que estés buscando una vivienda, quieras vender una propiedad o necesites orientación, estaré encantada de ayudarte.',
      btn: 'Contáctame',
    },
  },
  en: {
    hero: {
      eyebrow: 'Contact',
      h1: "Let's talk about your real estate goals",
      body: 'Buying, selling, or renting a property is a major decision. I\'m here to answer your questions and help you take the next step with confidence.',
      trust: [
        'Service in Spanish and English',
        'Realtor® — Real Broker',
        'Notary Public',
        'NNA Certified Loan Signing Agent',
      ],
    },
    info: {
      eyebrow: 'Contact information',
      phone: { label: 'Phone', value: '(401) 602-5102' },
      email: { label: 'Email', value: 'yinatiburciorealtor@gmail.com' },
      office: { label: 'Office', value: '1738 Broad Street, Cranston, Rhode Island' },
      hours: { label: 'Hours', value: 'Monday to Friday · 9:00 AM – 6:00 PM' },
      social: 'Social Media',
      waTitle: 'Prefer to message on WhatsApp?',
      waBody: "I'm available to answer general questions and help you find the best way to move forward based on your situation.",
      waBtn: 'Message on WhatsApp',
    },
    form: {
      title: "Let's Talk",
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      service: 'How can I help you?',
      servicePlaceholder: 'Select an option',
      serviceOptions: [
        'Buy a home',
        'Rent a home',
        'Sell a property',
        'List a rental property',
        'General inquiry',
      ],
      message: 'Message (optional)',
      messagePlaceholder: 'Tell me a little about your situation...',
      submit: 'Send Inquiry',
      sending: 'Sending...',
      success: "Message sent! I'll be in touch soon.",
      trust: 'Free · No commitment · In Spanish or English',
    },
    cta2: {
      eyebrow: "Not sure where to start?",
      h2: "You don't need to have all the",
      h2em: 'answers before reaching out.',
      body: 'Many people contact us because they have questions about credit, financing, first-time buyer programs, or simply want to understand their options.',
      body2: "I'm here to help you.",
      btn: 'Free Consultation',
    },
    map: {
      eyebrow: 'Location',
      title: 'Our office',
      address: '1738 Broad Street, Cranston, RI',
    },
    ctaFinal: {
      eyebrow: 'Ready to take the next step?',
      h2: 'Your next step begins with',
      h2em: 'a conversation',
      body: "Whether you're looking for a home, want to sell a property, or need guidance, I'll be happy to help you.",
      btn: 'Contact Me',
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

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */
export default function Contacto() {
  const { locale } = useI18n()
  const c = PAGE[locale]
  const isMobile = useIsMobile()

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const waConsulta = `https://wa.me/${WA}?text=${encodeURIComponent(
    locale === 'en'
      ? 'Hi Yina, I would like a free consultation.'
      : 'Hola Yina, quisiera una consulta gratuita.'
  )}`

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    if (!form.name || !form.email) return
    setStatus('sending')
    const msg = locale === 'en'
      ? `Hi Yina! My name is ${form.name}. I'm interested in: ${form.service || 'General inquiry'}. ${form.message ? `Message: ${form.message}` : ''} My contact: ${form.email}${form.phone ? ` / ${form.phone}` : ''}`
      : `¡Hola Yina! Me llamo ${form.name}. Me interesa: ${form.service || 'Consulta general'}. ${form.message ? `Mensaje: ${form.message}` : ''} Mi contacto: ${form.email}${form.phone ? ` / ${form.phone}` : ''}`
    setTimeout(() => {
      setStatus('sent')
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank')
    }, 600)
  }

  const mapQuery = encodeURIComponent('1738 Broad Street, Cranston, Rhode Island')

  return (
    <>
      {/* ── HERO — Split con foto Yina ───────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: isMobile ? 'auto' : '90vh',
          marginTop: 'calc(-1 * var(--nav-h))',
          paddingTop: 'var(--nav-h)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gridTemplateRows: isMobile ? 'auto auto' : undefined,
        }}
      >
        {/* Columna izquierda — Ceiba oscuro + copy */}
        <div
          style={{
            background: 'var(--ceiba-dark)',
            display: 'flex',
            alignItems: 'center',
            padding: 'clamp(48px,7vw,80px) clamp(8px,1vw,16px) clamp(48px,7vw,80px) clamp(80px,12vw,160px)',
            position: 'relative',
            zIndex: 1,
            order: isMobile ? 2 : 1,
          }}
        >
          {/* Línea Sol decorativa izquierda */}
          <div
            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: 'linear-gradient(to bottom, #F5D13A, rgba(245,209,58,0.2))' }}
            aria-hidden="true"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 480 }}>
            {/* Eyebrow */}
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'block', width: 28, height: 1, background: '#F5D13A' }} aria-hidden="true" />
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#F5D13A', fontFamily: 'var(--sans)' }}>
                {c.hero.eyebrow}
              </span>
            </div>

            {/* H1 */}
            <h1
              className="reveal d1"
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 300,
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 1.05,
                color: '#FBF6EC',
                margin: 0,
              }}
            >
              {c.hero.h1}
            </h1>

            {/* Subtítulo */}
            <p
              className="reveal d2"
              style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(251,246,236,0.8)', fontFamily: 'var(--sans)', margin: 0 }}
            >
              {c.hero.body}
            </p>

            {/* Mini trust bar */}
            <ul className="reveal d3" style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0, listStyle: 'none' }}>
              {c.hero.trust.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(251,246,236,0.85)', fontFamily: 'var(--sans)' }}>
                  <CheckCircle size={15} color="#F5D13A" strokeWidth={2} style={{ flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna derecha — Foto Yina completa */}
        <div style={{ background: 'var(--ceiba-dark)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', padding: isMobile ? 'clamp(24px,5vw,40px) clamp(32px,5vw,64px) 0' : 0, order: isMobile ? 1 : 2 }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 460, aspectRatio: '3/4', marginRight: isMobile ? 0 : 'clamp(32px,4vw,64px)', marginLeft: 0 }}>
            <Image
              src="/images/yina-contact.webp"
              alt="Yina Tiburcio — Realtor disponible para ayudarte"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
              priority
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* ── INFO + FORMULARIO ────────────────────────────── */}
      <section style={{ background: 'var(--crema)', padding: 'clamp(56px,7vw,88px) clamp(24px,5vw,40px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>

          {/* Columna izquierda — Info de contacto */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span style={{ display: 'block', width: 28, height: 1, background: '#C4844A' }} aria-hidden="true" />
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#C4844A', fontFamily: 'var(--sans)' }}>
                  {c.info.eyebrow}
                </span>
              </div>

              {/* Cards de contacto */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: <Phone size={18} color="#4A5E2A" strokeWidth={1.5} />, label: c.info.phone.label, value: c.info.phone.value, href: 'tel:+14016025102' },
                  { icon: <Mail size={18} color="#4A5E2A" strokeWidth={1.5} />, label: c.info.email.label, value: c.info.email.value, href: 'mailto:yinatiburciorealtor@gmail.com' },
                  { icon: <MapPin size={18} color="#4A5E2A" strokeWidth={1.5} />, label: c.info.office.label, value: c.info.office.value, href: `https://maps.google.com/?q=${mapQuery}` },
                  { icon: <Clock size={18} color="#4A5E2A" strokeWidth={1.5} />, label: c.info.hours.label, value: c.info.hours.value, href: null },
                ].map(item => (
                  <div
                    key={item.label}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 18px', borderRadius: 12, background: '#F5EDD8', border: '1px solid var(--arena)', transition: 'transform 0.2s' }}
                    onMouseEnter={e => { if (item.href) (e.currentTarget as HTMLDivElement).style.transform = 'translateX(4px)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = '' }}
                  >
                    <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                    <div>
                      <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#8A7A6A', fontFamily: 'var(--sans)', margin: '0 0 3px' }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: 14, color: '#2A1F0E', fontFamily: 'var(--sans)', textDecoration: 'none', fontWeight: 500 }}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontSize: 14, color: '#2A1F0E', fontFamily: 'var(--sans)', margin: 0, fontWeight: 500 }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#8A7A6A', fontFamily: 'var(--sans)', marginBottom: 12 }}>{c.info.social}</p>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { href: 'https://instagram.com/yinatiburcio', label: 'Instagram', icon: (
                    <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  )},
                  { href: 'https://facebook.com/yinatiburciorealtor', label: 'Facebook', icon: (
                    <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }}>
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  )},
                  { href: 'https://tiktok.com/@tiayina', label: 'TikTok', icon: (
                    <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'currentColor' }}>
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                    </svg>
                  )},
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{ width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid var(--arena)', color: '#4A5E2A', transition: 'all 0.2s', textDecoration: 'none' }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#4A5E2A'; el.style.color = '#FBF6EC'; el.style.borderColor = '#4A5E2A' }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = '#4A5E2A'; el.style.borderColor = 'var(--arena)' }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp secundario */}
            <div style={{ borderRadius: 16, padding: '20px 24px', background: '#F0F5E8', border: '1px solid #A8BF78' }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#2A1F0E', fontFamily: 'var(--sans)', margin: '0 0 8px' }}>{c.info.waTitle}</p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#5A4A2A', fontFamily: 'var(--sans)', margin: '0 0 16px' }}>{c.info.waBody}</p>
              <a
                href={waConsulta}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '11px 20px', borderRadius: 24, textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 24px rgba(37,211,102,0.4)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '' }}
              >
                <WaIcon size={15} /> {c.info.waBtn}
              </a>
            </div>
          </div>

          {/* Columna derecha — Formulario */}
          <div
            className="reveal d2"
            style={{ background: '#fff', borderRadius: 20, padding: 'clamp(28px,4vw,44px)', boxShadow: '0 8px 48px rgba(42,31,14,0.08)', border: '1px solid var(--arena)' }}
          >
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(28px,3vw,40px)', color: '#2A1F0E', margin: '0 0 28px' }}>
              {c.form.title}
            </h2>

            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '48px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <CheckCircle size={48} color="#4A5E2A" strokeWidth={1.5} />
                <p style={{ fontSize: 18, fontFamily: 'var(--serif)', color: '#2A1F0E' }}>{c.form.success}</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Nombre + Teléfono */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8A7A6A', fontFamily: 'var(--sans)', marginBottom: 6 }}>{c.form.name}</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ana García"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid var(--arena)', fontSize: 14, fontFamily: 'var(--sans)', background: '#FAFAFA', color: '#2A1F0E', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                      onFocus={e => { (e.target as HTMLInputElement).style.borderColor = '#4A5E2A' }}
                      onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--arena)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8A7A6A', fontFamily: 'var(--sans)', marginBottom: 6 }}>{c.form.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(401) 555-0000"
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid var(--arena)', fontSize: 14, fontFamily: 'var(--sans)', background: '#FAFAFA', color: '#2A1F0E', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                      onFocus={e => { (e.target as HTMLInputElement).style.borderColor = '#4A5E2A' }}
                      onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--arena)' }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8A7A6A', fontFamily: 'var(--sans)', marginBottom: 6 }}>{c.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ana@email.com"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid var(--arena)', fontSize: 14, fontFamily: 'var(--sans)', background: '#FAFAFA', color: '#2A1F0E', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = '#4A5E2A' }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--arena)' }}
                  />
                </div>

                {/* Servicio */}
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8A7A6A', fontFamily: 'var(--sans)', marginBottom: 6 }}>{c.form.service}</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid var(--arena)', fontSize: 14, fontFamily: 'var(--sans)', background: '#FAFAFA', color: form.service ? '#2A1F0E' : '#8A7A6A', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', appearance: 'none', cursor: 'pointer' }}
                    onFocus={e => { (e.target as HTMLSelectElement).style.borderColor = '#4A5E2A' }}
                    onBlur={e => { (e.target as HTMLSelectElement).style.borderColor = 'var(--arena)' }}
                  >
                    <option value="" disabled>{c.form.servicePlaceholder}</option>
                    {c.form.serviceOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8A7A6A', fontFamily: 'var(--sans)', marginBottom: 6 }}>{c.form.message}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={c.form.messagePlaceholder}
                    rows={4}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid var(--arena)', fontSize: 14, fontFamily: 'var(--sans)', background: '#FAFAFA', color: '#2A1F0E', outline: 'none', boxSizing: 'border-box', resize: 'vertical', transition: 'border-color 0.2s' }}
                    onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = '#4A5E2A' }}
                    onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--arena)' }}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    width: '100%', padding: '15px', borderRadius: 10, border: 'none',
                    background: status === 'sending' ? '#6A8040' : '#4A5E2A',
                    color: '#FBF6EC', fontSize: 12, fontWeight: 600, letterSpacing: '1.5px',
                    textTransform: 'uppercase', fontFamily: 'var(--sans)', cursor: status === 'sending' ? 'wait' : 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { if (status !== 'sending') { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 10px 32px rgba(74,94,42,0.4)' } }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '' }}
                >
                  <Send size={15} strokeWidth={2} />
                  {status === 'sending' ? c.form.sending : c.form.submit}
                </button>

                {/* Trust */}
                <p style={{ fontSize: 11, color: '#8A7A6A', textAlign: 'center', fontFamily: 'var(--sans)', margin: 0 }}>
                  {c.form.trust}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── ¿NO SABES POR DÓNDE EMPEZAR? ────────────────── */}
      <section style={{ background: 'var(--ceiba)', padding: 'clamp(56px,7vw,80px) clamp(24px,5vw,40px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#F5D13A' }} aria-hidden="true" />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#F5D13A', fontFamily: 'var(--sans)' }}>{c.cta2.eyebrow}</span>
            <span style={{ display: 'block', width: 28, height: 1, background: '#F5D13A' }} aria-hidden="true" />
          </div>

          <h2
            className="reveal d2"
            style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(30px,4vw,50px)', color: '#FBF6EC', lineHeight: 1.1, margin: '0 0 20px' }}
          >
            {c.cta2.h2}{' '}
            <em style={{ color: '#F5D13A', fontStyle: 'italic' }}>{c.cta2.h2em}</em>
          </h2>

          <p className="reveal d3" style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(251,246,236,0.8)', fontFamily: 'var(--sans)', marginBottom: 12 }}>
            {c.cta2.body}
          </p>
          <p className="reveal d3" style={{ fontSize: 16, fontWeight: 600, color: '#F5D13A', fontFamily: 'var(--sans)', marginBottom: 32 }}>
            {c.cta2.body2}
          </p>

          <div className="reveal d4">
            <a
              href={waConsulta}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#F5D13A', color: '#2A1F0E', fontSize: 12, fontWeight: 700, letterSpacing: '1px', padding: '16px 36px', borderRadius: 32, textDecoration: 'none', boxShadow: '0 8px 32px rgba(245,209,58,0.3)', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 14px 40px rgba(245,209,58,0.45)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 8px 32px rgba(245,209,58,0.3)' }}
            >
              <WaIcon size={16} /> {c.cta2.btn}
            </a>
          </div>
        </div>
      </section>

      {/* ── MAPA ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--crema)', padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,40px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: '#C4844A' }} aria-hidden="true" />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#C4844A', fontFamily: 'var(--sans)' }}>{c.map.eyebrow}</span>
          </div>
          <h2 className="reveal d2" style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(24px,3vw,38px)', color: '#2A1F0E', margin: '0 0 24px' }}>
            {c.map.title}
          </h2>
          <div className="reveal d3" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--arena)', boxShadow: '0 8px 32px rgba(42,31,14,0.08)', aspectRatio: '21/7' }}>
            <iframe
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed&z=15`}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Oficina de Yina Tiburcio — ${c.map.address}`}
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal d4"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, fontSize: 12, fontWeight: 500, color: '#4A5E2A', fontFamily: 'var(--sans)', textDecoration: 'none' }}
          >
            <MapPin size={13} strokeWidth={1.5} /> {c.map.address} →
          </a>
        </div>
      </section>

      {/* ── CTA FINAL — fondo lino (distinto al footer ceiba-dark y a la sección cta2 ceiba) ─ */}
      <section style={{ background: 'var(--lino)', padding: 'clamp(64px,8vw,96px) clamp(24px,5vw,40px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--canela)' }} aria-hidden="true" />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--canela)', fontFamily: 'var(--sans)' }}>{c.ctaFinal.eyebrow}</span>
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--canela)' }} aria-hidden="true" />
          </div>

          <h2
            className="reveal d2"
            style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(32px,4vw,52px)', color: 'var(--tierra)', lineHeight: 1.05, margin: '0 0 20px' }}
          >
            {c.ctaFinal.h2}{' '}
            <em style={{ color: 'var(--ceiba)', fontStyle: 'italic' }}>{c.ctaFinal.h2em}</em>
          </h2>

          <p className="reveal d3" style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--gris)', fontFamily: 'var(--sans)', marginBottom: 36 }}>
            {c.ctaFinal.body}
          </p>

          <div className="reveal d4">
            <a
              href="#"
              onClick={e => { e.preventDefault(); document.querySelector('input[name="name"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--ceiba)', color: '#FBF6EC', fontSize: 12, fontWeight: 700, letterSpacing: '1px', padding: '16px 40px', borderRadius: 32, textDecoration: 'none', boxShadow: '0 8px 32px rgba(74,94,42,0.2)', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 14px 40px rgba(74,94,42,0.35)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 8px 32px rgba(74,94,42,0.2)' }}
            >
              {c.ctaFinal.btn} ↑
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
