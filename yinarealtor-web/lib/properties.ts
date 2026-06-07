// src/lib/properties.ts
// Fuente de datos oficial — Propiedades Yina Tiburcio Realtor
// Bilingüe completo: ES + EN en todos los campos de texto

export type Property = {
  id: number
  slug: string
  src: string
  gallery: string[]
  type: 'renta' | 'venta'
  status: 'disponible' | 'cerrada' | 'reservada'
  price: string
  priceNum: number
  address: string
  city: string
  zip: string
  beds: number
  baths: number
  parking: number | null
  laundry: boolean
  floor: string | null
  propType: string
  propTypeEN: string
  spec: string
  specEN: string
  // ES
  desc: string
  descLong: string
  idealFor: string
  features: string[]
  highlights: { label: string; value: string }[]
  nearbyPlaces: { category: string; items: string[] }[]
  // EN
  descEN: string
  descLongEN: string
  idealForEN: string
  featuresEN: string[]
  highlightsEN: { label: string; value: string }[]
  nearbyPlacesEN: { category: string; items: string[] }[]
  available: string
  availableEN: string
}

export const properties: Property[] = [
  // ── 23 CONCANNON ST ───────────────────────────────────────────────────────
  {
    id: 1,
    slug: '23-concannon-st',
    src: '/images/propiedades/23-concannon-st/main.jpg',
    gallery: [
      '/images/propiedades/23-concannon-st/living-1.jpg',
      '/images/propiedades/23-concannon-st/living-2.jpg',
      '/images/propiedades/23-concannon-st/cocina-1.jpg',
      '/images/propiedades/23-concannon-st/bed-1.jpg',
      '/images/propiedades/23-concannon-st/bed-2.jpg',
      '/images/propiedades/23-concannon-st/bed-3.jpg',
      '/images/propiedades/23-concannon-st/bath-1.jpg',
      '/images/propiedades/23-concannon-st/porch-1.jpg',
    ],
    type: 'renta',
    status: 'disponible',
    price: '$2,700',
    priceNum: 2700,
    address: '23 Concannon St',
    city: 'Providence',
    zip: 'RI 02904',
    beds: 3,
    baths: 2,
    parking: 1,
    laundry: true,
    floor: 'Primer piso',
    propType: 'Apartamento',
    propTypeEN: 'Apartment',
    spec: 'Master Suite',
    specEN: 'Master Suite',
    desc: 'Estrena hogar en esta hermosa unidad de nueva construcción en Providence. Diseño moderno, laundry dentro de la unidad y estacionamiento incluido.',
    descLong: 'Estrena hogar en esta hermosa unidad de nueva construcción ubicada en el primer piso de 23 Concannon St en Providence. Diseñada para brindar comodidad y funcionalidad, cuenta con espacios amplios y bien distribuidos que facilitan la vida diaria de toda la familia. La propiedad ofrece un ambiente moderno y acogedor, ideal para quienes buscan un lugar donde sentirse en casa desde el primer día. Su distribución permite disfrutar de privacidad y comodidad, mientras que las áreas comunes invitan a compartir momentos especiales con familiares y amigos. Además, su ubicación en Providence brinda acceso conveniente a servicios, comercios y opciones de transporte.',
    idealFor: 'Familias que buscan una vivienda moderna, cómoda y lista para habitar. También es una excelente opción para quienes valoran la practicidad de contar con laundry dentro de la unidad, estacionamiento incluido y una ubicación conveniente dentro de Providence.',
    features: [
      'Nueva construcción',
      'Diseño moderno y funcional',
      'Baño privado en habitación principal',
      'Laundry dentro de la unidad',
      'Estacionamiento incluido',
      'Primer piso — fácil acceso',
    ],
    highlights: [
      { label: 'Precio', value: '$2,700 / mes' },
      { label: 'Tipo', value: 'Apartamento' },
      { label: 'Habitaciones', value: '3' },
      { label: 'Baños', value: '2 completos' },
      { label: 'Baño privado', value: 'Incluido en habitación principal' },
      { label: 'Parqueo', value: 'Incluido' },
      { label: 'Laundry', value: 'Dentro de la unidad' },
      { label: 'Nivel', value: 'Primer piso' },
      { label: 'Estado', value: 'Nueva construcción' },
    ],
    nearbyPlaces: [
      { category: 'Educación', items: ['E-Cubed Academy', 'Nathanael Greene Middle School', 'La Salle Academy'] },
      { category: 'Parques y Recreación', items: ['Wanskuck Park', 'General St Park', 'Fargnoli Park And Splash Pad'] },
      { category: 'Compras', items: ['Stop & Shop', 'Price Rite Marketplace of Providence', 'Chalkstone Supermarket', 'Whole Foods Market'] },
      { category: 'Transporte', items: ['Acceso conveniente a Downtown Providence', 'Conexión rápida a I-95'] },
    ],
    descEN: 'Move into this beautiful brand-new unit in Providence. Modern design, in-unit laundry, and parking included.',
    descLongEN: 'Move into this beautiful brand-new construction unit located on the first floor of 23 Concannon St in Providence. Designed to provide comfort and functionality, it features spacious, well-distributed rooms that make daily life easier for the whole family. The property offers a modern and welcoming atmosphere, ideal for those looking for a place to feel at home from day one. Its layout ensures privacy and comfort, while common areas invite quality time with family and friends. Its location in Providence also provides convenient access to services, shops, and public transportation.',
    idealForEN: 'Families looking for a modern, comfortable, move-in ready home. Also a great option for those who value the convenience of in-unit laundry, included parking, and a great location within Providence.',
    featuresEN: [
      'New construction',
      'Modern and functional design',
      'Private bath in master bedroom',
      'In-unit laundry',
      'Parking included',
      'First floor — easy access',
    ],
    highlightsEN: [
      { label: 'Price', value: '$2,700 / mo' },
      { label: 'Type', value: 'Apartment' },
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '2 full baths' },
      { label: 'Private bath', value: 'Included in master bedroom' },
      { label: 'Parking', value: 'Included' },
      { label: 'Laundry', value: 'In-unit' },
      { label: 'Floor', value: 'First floor' },
      { label: 'Condition', value: 'New construction' },
    ],
    nearbyPlacesEN: [
      { category: 'Education', items: ['E-Cubed Academy', 'Nathanael Greene Middle School', 'La Salle Academy'] },
      { category: 'Parks & Recreation', items: ['Wanskuck Park', 'General St Park', 'Fargnoli Park And Splash Pad'] },
      { category: 'Shopping', items: ['Stop & Shop', 'Price Rite Marketplace of Providence', 'Chalkstone Supermarket', 'Whole Foods Market'] },
      { category: 'Transportation', items: ['Convenient access to Downtown Providence', 'Quick connection to I-95'] },
    ],
    available: 'Disponible ahora',
    availableEN: 'Available now',
  },

  // ── 37 HUMES ST ───────────────────────────────────────────────────────────
  {
    id: 2,
    slug: '37-humes-st',
    src: '/images/propiedades/37-humes-st/main.jpg',
    gallery: [
      '/images/propiedades/37-humes-st/living-1.jpg',
      '/images/propiedades/37-humes-st/living-2.jpg',
      '/images/propiedades/37-humes-st/cocina-1.jpg',
      '/images/propiedades/37-humes-st/cocina-2.jpg',
      '/images/propiedades/37-humes-st/bed-1.jpg',
      '/images/propiedades/37-humes-st/bed-2.jpg',
      '/images/propiedades/37-humes-st/bath-1.jpg',
    ],
    type: 'renta',
    status: 'disponible',
    price: '$1,950',
    priceNum: 1950,
    address: '37 Humes St',
    city: 'Providence',
    zip: 'RI 02907',
    beds: 2,
    baths: 1,
    parking: null,
    laundry: false,
    floor: 'Tercer piso',
    propType: 'Apartamento',
    propTypeEN: 'Apartment',
    spec: 'Gas Incluido',
    specEN: 'Gas Included',
    desc: 'Apartamento remodelado en Providence con gas incluido en la renta. Tercer piso para mayor privacidad, cerca de Rhode Island Hospital y transporte público.',
    descLong: 'Si buscas un lugar cómodo, actualizado y listo para mudarte, este apartamento remodelado en Providence puede ser una excelente opción. Su ubicación en el tercer piso ofrece mayor privacidad y un ambiente tranquilo, ideal para quienes desean disfrutar de su espacio después de un día de trabajo o estudio. El apartamento combina funcionalidad y comodidad para la vida diaria. Además, el gas está incluido en la renta, un beneficio que ayuda a simplificar los gastos mensuales y aporta mayor tranquilidad al presupuesto familiar. Su ubicación dentro de Providence permite disfrutar de una comunidad dinámica con acceso conveniente a servicios, comercios y opciones de transporte.',
    idealFor: 'Ideal para parejas, familias pequeñas, personas que alquilan por primera vez o profesionales que buscan una vivienda cómoda y bien ubicada en Providence. También es una excelente alternativa para quienes valoran una propiedad actualizada y la ventaja de tener el gasto de gas incluido en la renta mensual.',
    features: [
      'Gas incluido en la renta',
      'Apartamento remodelado',
      'Tercer piso — mayor privacidad',
      'Cerca de Rhode Island Hospital',
      'Acceso a transporte público',
      'Comunidad latina cercana',
    ],
    highlights: [
      { label: 'Precio', value: '$1,950 / mes' },
      { label: 'Tipo', value: 'Apartamento' },
      { label: 'Habitaciones', value: '2' },
      { label: 'Baños', value: '1' },
      { label: 'Gas', value: 'Incluido en la renta' },
      { label: 'Nivel', value: 'Tercer piso' },
      { label: 'Estado', value: 'Remodelado' },
    ],
    nearbyPlaces: [
      { category: 'Educación', items: ['Reservoir Avenue Elementary School', 'Sophia Academy'] },
      { category: 'Recreación', items: ['Roger Williams Park', 'Riverside Park'] },
      { category: 'Compras', items: ['Union Supermarket Providence', 'Good Fortune Supermarket', 'Pacific Seafood Market'] },
      { category: 'Restaurantes y Cafés', items: ['La Gran Parada Restaurant', 'Empatakos', 'Excellent Pizza'] },
      { category: 'Salud', items: ['Rhode Island Hospital', 'Our Lady of Fatima Hospital'] },
      { category: 'Comunidad Latina', items: ['La Gran Parada Restaurant', 'Union Supermarket Providence'] },
      { category: 'Transporte', items: ['Acceso conveniente al centro de Providence', 'Conexión rápida con I-95'] },
    ],
    descEN: 'Renovated apartment in Providence with gas included in rent. Third floor for extra privacy, close to Rhode Island Hospital and public transit.',
    descLongEN: 'If you are looking for a comfortable, updated, move-in ready home, this renovated apartment in Providence is an excellent option. Its location on the third floor provides greater privacy and a quiet environment — ideal for those who want to unwind after a long day of work or study. The apartment combines everyday functionality with comfort. Gas is included in the monthly rent, helping simplify your monthly expenses and easing your household budget. Located within Providence, you will enjoy a dynamic community with convenient access to services, shops, and transportation.',
    idealForEN: 'Ideal for couples, small families, first-time renters, or professionals looking for a comfortable and well-located home in Providence. Also a great option for those who value an updated property and the benefit of having gas included in the monthly rent.',
    featuresEN: [
      'Gas included in rent',
      'Renovated apartment',
      'Third floor — greater privacy',
      'Near Rhode Island Hospital',
      'Public transit access',
      'Close to Latino community',
    ],
    highlightsEN: [
      { label: 'Price', value: '$1,950 / mo' },
      { label: 'Type', value: 'Apartment' },
      { label: 'Bedrooms', value: '2' },
      { label: 'Bathrooms', value: '1' },
      { label: 'Gas', value: 'Included in rent' },
      { label: 'Floor', value: 'Third floor' },
      { label: 'Condition', value: 'Renovated' },
    ],
    nearbyPlacesEN: [
      { category: 'Education', items: ['Reservoir Avenue Elementary School', 'Sophia Academy'] },
      { category: 'Recreation', items: ['Roger Williams Park', 'Riverside Park'] },
      { category: 'Shopping', items: ['Union Supermarket Providence', 'Good Fortune Supermarket', 'Pacific Seafood Market'] },
      { category: 'Restaurants & Cafés', items: ['La Gran Parada Restaurant', 'Empatakos', 'Excellent Pizza'] },
      { category: 'Health', items: ['Rhode Island Hospital', 'Our Lady of Fatima Hospital'] },
      { category: 'Latino Community', items: ['La Gran Parada Restaurant', 'Union Supermarket Providence'] },
      { category: 'Transportation', items: ['Convenient access to downtown Providence', 'Quick connection to I-95'] },
    ],
    available: 'Disponible ahora',
    availableEN: 'Available now',
  },

  // ── 227 DEXTER ST ─────────────────────────────────────────────────────────
  {
    id: 3,
    slug: '227-dexter-st',
    src: '/images/propiedades/227-dexter-st/main.jpg',
    gallery: [
      '/images/propiedades/227-dexter-st/living-1.jpg',
      '/images/propiedades/227-dexter-st/living-2.jpg',
      '/images/propiedades/227-dexter-st/cocina-1.jpg',
      '/images/propiedades/227-dexter-st/cocina-2.jpg',
      '/images/propiedades/227-dexter-st/bed-1.jpg',
      '/images/propiedades/227-dexter-st/bed-2.jpg',
      '/images/propiedades/227-dexter-st/bath-1.jpg',
      '/images/propiedades/227-dexter-st/bath-laundry-1.jpg',
      '/images/propiedades/227-dexter-st/yard-1.jpg',
    ],
    type: 'renta',
    status: 'disponible',
    price: '$2,500',
    priceNum: 2500,
    address: '227 Dexter St',
    city: 'Central Falls',
    zip: 'RI 02863',
    beds: 3,
    baths: 1,
    parking: 2,
    laundry: false,
    floor: 'Primer piso',
    propType: 'Apartamento',
    propTypeEN: 'Apartment',
    spec: '2 Parqueos',
    specEN: '2 Parking spots',
    desc: 'Apartamento remodelado en primer piso en Central Falls. 3 habitaciones, habitación principal grande y 2 espacios de estacionamiento incluidos.',
    descLong: 'Descubre la comodidad de vivir en un apartamento remodelado ubicado en el primer piso, una característica que facilita el acceso diario y aporta practicidad para toda la familia. Sus espacios han sido actualizados para ofrecer un ambiente agradable y funcional, ideal para quienes buscan un hogar listo para mudarse y disfrutar desde el primer día. La distribución de la vivienda permite aprovechar cada área de manera eficiente, creando un entorno cómodo para la vida familiar. Además, contar con dos espacios de estacionamiento representa una ventaja importante para hogares con más de un vehículo. Ubicado en Central Falls, este apartamento ofrece la oportunidad de vivir en una comunidad dinámica con acceso conveniente a servicios, comercios y opciones de transporte.',
    idealFor: 'Ideal para familias en crecimiento, parejas con hijos o personas que buscan más espacio sin renunciar a la comodidad. También es una excelente opción para quienes valoran la facilidad de acceso de una unidad en primer piso y la ventaja de contar con dos espacios de estacionamiento incluidos.',
    features: [
      '2 espacios de estacionamiento',
      'Habitación principal grande',
      'Apartamento remodelado',
      'Primer piso — fácil acceso',
      'Patio / yard incluido',
      'Comunidad latina activa',
    ],
    highlights: [
      { label: 'Precio', value: '$2,500 / mes' },
      { label: 'Tipo', value: 'Apartamento' },
      { label: 'Habitaciones', value: '3' },
      { label: 'Baños', value: '1' },
      { label: 'Habitación principal', value: 'Tamaño grande' },
      { label: 'Parqueo', value: '2 espacios incluidos' },
      { label: 'Nivel', value: 'Primer piso' },
      { label: 'Estado', value: 'Remodelado' },
    ],
    nearbyPlaces: [
      { category: 'Educación', items: ['Central Falls High School', 'Calcutt Middle School', 'Veterans Memorial Elementary School'] },
      { category: 'Recreación', items: ['Jenks Park', 'Macomber Stadium', 'River Island Park'] },
      { category: 'Compras', items: ['Bravo Supermarket', 'Price Rite Marketplace', 'Stop & Shop'] },
      { category: 'Restaurantes y Cafés', items: ['El Paso Restaurant', 'La Casona Restaurant', "Stanley's Famous Hamburgers"] },
      { category: 'Salud', items: ['Blackstone Valley Community Health Care', 'The Miriam Hospital', 'Care New England Express Care'] },
      { category: 'Comunidad Latina', items: ['Bravo Supermarket', 'El Paso Restaurant', 'La Casona Restaurant'] },
      { category: 'Transporte', items: ['RIPTA Bus Service', 'Dexter Street Corridor', 'Acceso a I-95 y Route 146'] },
    ],
    descEN: 'Renovated first-floor apartment in Central Falls. 3 bedrooms, large master bedroom, and 2 parking spaces included.',
    descLongEN: 'Discover the comfort of living in a renovated first-floor apartment — a feature that makes daily access easy and adds practicality for the whole family. The spaces have been updated to offer a pleasant and functional environment, ideal for those looking for a move-in ready home. The layout allows you to make the most of every area efficiently, creating a comfortable setting for family life. Having two parking spaces is a significant advantage for households with more than one vehicle. Located in Central Falls, this apartment offers the opportunity to live in a dynamic community with convenient access to services, shops, and transportation.',
    idealForEN: 'Ideal for growing families, couples with children, or anyone looking for more space without sacrificing comfort. Also a great option for those who value easy first-floor access and the advantage of two included parking spaces.',
    featuresEN: [
      '2 parking spaces included',
      'Large master bedroom',
      'Renovated apartment',
      'First floor — easy access',
      'Yard included',
      'Active Latino community',
    ],
    highlightsEN: [
      { label: 'Price', value: '$2,500 / mo' },
      { label: 'Type', value: 'Apartment' },
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '1' },
      { label: 'Master bedroom', value: 'Large size' },
      { label: 'Parking', value: '2 spaces included' },
      { label: 'Floor', value: 'First floor' },
      { label: 'Condition', value: 'Renovated' },
    ],
    nearbyPlacesEN: [
      { category: 'Education', items: ['Central Falls High School', 'Calcutt Middle School', 'Veterans Memorial Elementary School'] },
      { category: 'Recreation', items: ['Jenks Park', 'Macomber Stadium', 'River Island Park'] },
      { category: 'Shopping', items: ['Bravo Supermarket', 'Price Rite Marketplace', 'Stop & Shop'] },
      { category: 'Restaurants & Cafés', items: ['El Paso Restaurant', 'La Casona Restaurant', "Stanley's Famous Hamburgers"] },
      { category: 'Health', items: ['Blackstone Valley Community Health Care', 'The Miriam Hospital', 'Care New England Express Care'] },
      { category: 'Latino Community', items: ['Bravo Supermarket', 'El Paso Restaurant', 'La Casona Restaurant'] },
      { category: 'Transportation', items: ['RIPTA Bus Service', 'Dexter Street Corridor', 'Access to I-95 and Route 146'] },
    ],
    available: 'Disponible ahora',
    availableEN: 'Available now',
  },

  // ── 86 COOKE ST ───────────────────────────────────────────────────────────
  {
    id: 4,
    slug: '86-cooke-st',
    src: '/images/propiedades/86-cooke-st/main.jpeg',
    gallery: [
      '/images/propiedades/86-cooke-st/living-1.webp',
      '/images/propiedades/86-cooke-st/comedor-1.webp',
      '/images/propiedades/86-cooke-st/comedor-2.webp',
      '/images/propiedades/86-cooke-st/comedor-3.webp',
      '/images/propiedades/86-cooke-st/cocina-1.webp',
      '/images/propiedades/86-cooke-st/cocina-2.webp',
      '/images/propiedades/86-cooke-st/cocina-3.webp',
      '/images/propiedades/86-cooke-st/bed-1.webp',
      '/images/propiedades/86-cooke-st/bed-2.webp',
      '/images/propiedades/86-cooke-st/bed-3.webp',
      '/images/propiedades/86-cooke-st/bed-4.webp',
      '/images/propiedades/86-cooke-st/bed-5.webp',
      '/images/propiedades/86-cooke-st/bath-1.webp',
      '/images/propiedades/86-cooke-st/bath-2.webp',
      '/images/propiedades/86-cooke-st/bath-3.webp',
      '/images/propiedades/86-cooke-st/basement-1.webp',
      '/images/propiedades/86-cooke-st/garage-1.webp',
      '/images/propiedades/86-cooke-st/parqueo-1.webp',
      '/images/propiedades/86-cooke-st/porche-1.webp',
    ],
    type: 'venta',
    status: 'disponible',
    price: '$489,000',
    priceNum: 489000,
    address: '86 Cooke St',
    city: 'Providence',
    zip: 'RI 02906',
    beds: 5,
    baths: 3,
    parking: 2,
    laundry: false,
    floor: null,
    propType: 'Multifamiliar',
    propTypeEN: 'Multi-family',
    spec: '2 Parqueos',
    specEN: '2 Parking spots',
    desc: 'Propiedad multifamiliar en el East Side de Providence. 5 habitaciones, 3 baños, garage y 2 estacionamientos. Ideal para familias multigeneracionales o inversión.',
    descLong: 'Esta propiedad multifamiliar ubicada en el lado este de Providence representa una excelente oportunidad para quienes buscan espacio, flexibilidad y potencial de inversión en una de las zonas más deseadas de la ciudad. Con cinco habitaciones y tres baños en total, ofrece múltiples posibilidades para familias extensas, hogares multigeneracionales o compradores interesados en generar ingresos adicionales. Su distribución brinda amplitud para adaptarse a distintas necesidades de vivienda, mientras que los dos espacios de estacionamiento y el garage agregan comodidad. La ubicación permite disfrutar de un entorno urbano establecido con acceso conveniente a servicios, comercios y áreas recreativas.',
    idealFor: 'Ideal para familias multigeneracionales, compradores que buscan una propiedad con potencial de ingresos o quienes desean combinar vivienda principal e inversión en una sola compra. También es una excelente opción para quienes valoran vivir en una ubicación céntrica y bien conectada dentro de Providence.',
    features: [
      'Propiedad multifamiliar',
      '5 habitaciones — 3 baños',
      '2 estacionamientos + garage',
      'Sótano / basement',
      'Porche exterior',
      'East Side Providence — alta plusvalía',
    ],
    highlights: [
      { label: 'Precio', value: '$489,000' },
      { label: 'Tipo', value: 'Multifamiliar' },
      { label: 'Habitaciones', value: '5' },
      { label: 'Baños', value: '3' },
      { label: 'Parqueo', value: '2 espacios + garage' },
      { label: 'Sótano', value: 'Incluido' },
      { label: 'Porche', value: 'Incluido' },
    ],
    nearbyPlaces: [
      { category: 'Educación', items: ['Hope High School', 'Moses Brown School', 'Nathan Bishop Middle School'] },
      { category: 'Recreación', items: ['Blackstone Park', 'Lippitt Memorial Park', 'India Point Park'] },
      { category: 'Compras', items: ['Eastside Marketplace', 'Whole Foods Market Providence', "Trader Joe's Providence"] },
      { category: 'Restaurantes y Cafés', items: ['Seven Stars Bakery', 'Flatbread Company Providence', 'Red Stripe'] },
      { category: 'Salud', items: ['Miriam Hospital', 'Brown University Health Medical Offices', 'University Internal Medicine'] },
      { category: 'Comunidad Latina', items: ['Mi Guatemala Restaurant', 'Caprichos Antioqueños', 'El Rancho Grande Restaurant'] },
      { category: 'Transporte', items: ['RIPTA Bus Service', 'Acceso conveniente a I-95', 'Acceso rápido a Downtown Providence'] },
    ],
    descEN: 'Multi-family property on the East Side of Providence. 5 bedrooms, 3 bathrooms, garage, and 2 parking spaces. Perfect for multigenerational families or investment.',
    descLongEN: 'This multi-family property located on the East Side of Providence is an outstanding opportunity for those seeking space, flexibility, and investment potential in one of the city\'s most desirable neighborhoods. With five bedrooms and three bathrooms, it offers multiple possibilities for large families, multigenerational households, or buyers interested in generating additional rental income. The layout is spacious and adaptable to various living needs, while two parking spaces and a garage add everyday convenience. The location puts you in an established urban setting with easy access to shops, services, and recreational areas.',
    idealForEN: 'Ideal for multigenerational families, buyers looking for a property with income potential, or those who want to combine a primary residence with an investment in a single purchase. Also a great choice for anyone who values a central, well-connected location within Providence.',
    featuresEN: [
      'Multi-family property',
      '5 bedrooms — 3 bathrooms',
      '2 parking spaces + garage',
      'Basement included',
      'Exterior porch',
      'East Side Providence — high appreciation',
    ],
    highlightsEN: [
      { label: 'Price', value: '$489,000' },
      { label: 'Type', value: 'Multi-family' },
      { label: 'Bedrooms', value: '5' },
      { label: 'Bathrooms', value: '3' },
      { label: 'Parking', value: '2 spaces + garage' },
      { label: 'Basement', value: 'Included' },
      { label: 'Porch', value: 'Included' },
    ],
    nearbyPlacesEN: [
      { category: 'Education', items: ['Hope High School', 'Moses Brown School', 'Nathan Bishop Middle School'] },
      { category: 'Recreation', items: ['Blackstone Park', 'Lippitt Memorial Park', 'India Point Park'] },
      { category: 'Shopping', items: ['Eastside Marketplace', 'Whole Foods Market Providence', "Trader Joe's Providence"] },
      { category: 'Restaurants & Cafés', items: ['Seven Stars Bakery', 'Flatbread Company Providence', 'Red Stripe'] },
      { category: 'Health', items: ['Miriam Hospital', 'Brown University Health Medical Offices', 'University Internal Medicine'] },
      { category: 'Latino Community', items: ['Mi Guatemala Restaurant', 'Caprichos Antioqueños', 'El Rancho Grande Restaurant'] },
      { category: 'Transportation', items: ['RIPTA Bus Service', 'Convenient access to I-95', 'Quick access to Downtown Providence'] },
    ],
    available: 'Disponible ahora',
    availableEN: 'Available now',
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find(p => p.slug === slug)
}

export function getRelatedProperties(current: Property, limit = 3): Property[] {
  return properties
    .filter(p => p.slug !== current.slug)
    .sort((a, b) => (b.city === current.city ? 1 : 0) - (a.city === current.city ? 1 : 0))
    .slice(0, limit)
}
