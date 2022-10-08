import styled, { css } from 'styled-components'
import { Title as HeadingContainer } from '../Heading/styles'
import { Container as TextContainer } from '../TextComponent/styles'

export const Container = styled.div`
  
  ${({ theme }) => css`
    text-align:center;
    p{
      margin: 0 auto;
    }
    ${TextContainer}{
      margin-bottom: ${theme.spacings.xhuge};

    }
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    text-align: left;
    counter-reset: grid-counter;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};

    h1{
      font-size: ${theme.font.sizes.medium};
      margin-bottom: 5rem;
    }

    p{
      font-size: 2rem;
    }
  `}
`

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    transition: all 300ms ease-in-out;

    /* Image:hover */
    &:hover{
      transform: scale(1.2) rotate(10deg);
    }
  `}
`
