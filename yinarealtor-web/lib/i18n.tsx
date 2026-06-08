'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

export type Locale = 'es' | 'en'

interface I18nContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: typeof content['es']
}

const I18nContext = createContext<I18nContextType | null>(null)

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be inside I18nProvider')
  return ctx
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')

  useEffect(() => {
    const saved = localStorage.getItem('yt-locale') as Locale | null
    if (saved === 'es' || saved === 'en') setLocaleState(saved)
  }, [])

  function setLocale(l: Locale) {
    setLocaleState(l)
    localStorage.setItem('yt-locale', l)
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: content[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

const content = {
  es: {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre Mí',
      servicios: 'Servicios',
      propiedades: 'Propiedades',
      contacto: 'Contacto',
      wa: 'WhatsApp',
      menu: 'Menú',
      close: 'Cerrar',
    },
    footer: {
      tagline: 'Tu Realtor® bilingüe en Rhode Island. Atención personalizada en español e inglés.',
      nav: 'Navegación',
      links_nav: ['Inicio', 'Servicios', 'Propiedades', 'Contacto'],
      servicios: 'Servicios',
      links_svc: ['Comprar Casa', 'Vender Propiedad', 'Rentar Propiedad', 'Asesoría'],
      contacto: 'Contacto',
      rights: '© 2025 Yina Tiburcio · Real Broker · Rhode Island',
      license: 'Licensed Realtor® in Rhode Island',
      disclaimer: 'NNA Certified Loan Signing Agent',
    },
    wa: 'Escríbeme',
    servicios: {
      meta_title: 'Servicios · Yina Tiburcio Realtor® Rhode Island',
      meta_desc: 'Compra, vende o renta una propiedad en Rhode Island con Yina Tiburcio, tu Realtor bilingüe. Atención personalizada en español.',
      hero_eyebrow: 'Servicios Inmobiliarios',
      hero_h1_1: 'Te acompaño en cada paso',
      hero_h1_2: 'de tu proceso inmobiliario',
      hero_sub: 'Ya sea que estés buscando tu primera vivienda, necesites rentar una propiedad, vender tu hogar o simplemente entender cuáles son tus opciones, recibirás orientación clara y apoyo personalizado durante todo el proceso.',
      services_eyebrow: 'Lo que ofrezco',
      services_h2_1: '¿En qué puedo',
      services_h2_2: 'ayudarte?',
      cards: [
        {
          icon: 'home',
          badge: 'Popular',
          title: 'Comprar Casa',
          body: 'Encontrar la propiedad adecuada es mucho más que buscar una casa. Te ayudo a entender tus opciones, conectar con profesionales del proceso y avanzar con confianza hacia la compra de tu hogar.',
          cta: 'Comenzar mi búsqueda',
        },
        {
          icon: 'sell',
          badge: '',
          title: 'Vender Propiedad',
          body: 'Cada propiedad tiene una historia y un valor único. Te acompaño para preparar, promocionar y gestionar la venta de tu inmueble de manera estratégica y profesional.',
          cta: 'Evaluar mi propiedad',
        },
        {
          icon: 'rent',
          badge: '',
          title: 'Rentar Propiedad',
          body: 'Si buscas una vivienda para rentar o deseas colocar tu propiedad en alquiler, te ayudo a navegar el proceso con mayor tranquilidad y claridad.',
          cta: 'Explorar opciones',
        },
        {
          icon: 'advice',
          badge: 'Gratis',
          title: 'Asesoría y Orientación',
          body: '¿No sabes por dónde comenzar? Muchas personas tienen preguntas sobre crédito, financiamiento, documentación o requisitos. Agenda una consulta para conversar sobre tu situación y explorar tus opciones.',
          cta: 'Agendar consulta',
        },
      ],
      process_eyebrow: 'El proceso',
      process_h2_1: 'Cómo trabajamos',
      process_h2_2: 'juntos',
      steps: [
        { num: '01', title: 'Consulta inicial', body: 'Hablamos sobre tu situación, objetivos y preguntas. Sin costo, sin compromiso.' },
        { num: '02', title: 'Planificación', body: 'Definimos juntos la estrategia más adecuada para tu proceso y presupuesto.' },
        { num: '03', title: 'Búsqueda activa', body: 'Recibas opciones filtradas según tus criterios y visitamos las propiedades de tu interés.' },
        { num: '04', title: 'Negociación', body: 'Te represento y negocio en tu favor para conseguir las mejores condiciones.' },
        { num: '05', title: 'Cierre exitoso', body: 'Te acompaño hasta el cierre y me aseguro de que entiendas cada documento.' },
      ],
      faq_eyebrow: 'Preguntas Frecuentes',
      faq_h2_1: '¿Tienes',
      faq_h2_2: 'preguntas?',
      faqs: [
        { q: '¿Qué necesito para comprar una casa por primera vez?', a: 'Cada situación es diferente, pero normalmente el primer paso es conocer tu situación financiera y explorar opciones de financiamiento. Puedo orientarte para entender el proceso y ayudarte a dar los siguientes pasos.' },
        { q: '¿Necesito tener un crédito perfecto para comprar una vivienda?', a: 'No necesariamente. Existen diferentes programas y opciones según cada caso. Una consulta puede ayudarte a entender cuáles podrían ser tus alternativas.' },
        { q: '¿Qué es una preaprobación hipotecaria?', a: 'Es una evaluación preliminar realizada por un prestamista para determinar cuánto podrías calificar para financiar. Este paso suele fortalecer tu posición al momento de buscar una propiedad.' },
        { q: '¿Puedo recibir ayuda para rentar una propiedad?', a: 'Sí. Te acompaño durante la búsqueda y el proceso de renta para ayudarte a encontrar opciones adecuadas según tus necesidades.' },
        { q: 'Quiero vender mi propiedad. ¿Por dónde empiezo?', a: 'El primer paso es evaluar la propiedad y conocer las condiciones actuales del mercado. A partir de ahí podemos definir una estrategia adecuada para tu situación.' },
        { q: '¿Trabajas únicamente en Rhode Island?', a: 'Mi enfoque principal es Rhode Island y las comunidades donde actualmente presto servicio. Si tienes dudas sobre una ubicación específica, contáctame.' },
        { q: '¿Atiendes en español?', a: 'Sí. Ofrezco atención tanto en español como en inglés para que puedas comunicarte con confianza durante todo el proceso.' },
        { q: '¿Cuánto cuesta una consulta inicial?', a: 'La consulta inicial es gratuita y está diseñada para entender tu situación, responder preguntas y orientarte sobre los próximos pasos.' },
      ],
      testi_eyebrow: 'Testimonios',
      testi_h2_1: 'Lo que dicen',
      testi_h2_2: 'nuestros clientes',
      testimonials: [
        { quote: 'Desde la primera consulta nos sentimos acompañados. Yina respondió nuestras preguntas con paciencia y nos ayudó a entender cada etapa del proceso de compra.', name: 'Familia Rodríguez', loc: 'Cranston, RI', type: 'Compradores', initial: 'R' },
        { quote: 'Encontrar una vivienda puede ser estresante, pero contar con alguien que hablara nuestro idioma y nos guiara hizo toda la diferencia.', name: 'María & José L.', loc: 'Providence, RI', type: 'Inquilinos', initial: 'M' },
        { quote: 'Profesional, organizada y siempre disponible para orientarnos. Su apoyo nos permitió avanzar con tranquilidad durante todo el proceso.', name: 'Carlos Méndez', loc: 'Pawtucket, RI', type: 'Propietario', initial: 'C' },
      ],
      cta_eyebrow: 'Da el siguiente paso',
      cta_h2: '¿Lista para hacer tu movida?',
      cta_sub: 'Contáctame hoy mismo y conversemos sobre tu situación. La consulta inicial es gratuita y sin compromiso.',
      cta_wa: 'Escríbeme por WhatsApp',
      cta_form: 'Consulta Gratis',
    },
    propiedades: {
      meta_title: 'Propiedades · Yina Tiburcio Realtor® Rhode Island',
      meta_desc: 'Explora propiedades disponibles para comprar y rentar en Rhode Island. Yina Tiburcio Realtor®, atención en español.',
      hero_eyebrow: 'Propiedades Disponibles',
      hero_h1_1: 'Explora propiedades disponibles',
      hero_h1_2: 'en Rhode Island',
      hero_sub: 'Descubre oportunidades para comprar o rentar en distintas ciudades de Rhode Island. Actualizamos continuamente las propiedades disponibles para ayudarte a encontrar opciones que se adapten a tus necesidades y presupuesto.',
      tab_comprar: 'Comprar',
      tab_rentar: 'Rentar',
      badge_venta: 'En Venta',
      badge_renta: 'En Renta',
      beds: 'hab.',
      baths: 'baños',
      wa_cta: 'Consultar por WhatsApp',
      wa_msg_prefix: 'Hola Yina, me interesa esta propiedad: ',
      owner_eyebrow: '¿Eres propietario?',
      owner_h2: '¿Tienes una propiedad disponible?',
      owner_body: 'Trabajo con propietarios para colocar sus inmuebles en renta o venta de manera eficiente y profesional. Contáctame y conversemos.',
      owner_cta: 'Hablemos',
    },
    contacto: {
      meta_title: 'Contacto · Yina Tiburcio Realtor® Rhode Island',
      meta_desc: 'Contacta a Yina Tiburcio Realtor® en Rhode Island. Consulta gratuita en español o inglés. WhatsApp +1 401 602-5102.',
      hero_eyebrow: 'Contáctame',
      hero_h1_1: 'Hablemos sobre',
      hero_h1_2: 'tus próximos pasos',
      hero_sub: 'Ya sea que estés pensando en comprar, vender o rentar una propiedad, estoy aquí para ayudarte a encontrar la mejor solución para tu situación.',
      info_eyebrow: 'Información de contacto',
      address_label: 'Dirección',
      phone_label: 'Teléfono',
      email_label: 'Correo electrónico',
      social_label: 'Redes Sociales',
      wa_btn: 'Escríbeme por WhatsApp',
      form_h3: 'Envía tu consulta',
      form_name: 'Nombre completo',
      form_phone: 'Teléfono',
      form_service: 'Servicio de interés',
      form_service_opts: ['Comprar Casa', 'Vender Propiedad', 'Rentar Propiedad', 'Asesoría', 'Otro'],
      form_service_placeholder: 'Selecciona un servicio',
      form_msg: 'Mensaje (opcional)',
      form_msg_placeholder: '¿Cómo puedo ayudarte?',
      form_submit: 'Enviar Consulta →',
      form_sending: 'Enviando...',
      form_success: '¡Mensaje enviado! Te contactaré pronto.',
      trust: 'Gratis · Sin compromiso · En español o English',
      map_label: 'Ubicación de la oficina',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      sobreMi: 'About Me',
      servicios: 'Services',
      propiedades: 'Properties',
      contacto: 'Contact',
      wa: 'WhatsApp',
      menu: 'Menu',
      close: 'Close',
    },
    footer: {
      tagline: 'Your bilingual Realtor® in Rhode Island. Personalized service in Spanish and English.',
      nav: 'Navigation',
      links_nav: ['Home', 'Services', 'Properties', 'Contact'],
      servicios: 'Services',
      links_svc: ['Buy a Home', 'Sell Property', 'Rent Property', 'Advisory'],
      contacto: 'Contact',
      rights: '© 2025 Yina Tiburcio · Real Broker · Rhode Island',
      license: 'Licensed Realtor® in Rhode Island',
      disclaimer: 'NNA Certified Loan Signing Agent',
    },
    wa: 'Message Me',
    servicios: {
      meta_title: 'Services · Yina Tiburcio Realtor® Rhode Island',
      meta_desc: 'Buy, sell or rent a property in Rhode Island with Yina Tiburcio, your bilingual Realtor. Personalized service in Spanish.',
      hero_eyebrow: 'Real Estate Services',
      hero_h1_1: 'I guide you every step',
      hero_h1_2: 'of your real estate journey',
      hero_sub: 'Whether you\'re looking for your first home, need to rent a property, sell your home, or simply understand your options — you\'ll receive clear guidance and personalized support throughout the entire process.',
      services_eyebrow: 'What I offer',
      services_h2_1: 'How can I',
      services_h2_2: 'help you?',
      cards: [
        {
          icon: 'home',
          badge: 'Popular',
          title: 'Buy a Home',
          body: 'Finding the right property is much more than searching for a house. I help you understand your options, connect with professionals in the process, and move forward with confidence toward buying your home.',
          cta: 'Start my search',
        },
        {
          icon: 'sell',
          badge: '',
          title: 'Sell Property',
          body: 'Every property has a unique story and value. I guide you to prepare, market, and manage the sale of your property strategically and professionally.',
          cta: 'Evaluate my property',
        },
        {
          icon: 'rent',
          badge: '',
          title: 'Rent Property',
          body: 'Whether you\'re looking for a place to rent or want to place your property on the rental market, I help you navigate the process with greater peace of mind and clarity.',
          cta: 'Explore options',
        },
        {
          icon: 'advice',
          badge: 'Free',
          title: 'Advisory & Guidance',
          body: 'Don\'t know where to start? Many people have questions about credit, financing, documentation, or requirements. Schedule a consultation to talk about your situation and explore your options.',
          cta: 'Schedule consultation',
        },
      ],
      process_eyebrow: 'The process',
      process_h2_1: 'How we work',
      process_h2_2: 'together',
      steps: [
        { num: '01', title: 'Initial consultation', body: 'We talk about your situation, goals, and questions. No cost, no commitment.' },
        { num: '02', title: 'Planning', body: 'Together we define the most suitable strategy for your process and budget.' },
        { num: '03', title: 'Active search', body: 'You receive options filtered by your criteria and we visit properties of interest.' },
        { num: '04', title: 'Negotiation', body: 'I represent you and negotiate on your behalf to secure the best terms.' },
        { num: '05', title: 'Successful closing', body: 'I accompany you to closing and make sure you understand every document.' },
      ],
      faq_eyebrow: 'FAQ',
      faq_h2_1: 'Do you have',
      faq_h2_2: 'questions?',
      faqs: [
        { q: 'What do I need to buy a house for the first time?', a: 'Every situation is different, but normally the first step is understanding your financial situation and exploring financing options. I can guide you through the process and help you take the next steps.' },
        { q: 'Do I need perfect credit to buy a home?', a: 'Not necessarily. There are different programs and options depending on each case. A consultation can help you understand what alternatives might be available to you.' },
        { q: 'What is a mortgage pre-approval?', a: 'It\'s a preliminary evaluation done by a lender to determine how much you could qualify to finance. This step usually strengthens your position when looking for a property.' },
        { q: 'Can I get help renting a property?', a: 'Yes. I accompany you during the search and rental process to help you find suitable options according to your needs.' },
        { q: 'I want to sell my property. Where do I start?', a: 'The first step is evaluating the property and understanding current market conditions. From there we can define an appropriate strategy for your situation.' },
        { q: 'Do you only work in Rhode Island?', a: 'My main focus is Rhode Island and the communities where I currently provide services. If you have questions about a specific location, contact me.' },
        { q: 'Do you serve in Spanish?', a: 'Yes. I offer service in both Spanish and English so you can communicate with confidence throughout the entire process.' },
        { q: 'How much does an initial consultation cost?', a: 'The initial consultation is free and designed to understand your situation, answer questions, and guide you on next steps.' },
      ],
      testi_eyebrow: 'Testimonials',
      testi_h2_1: 'What our',
      testi_h2_2: 'clients say',
      testimonials: [
        { quote: 'From the first consultation we felt supported. Yina answered our questions with patience and helped us understand each stage of the buying process.', name: 'Rodríguez Family', loc: 'Cranston, RI', type: 'Buyers', initial: 'R' },
        { quote: 'Finding a home can be stressful, but having someone who spoke our language and guided us made all the difference.', name: 'María & José L.', loc: 'Providence, RI', type: 'Tenants', initial: 'M' },
        { quote: 'Professional, organized, and always available to guide us. Her support allowed us to move forward with peace of mind throughout the entire process.', name: 'Carlos Méndez', loc: 'Pawtucket, RI', type: 'Owner', initial: 'C' },
      ],
      cta_eyebrow: 'Take the next step',
      cta_h2: 'Ready to make your move?',
      cta_sub: 'Contact me today and let\'s talk about your situation. The initial consultation is free and without obligation.',
      cta_wa: 'Message me on WhatsApp',
      cta_form: 'Free Consultation',
    },
    propiedades: {
      meta_title: 'Properties · Yina Tiburcio Realtor® Rhode Island',
      meta_desc: 'Explore available properties to buy and rent in Rhode Island. Yina Tiburcio Realtor®, service in Spanish.',
      hero_eyebrow: 'Available Properties',
      hero_h1_1: 'Explore available properties',
      hero_h1_2: 'in Rhode Island',
      hero_sub: 'Discover opportunities to buy or rent in different cities across Rhode Island. We continuously update available properties to help you find options that fit your needs and budget.',
      tab_comprar: 'Buy',
      tab_rentar: 'Rent',
      badge_venta: 'For Sale',
      badge_renta: 'For Rent',
      beds: 'bd.',
      baths: 'ba.',
      wa_cta: 'Inquire on WhatsApp',
      wa_msg_prefix: 'Hi Yina, I\'m interested in this property: ',
      owner_eyebrow: 'Are you a landlord?',
      owner_h2: 'Do you have a property available?',
      owner_body: 'I work with property owners to rent or sell their properties efficiently and professionally. Contact me and let\'s talk.',
      owner_cta: 'Let\'s talk',
    },
    contacto: {
      meta_title: 'Contact · Yina Tiburcio Realtor® Rhode Island',
      meta_desc: 'Contact Yina Tiburcio Realtor® in Rhode Island. Free consultation in Spanish or English. WhatsApp +1 401 602-5102.',
      hero_eyebrow: 'Contact Me',
      hero_h1_1: 'Let\'s talk about',
      hero_h1_2: 'your next steps',
      hero_sub: 'Whether you\'re thinking about buying, selling, or renting a property, I\'m here to help you find the best solution for your situation.',
      info_eyebrow: 'Contact information',
      address_label: 'Address',
      phone_label: 'Phone',
      email_label: 'Email',
      social_label: 'Social Media',
      wa_btn: 'Message me on WhatsApp',
      form_h3: 'Send your inquiry',
      form_name: 'Full name',
      form_phone: 'Phone',
      form_service: 'Service of interest',
      form_service_opts: ['Buy a Home', 'Sell Property', 'Rent Property', 'Advisory', 'Other'],
      form_service_placeholder: 'Select a service',
      form_msg: 'Message (optional)',
      form_msg_placeholder: 'How can I help you?',
      form_submit: 'Send Inquiry →',
      form_sending: 'Sending...',
      form_success: 'Message sent! I\'ll be in touch soon.',
      trust: 'Free · No commitment · In Spanish or English',
      map_label: 'Office location',
    },
  },
}
