import { useState } from 'react'
import styled from 'styled-components'

import charicature from './headshot.png'
import photo from './headshot.png'

// import Profile from './components/Profile'
// import Experience from './components/Experience'
import Toggle from './components/Toggle/Toggle'

export const gaming = {
  fg: '#9b9b9b',
  fgt: '#686868',
  bg: '#303030',
  primary: '#d0ff01',
  secondary: '#a26c34'
}

const XPItems = [
  {
    company: 'POSSIBLE - WUNDERMAN THOMPSON TECH, Pelotas',
    title: 'Frontend Engineer',
    date: 'January 2021 - Current',
    description: 'Migrating to fullstack in Drupal. Held a few client technical meetings. Several projects for clients like Siemens, DWS and SporTV.',
    skills: ['Angular', 'React', 'Drupal'],
    image: ''
  },
  {
    company: 'OCTION, Curitiba',
    title: 'Co-Founder & Game Developer',
    date: 'February 2014 - August 2016',
    description: 'Creating products directed to corporate training, advergames for business fairs and educational games.',
    skills: ['Unity3D(C#)', 'Angular', 'Python', 'PHP', 'Mysql'],
    image: ''
  },
  {
    company: 'Banco do Brasil, Curitiba / Manaus',
    title: '',
    date: 'May 2006 - Fevereiro 2014',
    description: 'Worked together with engineering and logistics management in Manaus (AM) in the development of a dashboard for cost control in building and renovation projects.',
    skills: ['PHP', 'MySql', 'VBA'],
    image: ''
  },
  {
    company: 'ABBRA, Curitiba',
    title: 'Developer',
    date: 'April 2004 - May 2006',
    description: 'Development of dynamic processes, from contract to complete legal process with customer leads, batch research and verification in court databases for more than one million potential clients.',
    skills: ['PHP', 'MySql'],
    image: ''
  }
]

const EDItems = [
  {
    university: 'UNIVERSIDADE POSITIVO, Curitiba',
    skills: ['Unity3D', '3DSMax', 'C#', 'Javascript'],
    date: '2013 - 2015 (incomplete)',
    major: 'Digital Games',
    description: '',
    image: ''
  },
  {
    university: 'UNIVERSIDADE FEDERAL DO AMAZONAS, Manaus',
    skills: ['Haskell', 'Python'],
    date: '2011 - 2013 (incomplete)',
    major: 'Computer Science',
    description: '',
    image: ''
  },
  {
    university: 'UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ, Curitiba',
    skills: ['C', 'C++'],
    date: '2003 - 2006 (incomplete)',
    major: 'Electrical Engineering - Electronics and Telecommunication',
    description: '',
    image: ''
  }
]

const IItems = [
  {
    trait_type: '',
    trait: 'coffee',
    value: 8
  },
  {
    trait_type: '',
    trait: 'free markets',
    value: 10
  },
  {
    trait_type: '',
    trait: 'bitcoin',
    value: 10
  },
  {
    trait_type: '',
    trait: 'craft beers',
    value: 8
  }
]

const themes = ['corporate', 'blockchain', 'gaming']

const App = () => {
  const [themeState, setThemeState] = useState(0)
  const eventhandler = data => setThemeState(themes.indexOf(data))

  return (
    <Page theme={themes[themeState]}>
      <Container>
        <Heading>
          <Toggle onChange={eventhandler} />
        </Heading>
      </Container>

      <Container>
        <Contact>
          <span>AV FERNANDO OS&Oacute;RIO, 4461</span>
        </Contact>
        <Contact>
          <span>PELOTAS, RS - BRAZIL</span>
        </Contact>
        <ContactPhone>
          <span>(+55) 53 9 9178-7265</span>
        </ContactPhone>
        <ContactEmail>
          <span>brunoscholz@yahoo.de</span>
        </ContactEmail>
        <H1><span>Bruno Ribeiro Scholz</span></H1>

        <H2><span>GOALS AND SKILLS</span></H2>
        <P>
          <NormalText>
            <span>My goal is always to create value by generating intelligent solutions that fulfill the client’s needs. I like challenging situations that force me to use multiple skills and critical thinking. Bitcoin enthusiast.</span>
            <span>Advanced English (native Portuguese)</span>
          </NormalText>

        </P>

        <H2><span>EXPERIENCE</span></H2>
        {XPItems.map((item, idx) => {
          return (
            <P key={idx}>
              <XPCompany>{item.company}</XPCompany>
              <XPTitle>{item.title}</XPTitle>
              <XPSkills>{item.skills.join(', ')}</XPSkills>
              <XPDates>{item.date}</XPDates>
              <NormalText>{item.description}</NormalText>
            </P>
          )
        })}

        <H2><span>EDUCATION</span></H2>
        {EDItems.map((item, idx) => {
          return (
            <P key={idx}>
              <XPCompany>{item.university}</XPCompany>
              <XPDates>{item.date}</XPDates>
              <XPSkills>{item.skills.join(', ')}</XPSkills>
              <XPTitle>{item.major}</XPTitle>
              <NormalText>{item.description}</NormalText>
            </P>
          )
        })}

      </Container>

      {/* <Profile />
      <hr />
      <Experience /> */}
    </Page>
  )
}

export default App

// const ThemeImage = styled.img`
//   max-width: 40px;
// `

const Contact = styled.p`
  padding-top: 6pt;
  color: #999999;
  font-size: 9pt;
  padding-bottom: 0pt;
  font-family: "Roboto Condensed";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
`

const ContactPhone = styled(Contact)`
  color: #e91d63
`

const ContactEmail = styled(Contact)`
  color: #e91d63
`

const ListItem = styled.span`
  padding-top: 2pt;
  color: #999999;
  font-size: 9pt;
  padding-bottom: 0pt;
  font-family: "Roboto Condensed";
  line-height: 1.2;
  text-align: left;
`

const XPCompany = styled(ListItem)`
  color: #e91d63
`

const XPTitle = styled(ListItem)``
const XPDates = styled(ListItem)``

const XPSkills = styled(ListItem)``

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

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  transition: 0.5s;
  background: ${props => {
    switch (props.theme) {
      case 'corporate':
        return '#eee'
      case 'gaming':
        return '#303030'
      default:
        return '#9b9b9b'
    }
  }};
`

const Container = styled.div`
  padding: 1rem;
`

const Heading = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const H1 = styled.h1`
  margin-left: -0.8pt;
  padding-top: 12pt;
  padding-bottom: 0pt;
  line-height: 1;
  orphans: 2;
  widows: 2;
  text-align: left;

  padding-top: 16pt;
  color: #424242;
  font-size: 24pt;
  padding-bottom: 0pt;
  font-family: "Oswald";
  line-height: 1;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
`

const H2 = styled.h2`
  margin-left: -0.8pt;
  padding-top: 16pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  page-break-after: avoid;
  text-align: left;
  font-size: 18pt;
  color: ${props => (!props.light ? '#000' : '#000')};
`

const P = styled.p`

`

const NormalText = styled.span`
  font-size: 9pt;
  font-family: "Source Code Pro";
  color: #666666;
  font-weight: 400;
`
