import styled, { css } from 'styled-components'

export const Container = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    outline: 2px solid ${theme.colors.secondaryColor};
    outline-offset: 2px;
    bottom:2rem;
    right: 2rem;
    z-index: 10;
    position: fixed;

    @media ${theme.mediaQuery.lteMedium}{
      display: none;
    }
  `}
`
