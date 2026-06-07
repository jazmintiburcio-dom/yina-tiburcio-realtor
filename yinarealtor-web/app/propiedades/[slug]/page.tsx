'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPropertyBySlug, getRelatedProperties } from '@/lib/properties'
import { useI18n } from '@/lib/i18n'
import Gallery from '@/components/Gallery'
import { Bed, Bath, Car, Home as HomeIcon, ShieldCheck, GraduationCap, TreePine, ShoppingBag, UtensilsCrossed, HeartPulse, Bus, Heart, MapPin, CheckCircle2 } from 'lucide-react'

const WA = '14016025102'

const ui = {
  es: {
    breadcrumb_home: 'Inicio',
    breadcrumb_props: 'Propiedades',
    per_month: '/mes',
    beds: 'hab.',
    baths_one: 'baño',
    baths_many: 'baños',
    parking: 'parqueos',
    no_parking: 'sin pk.',
    laundry: 'Laundry incluido',
    cta_wa: 'Me interesa esta propiedad',
    cta_call: 'Llamar a Yina',
    trust_badge: '<strong>Asesoría bilingüe incluida.</strong> Yina te explica cada documento en español antes de firmar. Sin sorpresas.',
    section_desc: 'Descripción',
    section_ideal: 'Ideal para',
    section_features: 'Características',
    section_highlights: 'Property Highlights',
    section_nearby: 'Lugares cercanos',
    section_map: 'Ubicación',
    map_label: 'Ver en Google Maps →',
    cta_banner_eyebrow: '¿Te interesa?',
    cta_banner_h2_pre: 'Agenda una visita a',
    cta_banner_sub: '¿Te gustaría conocer esta propiedad? Yina te responde en español. Sin compromisos.',
    cta_banner_btn: 'Escribir a Yina por WhatsApp',
    related_eyebrow: 'Seguir explorando',
    related_h2_pre: 'Otras propiedades',
    related_h2_em: 'disponibles',
    related_see_all: 'Ver todas →',
    related_see_all_mobile: 'Ver todas las propiedades →',
    btn_ver: 'Ver propiedad →',
    btn_wa: 'WhatsApp',
    for_rent: 'En Renta',
    for_sale: 'En Venta',
    floor_label: 'varios niveles',
  },
  en: {
    breadcrumb_home: 'Home',
    breadcrumb_props: 'Properties',
    per_month: '/mo',
    beds: 'bd.',
    baths_one: 'bath',
    baths_many: 'baths',
    parking: 'parking',
    no_parking: 'no pk.',
    laundry: 'In-unit laundry',
    cta_wa: "I'm interested in this property",
    cta_call: 'Call Yina',
    trust_badge: '<strong>Bilingual guidance included.</strong> Yina explains every document in your language before signing. No surprises.',
    section_desc: 'Description',
    section_ideal: 'Ideal for',
    section_features: 'Features',
    section_highlights: 'Property Highlights',
    section_nearby: 'Nearby places',
    section_map: 'Location',
    map_label: 'View on Google Maps →',
    cta_banner_eyebrow: 'Interested?',
    cta_banner_h2_pre: 'Schedule a visit to',
    cta_banner_sub: 'Would you like to see this property? Yina responds in your language. No commitment.',
    cta_banner_btn: 'Message Yina on WhatsApp',
    related_eyebrow: 'Keep exploring',
    related_h2_pre: 'Other properties',
    related_h2_em: 'available',
    related_see_all: 'See all →',
    related_see_all_mobile: 'See all properties →',
    btn_ver: 'View property →',
    btn_wa: 'WhatsApp',
    for_rent: 'For Rent',
    for_sale: 'For Sale',
    floor_label: 'multiple floors',
  },
}

const categoryIcon: Record<string, React.ElementType> = {
  'Educación': GraduationCap, 'Education': GraduationCap,
  'Recreación': TreePine, 'Recreation': TreePine,
  'Parques y Recreación': TreePine, 'Parks & Recreation': TreePine,
  'Compras': ShoppingBag, 'Shopping': ShoppingBag,
  'Restaurantes': UtensilsCrossed, 'Restaurants & Cafés': UtensilsCrossed, 'Restaurantes y Cafés': UtensilsCrossed,
  'Salud': HeartPulse, 'Health': HeartPulse,
  'Transporte': Bus, 'Transportation': Bus,
  'Comunidad Latina': Heart, 'Latino Community': Heart,
}

