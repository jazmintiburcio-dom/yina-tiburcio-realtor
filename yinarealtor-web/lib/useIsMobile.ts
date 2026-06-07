'use client'
import { useState, useEffect } from 'react'

/**
 * Returns true when window.innerWidth < breakpoint (default 768px).
 * Safe for SSR: returns false on the server, updates after hydration.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])

  return isMobile
}
