import styled, { css, createGlobalStyle } from 'styled-components'
import { media } from 'styled-bootstrap-grid'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography[0]};
    transition: all 0.50s linear;
  }

  .menu {
    background: ${({ theme }) => theme.colors.menu};
    h2 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const grid = {
  gridColumns: 12,
  breakpoints: {
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 577
  },
  container: {
    padding: '0.75rem',
    maxWidth: {
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 720,
      xs: 720
    }
  }
}

export const corporateTheme = {
  id: 1,
  name: 'corporate',
  colors: {
    body: '#E2E2E2',
    text: '#363537',
    grayText1: '#666666',
    grayText2: '#424242',
    menu: '#303440',
    gradient: 'linear-gradient(#272727, #181818)',
    primary: '#e91d63',
    secondary: '#2e4440',
    terciary: '#adc9d6',
    color4: '#d6adad',
    color5: '#b8a7ce'
  },
  typography: {
    size: '16px',
    cardSize: '14px',
    fonts: ['Roboto Condensed', 'Source Code Pro', 'Oswald']
  },
  grid: {
    ...grid,
    container: {
      ...grid.container,
      maxWidth: {
        xxl: 1141,
        xl: 960,
        lg: 720,
        md: 720,
        sm: 720,
        xs: 720
      }
    }
  }
}

export const blockchainTheme = {
  id: 2,
  name: 'blockchain',
  colors: {
    body: '#ffffff',
    text: '#272727',
    grayText1: '#181818',
    grayText2: '#777777',
    menu: '#303440',
    gradient: 'linear-gradient(#272727, #181818)',
    primary: '#fc00b1',
    secondary: '#638596',
    terciary: '#adc9d6',
    color4: '#d6adad',
    color5: '#b8a7ce'
  },
  typography: {
    size: '16px',
    cardSize: '16px',
    fonts: ['Source Code Pro', 'Courier New', "'Press Start 2P', cursive"]
  },
  grid: grid
}

export const gamingTheme = {
  id: 3,
  name: 'gaming',
  colors: {
    body: '#303030',
    text: '#cbc8c8',
    grayText1: '#686868',
    grayText2: '#9b9b9b',
    menu: '#303440',
    gradient: 'linear-gradient(#272727, #181818)',
    primary: '#d0ff01',
    secondary: '#0095f7',
    terciary: '#fec017',
    color4: '#fe2c2c',
    color5: '#00ffa7'
  },
  typography: {
    size: '16px',
    cardSize: '16px',
    fonts: ["'Carter One', cursive", "'Amaranth', sans-serif", "'Press Start 2P', cursive"]
  },
  grid: grid
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
//     switch (props.theme.id) {
//       case 'corporate':
//         return '#eee'
//       case 'gaming':
//         return '#303030'
//       default:
//         return '#9b9b9b'
//     }
//   }};
// `

const corporateName = css`
  font-size: calc(48.0006px);
  font-weight: 700;
  line-height: 1.2em;
  color: #424242;
  margin-left: -0.8pt;
  font-family: ${props => props.theme.typography.fonts[2]};
  justify-content: center;

  p {
    padding-right: 0.4rem;
  }
`

const blockchainName = css`
  font-size: 34px;
  font-weight: 700;
  line-height: 1.2em;
  color: #181818;
  margin-top: 20px;
  p {
    padding-right: 0.75rem;
  }
`

const gamingName = css`
  flex-direction: column;
  width: 1%;
  margin-left: 0.7rem;
  font-family: ${props => props.theme.typography.fonts[2]};
  p {
    position: relative;
    width: 1%;
    font-size: 80px;
    text-transform: uppercase;
    line-height: 0.9;
    text-align: center;
    padding-top: 0.3rem;
  }

  p:first-of-type {
    transform: scaleX(92%);
    color: #d0ff01;
  }

  p:nth-of-type(2) {
    transform: scaleX(65%);
  }

  p:nth-of-type(3) {
    transform: scaleX(76%);
  }
`

const configName = props => {
  if (props.theme.name === 'corporate') return corporateName
  if (props.theme.name === 'blockchain') return blockchainName
  return gamingName
}

const getBorders = props => {
  if (props.border) return dashedBorders

  if (props.borders && props.borders.length) {
    const unsetBorders = css`
      ${dashedBorders}
      ${!props.borders[0] && 'border-left: unset;'}
      ${!props.borders[1] && 'border-top: unset;'}
      ${!props.borders[2] && 'border-right: unset;'}
      ${!props.borders[3] && 'border-bottom: unset;'}
    `
    return unsetBorders
  }

  return null
}

const dashedBorders = css`
  border: dashed 4px #000;
  border-image-source: url('/assets/border-gray-5.png');
  border-image-slice: 2;
  border-image-repeat: round;
`

const badgeStyles = css`
  position: absolute;
  text-align: center;
  border-radius: 0;
  font-size: 30px;
  background-color: ${props => props.theme.colors.body};
  color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.grayText1)};
  padding: 0 1.2rem 0 0;
  left: -10px;
  top: -15px;

  em {
    font-family: 'Press Start 2P', cursive;
    font-style: normal;
    color: #686868;
    font-size: 18px;
  }

  &--bottom-left {
    left: -10px;
    bottom: 0px;
    top: unset;
  }
`

export const AboutSection = styled.section`
  width: 100%;
`

export const Container = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;

  ${media.sm`
    max-width: ${props => props.theme.grid.container.maxWidth.sm}px;
  `}
  ${media.md`
    max-width: ${props => props.theme.grid.container.maxWidth.md}px;
  `}
  ${media.lg`
    max-width: ${props => props.theme.grid.container.maxWidth.lg}px;
  `}
  ${media.xl`
    max-width: ${props => props.theme.grid.container.maxWidth.xl}px;
    width: 100%;
  `}
  ${media.xxl`
    width: 100%;
  `}
`

export const Header = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export const Heading = styled.div`
  --bs-gutter-x: 0rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  ${props => props.theme.name === 'gaming' && 'flex-direction: column;'}
  ${props => props.theme.name === 'corporate' && 'flex-direction: column-reverse;'}

  ${props =>
    props.theme.name === 'blockchain' &&
    `
    display: inline-block;
    position: relative;
    width: 100%;
  `}

  ${media.md`
    flex-direction: row;
  `}
`

export const Card = styled.div`
  position: relative;
  padding: 1rem;
  font-family: ${props => props.theme.typography.fonts[1]};
  font-size: ${props => props.theme.typography.cardSize};
  color: ${props => props.theme.colors.text};
  // letter-spacing: 0.2rem;

  ${props =>
    props.theme.name === 'corporate' &&
    `
    justify-content: center;
    font-weight: 400;
    margin-bottom: 1rem;
    color: ${props.theme.colors.grayText1};
    padding: 0;

    h3 {
      padding-top: 1rem;
      line-height: 1.2;
      font-family: ${props.theme.typography.fonts[2]};
      text-align: left;
      font-size: 24px;
      color: ${props.theme.colors.grayText2};
    }

    article {
      text-align: justify;
    }

    article em {
      color: ${props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
      font-style: normal;
      font-weight: 800;
    }

    article em a {
      color: ${props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
    }
  `}

  .progress {
    margin-left: -0.5rem;
    border-radius: 0;
    .progress-bar {
      background-color: ${props => props.theme.colors.primary};
      &.secondary {
        background-color: ${props => props.theme.colors.secondary};
      }
      &.highlight {
        background-color: #fec017;
      }
    }

    &.negative {
      margin-right: -0.5rem;
      margin-left: 0;
      .progress-bar {
        background-color: ${props => props.theme.colors.secondary};
        // color: ${props => props.theme.colors.primary};
      }
    }
  }

  ${media.md`
    ${props => props.theme.name === 'corporate' && 'justify-content: flex-start;'}
  `}
`

export const GameCard = styled(Card)`
  padding: 2rem 1.4rem 1.4rem;
  ${props => getBorders(props)}

  .badge {
    ${badgeStyles}
  }

  article em,
  div em {
    color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.primary)};
    font-style: normal;
    font-weight: 800;
  }

  .item-list {
    .title {
      color: #9b9b9b;
      font-size: 18px;
      line-height: 1;
      margin-top: 1.5rem;
    }
    .position {
      font-size: 16px;
    }
    .skills {
      font-size: 14px;
    }
    .dates {
      color: #9b9b9b;
      font-size: 14px;
      margin: 0 0 0.5rem 0;
    }
    .description {
      font-size: 14px;
    }

    &:first-of-type .title {
      margin-top: 0;
    }
  }
