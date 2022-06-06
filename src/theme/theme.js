import styled from "styled-components"

export const corporateTheme = {
  id: 1,
  name: 'Corporate',
  colors: {
    body: '#E2E2E2',
    text: '#363537',
    grayText1: '#999999',
    grayText2: '#424242',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    primary: '#e91d63',
    secondary: '#2e4440',
    terciary: '#adc9d6',
    color4: '#d6adad',
    color5: '#b8a7ce'

  },
  font: 'Roboto Condensed',
  sFont: 'Trebuchet MS'
}

export const blockchainTheme = {
  id: 2,
  name: 'Blockchain',
  colors: {
    body: '#ffffff',
    text: '#272727',
    grayText1: '#181818',
    grayText2: '#777777',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    primary: '#fc00b1',
    secondary: '#638596',
    terciary: '#adc9d6',
    color4: '#d6adad',
    color5: '#b8a7ce'
  },
  font: 'Source Code Pro',
  sFont: 'Courier New'
}

export const gamingTheme = {
  id: 3,
  name: 'Gaming',
  colors: {
    body: '#303030',
    text: '#cbc8c8',
    grayText1: '#686868',
    grayText2: '#9b9b9b',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    primary: '#d0ff01',
    secondary: '#0095f7',
    terciary: '#fec017',
    color4: '#fe2c2c',
    color5: '#00ffa7'
  },
  font: "'Carter One', cursive",
  sFont: "'Press Start 2P', cursive"
}

// styled's

// export const Page = styled.div`
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

export const Contact = styled.p`
  padding-top: 6pt;
  color: #999999;
  font-size: 9pt;
  padding-bottom: 0pt;
  font-family: 'Roboto Condensed';
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
`

// export const ContactPhone = styled(Contact)`
//   color: #e91d63;
// `

export const ContactEmail = styled(Contact)`
  color: #e91d63;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.span`
  padding-top: 2pt;
  color: #999999;
  font-size: 9pt;
  padding-bottom: 0pt;
  font-family: 'Roboto Condensed';
  line-height: 1.2;
  text-align: left;
`

export const XPCompany = styled(ListItem)`
  color: #e91d63;
  font-weight: 700;
  font-size: 14px;
  font-family: "Source Code Pro";
`

export const XPTitle = styled(ListItem)`
  font-weight: 800;
  font-size: 16px;
`

export const XPDates = styled.span`
  margin: 0.5rem 0;
  font-size: 11px;
  font-family: "Source Code Pro";
  color: #666666;
  font-weight: 400;
`

export const XPSkills = styled(ListItem)`
  color: #2e4440;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 14px;
  font-family: "Source Code Pro";
  font-style: italic;
`

export const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
`

export const Col = styled.div`

`

// const Heading = styled.div`
//   max-width: 960px;
//   margin: 0 auto;
// `

export const H1 = styled.h1`
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
  font-family: 'Oswald';
  line-height: 1;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
`

export const H2 = styled.h2`
  margin-left: -0.8pt;
  padding-top: 16pt;
  line-height: 1.2;
  font-family: 'Oswald';
  text-align: left;
  font-size: 18pt;
  color: #424242;
`

// const P = styled.p``

export const NormalText = styled.p`
  font-size: 9pt;
  font-family: 'Source Code Pro';
  color: #666666;
  font-weight: 400;
`