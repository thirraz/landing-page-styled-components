import styled, { css } from 'styled-components'

export const Title = styled.h1`
${({ theme, colorDark, uppercase }) => css`
  color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  text-transform: ${uppercase ? 'uppercase' : 'none'};

  @media ${theme.mediaQuery.lteMedium}{
    font-size: ${theme.font.sizes.xlarge};
  }
  `}


`
