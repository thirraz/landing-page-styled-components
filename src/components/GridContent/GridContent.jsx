import * as Styled from './styles'
import { gridContentTitle } from './content/title'
import { gridContentText } from './content/text'

import { Heading } from '../Heading/Heading'
import { SectionBackground } from '../SectionBackground/SectionBackground'
import { TextComponent } from '../TextComponent/TextComponent'

export const GridContent = () => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading uppercase={true} as="h2">
          {gridContentTitle}
        </Heading>
        <Styled.Html>
          <TextComponent>{gridContentText}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  )
}
