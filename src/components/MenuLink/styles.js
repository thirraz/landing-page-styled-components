import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme, visible }) => css`
    position: absolute;
    z-index: 10;
    top: 2rem;
    right: 3rem;
    width: 3rem;
    height: 3rem;
    background: ${theme.colors.secondaryColor};
    color: ${theme.colors.white};
    border: none;
    border-radius: 20%;
    pointer-events: ${visible ? 'none' : 'all'};
      
    /* button > svg */
    > svg{
        width: 2.5rem;
        height: 2.5rem;
      }

    @media ${theme.mediaQuery.gteMedium}{
      display: none;
    }
  `}

`
const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`

export const Container = styled.div`
  ${({ theme, visible }) => css`
    display: flex;
    justify-content: space-around;
    padding: 0.3rem 1.5rem;
    align-items: center;
    
    img{
      width: 110px;
      max-width: 110px;
      margin-bottom: 1.9rem;
      padding-top: 2rem;
    }
    
  @media ${theme.mediaQuery.lteMedium}{
    visibility: hidden;
    opacity: 0;
    ${visible && menuVisible(theme)}

    &{ 
      flex-flow: column nowrap;
      overflow-y: auto;
      padding: ${theme.spacings.large} 0;
      position: fixed;
      z-index: 5;
      width: 100vw;
      height: 100vh;
      border-bottom: ${theme.colors.mediumGray};
      background: ${theme.colors.white};
      transition: all 300ms ease-in-out;
  `}
`
