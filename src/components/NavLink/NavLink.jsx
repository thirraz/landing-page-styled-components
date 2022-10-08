import * as Styled from './styles'
import { LogoLink } from '../LogoLink/LogoLink'

export const NavLink = () => {
  return (
    <>
      <Styled.Container>
        <a href="intro" target="_self" rel="noopener noreferrer">
          responsive
        </a>
        <a href="#" target="_self" rel="noopener noreferrer">
          landing
        </a>
        <a href="#" target="_self" rel="noopener noreferrer">
          page
        </a>
        <a
          href="https://github.com/thirraz"
          target="_blank"
          rel="noopener noreferrer"
        >
          my github
        </a>
      </Styled.Container>
    </>
  )
}
