import * as Styled from './styles'
import { TextComponent } from '../TextComponent/TextComponent'
import { SectionContainer } from '../SectionContainer/SectionContainer'

export const Footer = () => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>
          Feito com ❤ por{' '}
          <Styled.Link href="https://github.com/thirraz" target="_blank">
            Thiago Morais
          </Styled.Link>
        </TextComponent>
      </SectionContainer>
    </Styled.Container>
  )
}
