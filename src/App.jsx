import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

// import { useMorph, useMorphList, presets } from 'react-morph'

// import Profile from './components/Profile'
// import Experience from './components/Experience'
import Player from './components/Player'

import Toggle from './components/Toggle/Toggle'

import { GlobalStyles } from './theme/global'
import { blockchainTheme, corporateTheme, gamingTheme } from './theme/theme'
import { useTheme } from './theme/useTheme';

// const XPItems = [
//   {
//     company: 'POSSIBLE - WUNDERMAN THOMPSON TECH, Pelotas',
//     title: 'Frontend Engineer',
//     date: 'January 2021 - Current',
//     description:
//       'Migrating to fullstack in Drupal. Held a few client technical meetings. Several projects for clients like Siemens, DWS and SporTV.',
//     skills: ['Angular', 'React', 'Drupal'],
//     image: ''
//   },
//   {
//     company: 'OCTION, Curitiba',
//     title: 'Co-Founder & Game Developer',
//     date: 'February 2014 - August 2016',
//     description:
//       'Creating products directed to corporate training, advergames for business fairs and educational games.',
//     skills: ['Unity3D(C#)', 'Angular', 'Python', 'PHP', 'Mysql'],
//     image: ''
//   },
//   {
//     company: 'Banco do Brasil, Curitiba / Manaus',
//     title: '',
//     date: 'May 2006 - Fevereiro 2014',
//     description:
//       'Worked together with engineering and logistics management in Manaus (AM) in the development of a dashboard for cost control in building and renovation projects.',
//     skills: ['PHP', 'MySql', 'VBA'],
//     image: ''
//   },
//   {
//     company: 'ABBRA, Curitiba',
//     title: 'Developer',
//     date: 'April 2004 - May 2006',
//     description:
//       'Development of dynamic processes, from contract to complete legal process with customer leads, batch research and verification in court databases for more than one million potential clients.',
//     skills: ['PHP', 'MySql'],
//     image: ''
//   }
// ]

// const EDItems = [
//   {
//     id: 1,
//     university: 'UNIVERSIDADE POSITIVO, Curitiba',
//     skills: ['Unity3D', '3DSMax', 'C#', 'Javascript'],
//     date: '2013 - 2015 (incomplete)',
//     major: 'Digital Games',
//     description: '',
//     image: ''
//   },
//   {
//     id: 2,
//     university: 'UNIVERSIDADE FEDERAL DO AMAZONAS, Manaus',
//     skills: ['Haskell', 'Python'],
//     date: '2011 - 2013 (incomplete)',
//     major: 'Computer Science',
//     description: '',
//     image: ''
//   },
//   {
//     id: 3,
//     university: 'UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ, Curitiba',
//     skills: ['C', 'C++'],
//     date: '2003 - 2006 (incomplete)',
//     major: 'Electrical Engineering - Electronics and Telecommunication',
//     description: '',
//     image: ''
//   }
// ]

// const IItems = [
//   {
//     trait_type: '',
//     trait: 'coffee',
//     value: 8
//   },
//   {
//     trait_type: '',
//     trait: 'free markets',
//     value: 10
//   },
//   {
//     trait_type: '',
//     trait: 'bitcoin',
//     value: 10
//   },
//   {
//     trait_type: '',
//     trait: 'craft beers',
//     value: 8
//   }
// ]

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
            <Toggle onChange={switchTheme} />
          </Heading>
        </Container>
        <Container>
          <div className="w-full h-screen relative bg-red-lightest">
            <div className="h-2 bg-red-light" />
            <div className="p-8 max-w-lg m-auto">
              <Player />
            </div>
          </div>
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App

// const ThemeImage = styled.img`
//   max-width: 40px;
// `

// const Contact = styled.p`
//   padding-top: 6pt;
//   color: #999999;
//   font-size: 9pt;
//   padding-bottom: 0pt;
//   font-family: 'Roboto Condensed';
//   line-height: 1.2;
//   page-break-after: avoid;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// `

// const ContactPhone = styled(Contact)`
//   color: #e91d63;
// `

// const ContactEmail = styled(Contact)`
//   color: #e91d63;
// `

// const ListItem = styled.span`
//   padding-top: 2pt;
//   color: #999999;
//   font-size: 9pt;
//   padding-bottom: 0pt;
//   font-family: 'Roboto Condensed';
//   line-height: 1.2;
//   text-align: left;
// `

// const XPCompany = styled(ListItem)`
//   color: #e91d63;
// `

// const XPTitle = styled(ListItem)``
// const XPDates = styled(ListItem)``

// const XPSkills = styled(ListItem)``

// const Toggle = styled.button`
//   padding: 1rem;
//   border: none;
//   outline: none;
//   font-size: 2rem;
//   cursor: pointer;
//   transition: .2s all ease-in-out;
//   background: none;
//   color: ${props => !props.light ? "#eee" : "#333"};
//   position: absolute;
//   top: 0;
//   right: 0;
//   &:hover {
//     transition: .2s all ease-in-out;
//   }
// `;

// const Page = styled.div`
//   position: relative;
//   min-height: 100vh;
//   width: 100vw;
//   display: grid;
//   place-items: center;
//   transition: 0.5s;
//   background: ${props => {
//     switch (props.theme) {
//       case 'corporate':
//         return '#eee'
//       case 'gaming':
//         return '#303030'
//       default:
//         return '#9b9b9b'
//     }
//   }};
// `

const Container = styled.div`
  padding: 1rem;
`

const Heading = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

// const H1 = styled.h1`
//   margin-left: -0.8pt;
//   padding-top: 12pt;
//   padding-bottom: 0pt;
//   line-height: 1;
//   orphans: 2;
//   widows: 2;
//   text-align: left;

//   padding-top: 16pt;
//   color: #424242;
//   font-size: 24pt;
//   padding-bottom: 0pt;
//   font-family: 'Oswald';
//   line-height: 1;
//   page-break-after: avoid;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// `

// const H2 = styled.h2`
//   margin-left: -0.8pt;
//   padding-top: 16pt;
//   padding-bottom: 0pt;
//   line-height: 1.2;
//   page-break-after: avoid;
//   text-align: left;
//   font-size: 18pt;
//   color: ${props => (!props.light ? '#000' : '#000')};
// `

// const P = styled.p``

// const NormalText = styled.span`
//   font-size: 9pt;
//   font-family: 'Source Code Pro';
//   color: #666666;
//   font-weight: 400;
// `
