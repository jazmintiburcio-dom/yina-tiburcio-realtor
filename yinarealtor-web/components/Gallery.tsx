'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Gallery({ src, gallery, address }: { src: string; gallery: string[]; address: string }) {
  const all = [src, ...gallery]
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + all.length) % all.length)
  const next = () => setCurrent(i => (i + 1) % all.length)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Imagen principal */}
      <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(42,31,14,.12)', aspectRatio: '16/10' }}>
        <Image
          key={current}
          src={all[current]}
          alt={`${address} — vista ${current + 1}`}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="(max-width:1024px) 100vw, 800px"
          priority={current === 0}
        />

        {/* Flechas */}
        {all.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Anterior"
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(251,246,236,.92)', border: 'none', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,.15)', zIndex: 5 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A5E2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15,18 9,12 15,6"/></svg>
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(251,246,236,.92)', border: 'none', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,.15)', zIndex: 5 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A5E2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,18 15,12 9,6"/></svg>
            </button>
          </>
        )}

        {/* Contador */}
        <span style={{ position: 'absolute', bottom: 12, right: 14, background: 'rgba(42,31,14,.65)', color: '#FBF6EC', fontSize: 10, fontWeight: 600, letterSpacing: 1, padding: '3px 10px', borderRadius: 20, fontFamily: "'DM Sans', sans-serif", zIndex: 5 }}>
          {current + 1} / {all.length}
        </span>
      </div>

      {/* Miniaturas */}
      {all.length > 1 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))', gap: 8 }}>
          {all.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ver imagen ${i + 1}`}
              style={{ padding: 0, border: i === current ? '2px solid #4A5E2A' : '2px solid transparent', borderRadius: 8, overflow: 'hidden', aspectRatio: '4/3', position: 'relative', cursor: 'pointer', opacity: i === current ? 1 : 0.65, transition: 'opacity .15s, border-color .15s' }}
            >
              <Image src={img} alt={`${address} — miniatura ${i + 1}`} fill style={{ objectFit: 'cover' }} sizes="100px" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
