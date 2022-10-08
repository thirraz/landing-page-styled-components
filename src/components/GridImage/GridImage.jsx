import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground/SectionBackground'
import { Heading } from '../Heading/Heading'
import { TextComponent } from '../TextComponent/TextComponent'

import { gridImages } from './content/images'

export const GridImage = () => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading uppercase>Gallery</Heading>
        <Styled.Grid>
          {gridImages.map((el) => (
            <Styled.GridElement key={el.id}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  )
}
