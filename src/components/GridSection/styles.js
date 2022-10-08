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
    overflow-x: hidden;

    h2,h3{
      font-size: ${theme.font.sizes.medium};
      margin-bottom: 5rem;
      color: white;
    }

    p{
      font-size: 2rem;
    }
    
  `}
`

export const GridElement = styled.div`
  ${({ theme }) => css`
    width: 100%;

    ${HeadingContainer}{
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before{
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5.5rem;
      transform: rotate(5deg);
    }
  `}
`
