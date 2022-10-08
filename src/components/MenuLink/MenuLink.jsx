import * as Styled from './styles'
import { useState } from 'react'

import { LogoLink } from '../LogoLink/LogoLink'
import { NavLink } from '../NavLink/NavLink'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

export const MenuLink = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Open/Close menu" />
        ) : (
          <MenuIcon aria-label="Open/Close menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <LogoLink />
        <NavLink />
      </Styled.Container>
    </>
  )
}