`

export const AboutInfo = styled.div`
  position: relative;
  display: flex;
  ${props => props.theme.name === 'gaming' && 'flex-direction: column;'}
  ${props =>
    props.theme.name === 'blockchain' &&
    `
    margin-left: 0;
    margin-right: 0;
    background-color: #638596;
    min-height: 300px;
  `}

  ${props =>
    props.theme.name === 'corporate' &&
    `
    justify-content: center;
  `}

  ${media.md`
    flex-direction: row;
    ${props =>
      props.theme.name === 'corporate' &&
      `
      justify-content: flex-end;
    `}
  `}
`

export const Avatar = styled.div`
  position: relative;
  display: inline-block;

  .badge {
    ${badgeStyles}
    color: ${props => props.theme.colors.primary};
    padding: 0;
    font-family: ${props => props.theme.typography.fonts[1]};
    left: -6px;
    top: -13px;
  }

  ${props =>
    props.theme.name === 'blockchain' &&
    `
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: 100%;
  `}

  ${props =>
    props.theme.name === 'gaming' &&
    `
    display: flex;
    flex-direction: column;
  `}

  img {
    ${props => getBorders(props)}
    ${props => props.theme.name === 'blockchain' && 'max-height: 312px; max-width: 312px; margin-top: 50px;'}
  }

  ${media.md`
    img {
      ${props => props.theme.name === 'gaming' && 'width: 111%;'}
    }
  `}
