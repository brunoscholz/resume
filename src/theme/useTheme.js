import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState('blockchain')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const switchTheme = option => {
    switch (option) {
      case 'gaming':
        setMode('gaming')
        break
      case 'blockchain':
        setMode('blockchain')
        break
      case 'corporate':
      default:
        setMode('corporate')
        break
    }

    window.location.pathname = option === 'corporate' ? '/' : `/${option}`
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme ? setTheme(localTheme) : setMode('gaming')
    setComponentMounted(true)
  }, [])

  return [theme, switchTheme, componentMounted]
}
