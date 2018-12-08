import React from 'react'
import Typography, { TypographyProps } from '@material-ui/core/Typography'
import styled from 'styled-components'

import Atom from './Atom'

const TypographyStyled = styled(Typography as React.SFC<TypographyProps>)`
&& {
  font-family: 'Fredoka One', cursive;
}
`

const AppName = () =>
  <Atom>
    <TypographyStyled variant="h4" color="textPrimary">pinvite</TypographyStyled>
  </Atom>

export default AppName