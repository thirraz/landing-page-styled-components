import P from 'prop-types'
import * as Styled from './styles'

export const Heading = ({
  children,
  colorDark = true,
  uppercase = false,
  as = 'h1',
}) => {
  return (
    <Styled.Title colorDark={colorDark} uppercase={uppercase} as={as}>
      {children}
    </Styled.Title>
  )
}

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  uppercase: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}