`

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${props => props.theme.typography.fonts[1]};
  ${props => configName(props)}

  ${media.md`
    ${props => props.theme.name === 'corporate' && 'justify-content: flex-start;'}
  `}
`

export const ContactIcons = styled.div`
  a {
    display: flex;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    align-items: center;
  }

  span {
    font-size: 20px;
    font-family: ${props => props.theme.typography.fonts[0]};
  }

  ${props =>
    props.theme.name === 'blockchain' &&
    `
    span {
      font-size: 16px;
    }
  `}

  ${media.md`
    ${props =>
      props.theme.name === 'gaming' &&
      `
      span {
        font-size: 35px;
      }
    `}
  `}
`

export const Birthday = styled.div`
  span {
    font-family: 'Press Start 2P', cursive;
    color: #686868;
  }

  p {
    color: ${props => props.theme.colors.primary};
  }

  ${props =>
    props.theme.name === 'blockchain' &&
    `
    padding: 8px 15px;
    background-color: #f5f5f5;
    margin: 0;

    p {
      margin: 0;
      margin-left: 0.5rem;
      color: ${props.theme.colors.text};
    }

    span {
      color: ${props.theme.colors.primary};
    }
  `}

  ${media.md`
    ${props =>
      props.theme.name === 'gaming' &&
      `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}

    ${props =>
      props.theme.name === 'blockchain' &&
      `
      display: flex;
      flex-direction: row;
    `}
  `}
`

export const Logo = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 50px;
  color: ${props => props.theme.colors.primary};
`

export const Contact = styled.p`
  padding-top: 0.5rem;
  color: #999999;
  font-size: 18px;
  font-family: 'Roboto Condensed';
  line-height: 1.2;
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
  font-family: 'Source Code Pro';
`

export const XPTitle = styled(ListItem)`
  font-weight: 800;
  font-size: 16px;
`

export const XPDates = styled.span`
  margin: 0 0 0.5rem 0;
  font-size: 11px;
  font-family: 'Source Code Pro';
  color: #666666;
  font-weight: 400;
`

export const XPSkills = styled(ListItem)`
  color: #2e4440;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 14px;
  font-family: 'Source Code Pro';
  font-style: italic;
`

export const Col = styled.div``

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

export const NormalText = styled.div`
  font-size: 14px;
  font-family: 'Source Code Pro';
  color: #666666;
  font-weight: 400;
  margin-bottom: 1rem;
`

// projects

export const Wrapper = styled.div`
  width: 100%;
  color: ${props => props.theme.colors.text};
  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`
export const Item = styled.div`
  width: 100%;
`

export const TestimonialItem = styled.div`
  width: 100%;
  padding: 20px 24px 0;
  border-radius: 5px;
  border: 0;
`

export const Image = styled.div`
  position: relative;
  margin-bottom: 15px;
  background-size: cover;
  min-height: 420px;
  border-radius: 5px;

  .techs {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;

    left: auto;
    top: 0;
    right: 0;
    bottom: auto;

    background-color: #00000033;
    padding: 7px;
    border-radius: 5px 5px 0 0;

    .tech {
      border-radius: 5px;
      padding: 3px 5px;
      margin: 0 3px;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.body};
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`

export const TestimonialImage = styled.img`
  max-width: 100px;
  border-radius: 50%;
  margin: 15px auto 0;
  box-shadow: 0 8px 20px -4px #ccc;
  width: 100px;
  height: 100px;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-size: 140%;
  }

  .description {
    margin: 0.75rem;
    border-bottom: 1px none rgba(34, 34, 34, 0.08);
    text-align: center;
    min-height: 50px;
    font-size: 14px;
  }

  .techs {
    display: flex;
    margin-bottom: 15px;

    .tech {
      border-radius: 5px;
      padding: 3px 5px;
      margin: 0 3px;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.body};
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`

export const TestimonialDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h5 {
    color: ${props => props.theme.colors.primary};
    font-size: 21px;
    line-height: 1.3;

    span {
      font-size: 18px;
      color: ${props => props.theme.colors.text};
    }
  }

  p.card-text {
    font-size: 18px;
    color: ${props => props.theme.colors.text};
    z-index: 10;
    position: relative;
    padding-top: 1rem;

    &::before {
      content: "“";
      color: ${props => props.theme.colors.primary};
      font-family: georgia,serif;
      font-size: 6em;
      position: absolute;
      left: -16px;
      top: -52px;
      z-index: -1;
    }
  }
`

export const normalBorders = css`
  border: 2px solid ${props => props.theme.colors.primary};
`
export const Button = styled.a`
  ${props => (props.theme.name === 'gaming' ? dashedBorders : normalBorders)}

  color: ${props => props.theme.colors.primary};
  padding: 0.375rem 1.5rem;
  font-family: ${props => props.theme.typography.fonts[2]};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.body} !important;
  }
`
