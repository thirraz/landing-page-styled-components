import P from 'prop-types'

import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground/SectionBackground'
import { Heading } from '../Heading/Heading'
import { TextComponent } from '../TextComponent/TextComponent'

import { gridSectionTitle } from './content/title'
import { gridSectionText } from './content/text'
import { grid } from './content/grid'

export const GridSection = () => {
  return (
    <SectionBackground background>
      <Styled.Container>
        <Heading uppercase>{gridSectionTitle}</Heading>
        <TextComponent>{gridSectionText}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.id}>
              <Heading as="h3">{el.title}</Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  )
}
