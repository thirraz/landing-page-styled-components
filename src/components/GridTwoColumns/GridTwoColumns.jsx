import P from 'prop-types'
import * as Styled from './styles'

import { SectionBackground } from '../SectionBackground/SectionBackground'
import { Heading } from '../Heading/Heading'
import { TextComponent } from '../TextComponent/TextComponent'

import { title } from './content/title'
import { text } from './content/text'
import mySVG from '../../assets/img/javascript.svg'

export const GridTwoColumns = ({ background }) => {
  return (
    <SectionBackground background>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>

        <Styled.ImageContainer>
          <img src={mySVG} alt="landing page svg" />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  )
}

GridTwoColumns.propTypes = {
  background: P.bool,
}
