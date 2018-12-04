
import React from 'react'
import styled from 'styled-components'
import Typography, {TypographyProps} from '@material-ui/core/Typography'

const StyledTypography = styled(Typography as React.SFC<TypographyProps>)`
  padding-top:    10px;
  padding-right:  30px;
  padding-bottom: 10px;
  padding-left:   30px;
`

const AppTitle = () =>
  <StyledTypography
   variant="h4"
   color="textPrimary">pinvite</StyledTypography>

export default AppTitle