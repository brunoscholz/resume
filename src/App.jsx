import React from 'react'
import { ThemeProvider } from 'styled-components'

import Profile from './components/Profile'
import Toggle from './components/Toggle/Toggle'

import { Analytics } from '@vercel/analytics/react'

import { useTheme } from './theme/useTheme'
import { GlobalStyles, blockchainTheme, corporateTheme, gamingTheme, Header } from './theme/theme'

const App = () => {
  const [theme, switchTheme, componentMounted] = useTheme()
  const themeMode = theme === 'corporate' ? corporateTheme : theme === 'blockchain' ? blockchainTheme : gamingTheme
  const mode = process.env.REACT_APP_MODE
  console.log(mode)

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Analytics mode={mode} />
        <div style={{ marginBottom: '2rem' }}>
          <Header>
            <Toggle theme={theme} onChange={switchTheme} />
          </Header>
        </div>
        <>
          <Profile theme={theme} />
        </>
      </>
    </ThemeProvider>
  )
}

export default App
