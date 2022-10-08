import styled, { css } from 'styled-components'

export const Container = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  ${({ theme }) => css`
    & > a{
      font-size: ${({ theme }) => theme.font.sizes.small};
      text-decoration: none;
      display: block;
      padding: ${theme.spacings.small} 0;
      color: ${theme.colors.primaryColor};
      position: relative;
      margin-left: 4rem;
    }
    /* nav > a */
    & > a::after{
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    & > a:hover::after{
      left: 25%;
      width: 50%;
    }

    @media ${theme.mediaQuery.lteMedium}{
      flex-flow: column wrap;
      align-content: center;
      height: 100vh;
    }
  `}
  .logo{
    width: 90px;
  }
`
