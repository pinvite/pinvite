import React from 'react'
import HowToUseLink from '../Atoms/HowToUseLink'
import TermsAndConditionsLink from '../Atoms/TermsAndConditionsLink'

const AppMenuDesktop: React.SFC<{}> = props => (
  <React.Fragment>
    <TermsAndConditionsLink />
    <HowToUseLink />
  </React.Fragment>
)

export default AppMenuDesktop