export default function PropiedadPage({ params }: { params: { slug: string } }) {
  const prop = getPropertyBySlug(params.slug)
  if (!prop) notFound()

  const { locale } = useI18n()
  const t = ui[locale]
  const isEN = locale === 'en'

  const related = getRelatedProperties(prop)
  const isRenta = prop.type === 'renta'
  const badgeLabel = isRenta ? t.for_rent : t.for_sale

  // Contenido bilingüe
  const desc = isEN ? prop.descEN : prop.desc
  const descLong = isEN ? prop.descLongEN : prop.descLong
  const idealFor = isEN ? prop.idealForEN : prop.idealFor
  const features = isEN ? prop.featuresEN : prop.features
  const highlights = isEN ? prop.highlightsEN : prop.highlights
  const nearbyPlaces = isEN ? prop.nearbyPlacesEN : prop.nearbyPlaces
  const available = isEN ? prop.availableEN : prop.available
  const propType = isEN ? prop.propTypeEN : prop.propType
  const floor = prop.floor ?? t.floor_label

  const waMsg = encodeURIComponent(
    isEN
      ? `Hi Yina, I'm interested in the property at ${prop.address}, ${prop.city} ${prop.zip}. Is it available?`
      : `Hola Yina, me interesa la propiedad en ${prop.address}, ${prop.city} ${prop.zip}. ¿Está disponible?`
  )
  const waLink = `https://wa.me/${WA}?text=${waMsg}`

  return (
    <main className="bg-[#FBF6EC] overflow-x-hidden">

      {/* BREADCRUMB */}
      <nav className="border-b border-[#E8DCC4] bg-[#FBF6EC]" aria-label="Breadcrumb" style={{ paddingTop: 'var(--nav-h, 80px)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: t.breadcrumb_home, href: '/' },
            { label: t.breadcrumb_props, href: '/propiedades' },
            { label: prop.address, href: null },
          ].map((crumb, i, arr) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {crumb.href ? (
                <Link href={crumb.href} className="text-[11px] text-[#8A7A6A] hover:text-[#4A5E2A] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[11px] text-[#4A5E2A] font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{crumb.label}</span>
              )}
              {i < arr.length - 1 && <span className="text-[#D4CEC4] text-[10px]" aria-hidden="true">/</span>}
            </span>
          ))}
        </div>
      </nav>

      {/* FOTO PRINCIPAL + PANEL */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

          {/* Galería carrusel */}
          <div className="flex flex-col gap-3">
            {/* Badges sobre el carrusel */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[9px] font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-md" style={{ background: isRenta ? '#F0F5E8' : '#FEF8D0', color: isRenta ? '#4A5E2A' : '#5A4A2A', fontFamily: "'DM Sans', sans-serif" }}>{badgeLabel}</span>
              <span className="text-[9px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-md" style={{ background: 'rgba(74,94,42,0.92)', color: '#F5D13A', fontFamily: "'DM Sans', sans-serif" }}>{available}</span>
              <span className="text-[10px] font-medium px-3 py-1.5 rounded-md" style={{ background: '#F5EDD8', color: '#5A4A2A', fontFamily: "'DM Sans', sans-serif" }}>{propType} · {floor}</span>
            </div>
            <Gallery src={prop.src} gallery={prop.gallery} address={prop.address} />
          </div>

          {/* Panel lateral */}
          <aside className="lg:sticky lg:top-[calc(var(--nav-h,80px)+16px)] flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-[#E8DCC4] bg-white">
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[#4A5E2A] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 600 }}>{prop.price}</span>
                    {isRenta && <span className="text-[#8A7A6A] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.per_month}</span>}
                  </div>
                  <p className="text-[#2A1F0E] font-medium mt-1 text-[15px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{prop.address}</p>
                  <p className="text-[#8A7A6A] text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{prop.city}, {prop.zip}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-[#E8DCC4]">
                  {[
                    { Icon: Bed, value: `${prop.beds}`, label: t.beds },
                    { Icon: Bath, value: `${prop.baths}`, label: prop.baths === 1 ? t.baths_one : t.baths_many },
                    { Icon: Car, value: prop.parking ? `${prop.parking}` : '—', label: prop.parking ? t.parking : t.no_parking },
                  ].map(s => (
                    <div key={s.label} className="text-center flex flex-col items-center gap-1">
                      <s.Icon size={18} color="#C4844A" strokeWidth={1.5} aria-hidden="true" />
                      <p className="text-[#2A1F0E] font-semibold text-base leading-none" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.value}</p>
                      <p className="text-[#8A7A6A] text-[10px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {prop.laundry && <span className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full font-medium" style={{ background: '#F0F5E8', color: '#4A5E2A', fontFamily: "'DM Sans', sans-serif" }}><CheckCircle2 size={11} strokeWidth={2} />{t.laundry}</span>}
                  {prop.spec && <span className="text-[10px] px-2.5 py-1 rounded-full font-medium" style={{ background: '#FEF8D0', color: '#5A4A2A', fontFamily: "'DM Sans', sans-serif" }}>✦ {isEN ? prop.specEN : prop.spec}</span>}
                </div>

                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 w-full rounded-full py-3.5 text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md" style={{ background: '#25D366', fontFamily: "'DM Sans', sans-serif" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {t.cta_wa}
                </a>

                <a href="tel:+14016025102" className="flex items-center justify-center gap-2 w-full rounded-full py-3 text-sm font-medium border transition-all duration-200 hover:bg-[#4A5E2A]/5" style={{ borderColor: '#4A5E2A', color: '#4A5E2A', fontFamily: "'DM Sans', sans-serif" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                  {t.cta_call}
                </a>
              </div>

              <div className="px-6 py-4 flex items-center gap-3 border-t border-[#E8DCC4] bg-[#FBF6EC]">
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-[#FBF6EC] text-sm font-bold" style={{ background: '#4A5E2A' }} aria-hidden="true">YT</div>
                <div>
                  <p className="text-xs font-semibold text-[#2A1F0E]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Yina Tiburcio</p>
                  <p className="text-[10px] text-[#8A7A6A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Realtor® · Real Broker · Rhode Island</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl px-4 py-3 flex items-start gap-3" style={{ background: '#F0F5E8', border: '1px solid #A8BF78' }}>
              <ShieldCheck size={18} color="#4A5E2A" strokeWidth={1.5} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[11px] leading-relaxed text-[#4A5E2A]" style={{ fontFamily: "'DM Sans', sans-serif" }} dangerouslySetInnerHTML={{ __html: t.trust_badge }} />
            </div>
          </aside>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
          <div className="flex flex-col gap-10">

            {/* Descripción */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-px bg-[#C4844A]" aria-hidden="true" />
                <h2 className="text-[10px] font-semibold tracking-[3px] uppercase text-[#C4844A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.section_desc}</h2>
              </div>
              <p className="leading-relaxed text-[#5A4A2A] text-[15px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{descLong}</p>
            </div>

            {/* Ideal para */}
            <div className="rounded-2xl p-6" style={{ background: '#F0F5E8', border: '1px solid #A8BF78' }}>
              <div className="flex items-center gap-3 mb-3">
                <HomeIcon size={17} color="#4A5E2A" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-[10px] font-semibold tracking-[3px] uppercase text-[#4A5E2A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.section_ideal}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#2A1F0E]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{idealFor}</p>
            </div>

            {/* Características */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-[#C4844A]" aria-hidden="true" />
                <h2 className="text-[10px] font-semibold tracking-[3px] uppercase text-[#C4844A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.section_features}</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-3 py-3 px-4 rounded-xl" style={{ background: '#F5EDD8', border: '1px solid #E8DCC4' }}>
                    <span className="text-[#4A5E2A] font-bold text-sm flex-shrink-0" aria-hidden="true">✓</span>
                    <span className="text-sm text-[#2A1F0E]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-[#C4844A]" aria-hidden="true" />
                <h2 className="text-[10px] font-semibold tracking-[3px] uppercase text-[#C4844A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.section_highlights}</h2>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.map(h => (
                  <div key={h.label} className="flex items-start justify-between gap-4 px-4 py-3 rounded-xl" style={{ background: '#F0F5E8' }}>
                    <dt className="text-[11px] font-semibold text-[#6A8040] flex-shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>{h.label}</dt>
                    <dd className="text-[11px] text-[#2A1F0E] text-right" style={{ fontFamily: "'DM Sans', sans-serif" }}>{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Lugares cercanos */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-[#C4844A]" aria-hidden="true" />
                <h2 className="text-[10px] font-semibold tracking-[3px] uppercase text-[#C4844A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.section_nearby}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nearbyPlaces.map(place => (
                  <div key={place.category} className="rounded-xl p-4" style={{ background: '#FBF6EC', border: '1px solid #E8DCC4' }}>
                    <p className="flex items-center gap-2 text-[11px] font-semibold text-[#4A5E2A] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {(() => { const Icon = categoryIcon[place.category] ?? MapPin; return <Icon size={13} color="#4A5E2A" strokeWidth={1.5} aria-hidden="true" /> })()}
                      {place.category}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {place.items.map(item => (
                        <li key={item} className="text-[12px] text-[#5A4A2A] flex items-start gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          <span className="text-[#C4844A] flex-shrink-0 mt-0.5" aria-hidden="true">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </section>

      {/* MAPA DE UBICACIÓN */}
      <section className="px-6 lg:px-10 py-14" style={{ background: '#FBF6EC' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-[#C4844A]" aria-hidden="true" />
            <h2 className="text-[10px] font-semibold tracking-[3px] uppercase text-[#C4844A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.section_map}</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#E8DCC4] shadow-sm">
            <iframe
              title={`Ubicación de ${prop.address}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${prop.address}, ${prop.city}, ${prop.zip}`)}&output=embed&hl=es&z=16`}
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="flex items-center gap-2 text-[12px] text-[#8A7A6A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, stroke: '#C4844A', fill: 'none', strokeWidth: 1.8 }} aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {prop.address}, {prop.city}, {prop.zip}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${prop.address}, ${prop.city}, ${prop.zip}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-[#4A5E2A] hover:underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t.map_label}
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-6 lg:px-10" style={{ background: '#4A5E2A' }}>
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-[#F5D13A]" aria-hidden="true" />
              <span className="text-[10px] font-medium tracking-[3px] uppercase text-[#F5D13A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.cta_banner_eyebrow}</span>
            </div>
            <h2 className="text-[#FBF6EC] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px,3.5vw,42px)' }}>
              {t.cta_banner_h2_pre}{' '}<em className="italic text-[#F5D13A]">{prop.address}</em>
            </h2>
            <p className="text-[#A8BF78] text-sm mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.cta_banner_sub}</p>
          </div>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg" style={{ background: '#25D366', fontFamily: "'DM Sans', sans-serif" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {t.cta_banner_btn}
          </a>
        </div>
      </section>

      {/* RELACIONADAS */}
      {related.length > 0 && (
        <section className="py-20 px-6 lg:px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="block w-6 h-px bg-[#C4844A]" aria-hidden="true" />
                  <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#C4844A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.related_eyebrow}</span>
                </div>
                <h2 className="text-[#2A1F0E] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(28px,3vw,40px)' }}>
                  {t.related_h2_pre}{' '}<em className="italic text-[#4A5E2A]">{t.related_h2_em}</em>
                </h2>
              </div>
              <Link href="/propiedades" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#4A5E2A] transition-all hover:gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t.related_see_all}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(p => {
                const rMsg = encodeURIComponent(
                  isEN
                    ? `Hi Yina, I'm interested in the property at ${p.address}, ${p.city}. Is it available?`
                    : `Hola Yina, me interesa la propiedad en ${p.address}, ${p.city}. ¿Está disponible?`
                )
                const pDesc = isEN ? p.descEN : p.desc
                return (
                  <article key={p.id} className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border border-[#E8DCC4]">
                    <Link href={`/propiedades/${p.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                      <Image src={p.src} alt={`${p.address}, ${p.city}`} fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="380px" />
                      <span className="absolute top-3 left-3 text-[9px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded" style={{ background: p.type === 'renta' ? '#F0F5E8' : '#FEF8D0', color: p.type === 'renta' ? '#4A5E2A' : '#5A4A2A', fontFamily: "'DM Sans', sans-serif" }}>
                        {p.type === 'renta' ? t.for_rent : t.for_sale}
                      </span>
                    </Link>
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[#4A5E2A] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600 }}>{p.price}</span>
                          {p.type === 'renta' && <span className="text-[#8A7A6A] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.per_month}</span>}
                        </div>
                        <p className="text-sm font-medium text-[#2A1F0E] mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.address}</p>
                        <p className="text-[11px] text-[#8A7A6A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.city}, {p.zip}</p>
                        <p className="text-[12px] text-[#8A7A6A] mt-2 leading-snug line-clamp-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{pDesc}</p>
                      </div>
                      <div className="flex items-center gap-4 text-[11px] text-[#8A7A6A] pt-3 border-t border-[#E8DCC4]">
                        <span className="flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}><Bed size={12} color="#C4844A" strokeWidth={1.5} /> {p.beds} {t.beds}</span>
                        <span className="flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}><Bath size={12} color="#C4844A" strokeWidth={1.5} /> {p.baths} {p.baths === 1 ? t.baths_one : t.baths_many}</span>
                        <span className="text-[#C4844A] font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>✦ {isEN ? p.specEN : p.spec}</span>
                      </div>
                      <div className="flex flex-col gap-2 mt-auto pt-1">
                        <Link href={`/propiedades/${p.slug}`} className="flex items-center justify-center gap-1.5 w-full rounded-full py-2.5 text-xs font-semibold border transition-all duration-200 hover:bg-[#4A5E2A] hover:text-white hover:border-[#4A5E2A]" style={{ borderColor: '#4A5E2A', color: '#4A5E2A', fontFamily: "'DM Sans', sans-serif" }}>
                          {t.btn_ver}
                        </Link>
                        <a href={`https://wa.me/${WA}?text=${rMsg}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 w-full rounded-full py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:opacity-90" style={{ background: '#25D366', fontFamily: "'DM Sans', sans-serif" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                          {t.btn_wa}
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link href="/propiedades" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4A5E2A]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.related_see_all_mobile}</Link>
            </div>
          </div>
        </section>
      )}

    </main>
  )
}
