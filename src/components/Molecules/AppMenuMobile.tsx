import { Button, Icon, Menu, MenuItem } from '@material-ui/core'
import React from 'react'
import HowToUseLink from '../Atoms/HowToUseLink'
import TermsAndConditionsLink from '../Atoms/TermsAndConditionsLink'

interface AppMenuMobileProps {
  anchorEl: any
  handleMenuOpen: any
  handleMenuClose: any
}

const AppMenuMobile: React.SFC<AppMenuMobileProps> = props => (
  <React.Fragment>
    <Button onClick={props.handleMenuOpen}>
      <Icon>menu</Icon>
    </Button>
    <Menu
      anchorEl={props.anchorEl}
      open={Boolean(props.anchorEl)}
      onClose={props.handleMenuClose}
    >
      <MenuItem>
        <TermsAndConditionsLink />
      </MenuItem>
      <MenuItem>
        <HowToUseLink />
      </MenuItem>
    </Menu>
  </React.Fragment>
)

export default AppMenuMobile
