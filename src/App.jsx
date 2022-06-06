import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

// import { useMorph, useMorphList, presets } from 'react-morph'


// import Experience from './components/Experience'
import Profile from './components/Profile'

import Toggle from './components/Toggle/Toggle'

import { GlobalStyles } from './theme/global'
import { blockchainTheme, corporateTheme, gamingTheme } from './theme/theme'
import { useTheme } from './theme/useTheme';

// const IPictures = [
//   {
//     type: 'charicature',
//     src: 'headshot.png'
//   },
//   {
//     type: 'photo',
//     src: 'headshot.png'
//   },
//   {
//     type: 'photo',
//     src: 'headshot.png'
//   }
// ]


// const options = {
//   keepFrom: true,
//   spring: {
//     ...presets.wobbly,
//     damping: 20,
//     restDisplacementThreshold: 0.0005
//   }
// }

const App = () => {
  const [ theme, switchTheme, componentMounted ] = useTheme()
  const themeMode = theme === 'corporate' ? corporateTheme : theme === 'blockchain' ? blockchainTheme : gamingTheme;

  // const eDMorphs = useMorphList(EDItems, options)
  // const picMorph = useMorph(options)

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Container>
          <Heading>
            <Toggle theme={theme} onChange={switchTheme} />
          </Heading>
        </Container>
        <Container>
          <Profile theme={theme} />
        </Container>
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
