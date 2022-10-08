import styled, { css } from 'styled-components'

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${({ theme }) => theme.font.sizes.medium};
    max-width: 64rem;
  `}
`
