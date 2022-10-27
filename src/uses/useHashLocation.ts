import { useEffect, useState } from 'react'
import { BaseLocationHook } from 'wouter'

const currentLocation = () => {
  return window.location.hash.replace(/^#/, '') || '/'
}

const navigate = (path: string) => (window.location.hash = path)

const useHashLocation: BaseLocationHook  = () => {
  const [loc, setLoc] = useState(currentLocation())

  useEffect(() => {
    const handler = () => setLoc(currentLocation())

    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return [loc, navigate]
}

export default useHashLocation
