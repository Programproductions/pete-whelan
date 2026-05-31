import { useEffect } from 'react'
import { usePortfolioStore } from '../store/usePortfolioStore'

export function useEarthbancLens() {
  const setLens = usePortfolioStore((s) => s.setLens)
  const lens = usePortfolioStore((s) => s.lens)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const lensParam = params.get('lens')
    if (lensParam === 'earthbanc') {
      setLens('earthbanc')
    }
  }, [setLens])

  return lens
}
