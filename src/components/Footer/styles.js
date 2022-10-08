import styled, { css } from 'styled-components'
import { Container as TextContainer } from '../TextComponent/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 2rem;

    ${TextContainer}{
      display: block;
      margin: 7rem auto;
      font-size: ${theme.font.sizes.small};
      text-align: center;
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
  `}
`
