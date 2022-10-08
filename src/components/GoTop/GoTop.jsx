import * as Styled from './styles'
import { ArrowDropUp as ArrowTop } from '@styled-icons/material-outlined/ArrowDropUp'

export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="go to top" title='"go to top"'>
      <ArrowTop />
    </Styled.Container>
  )
}
