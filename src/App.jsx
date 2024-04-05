import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from "react-router-dom";

import Profile from './components/Profile'
import Toggle from './components/Toggle/Toggle'

import { useTheme } from './theme/useTheme'
import { GlobalStyles, blockchainTheme, corporateTheme, gamingTheme, Header } from './theme/theme'

import { Analytics } from '@vercel/analytics/react'

const App = () => {
  const [theme, switchTheme, componentMounted] = useTheme()
  const themeMode = theme === 'corporate' ? corporateTheme : theme === 'blockchain' ? blockchainTheme : gamingTheme
  const mode = process.env.REACT_APP_MODE

  // beforeSend
  /* const addThemeToAnalytics = event => {
    const url = new URL(event.url)
    url.searchParams.append('page', theme)
    console.log(url.toString())
    return {
      ...event,
      url: url.toString()
    }
  } */

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div style={{ marginBottom: '2rem' }}>
          <Header>
            <Toggle theme={theme} onChange={switchTheme} />
          </Header>
        </div>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </>
      <Analytics mode={mode} debug={false} />
    </ThemeProvider>
  )
}

export default App
