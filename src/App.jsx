import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

import Profile from './components/Profile'

import Toggle from './components/Toggle/Toggle'

import { GlobalStyles } from './theme/global'
import { useTheme } from './theme/useTheme';
import { blockchainTheme, corporateTheme, gamingTheme } from './theme/theme'

const App = () => {
  const [ theme, switchTheme, componentMounted ] = useTheme()
  const themeMode = theme === 'corporate' ? corporateTheme : theme === 'blockchain' ? blockchainTheme : gamingTheme;

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div style={{padding: '1rem', margin: '0 auto'}}>
          <Heading>
            <Toggle theme={theme} onChange={switchTheme} />
          </Heading>
        </div>
        <>
          <Profile theme={theme} />
        </>
      </>
    </ThemeProvider>
  )
}

export default App

const Container = styled.div`
  padding: 1rem;
`

const Heading = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
