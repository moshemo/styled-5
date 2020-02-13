import React from 'react'
import styled from 'styled-components'
import mainTheme from 'Themes/main/theme'

const {
  breakpoints: { md },
  colors: { grey },
} = mainTheme

export const AdHero = styled.section`
  text-align: center;

  .subtitle {
    margin-bottom: 0;
  }

  .title {
    font-size: 32px;
    font-weight: 300;

    @media (min-width: ${md}) {
      font-size: 48px;
    }
  }

  .text {
    color: ${grey.darker};
    max-width: 70%;
    margin: 0 auto;
  }
`
