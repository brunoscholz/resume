import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.colors.body};
    color: ${({theme}) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography[0]};
    transition: all 0.50s linear;
  }
`

const makeResponsiveComponent = (rulesets, tagName = 'div') =>
  styled(tagName)`
    ${buildStyles(rulesets)}
  `

const buildStyles = rulesets =>
  rulesets.reduce(
    (cssString, { constraint, width, rules }) =>
      `${cssString} @media (${constraint}-width: ${width}) { ${rules} }`,
    '',
  )

export const hideAt = breakpoints => {
  const rulesets = Object.entries(breakpoints).reduce(
    (rulesets, [constraint, width]) => [
      ...rulesets,
      {
        constraint,
        width,
        rules: `display: none;`,
      },
    ],
    [],
  )

  return makeResponsiveComponent(rulesets)
}

export const Breakpoint = ({ min, max, children }) => {
  const Component = hideAt({ min, max })
  return <Component>{children}</Component>
}

export default makeResponsiveComponent