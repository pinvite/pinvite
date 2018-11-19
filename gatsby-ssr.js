/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import {AuthStatusProvider} from './src/context/AuthStatusContext'
import {RequestProvider} from './src/context/RequestContext'

export const wrapPageElement = ({ element, props }) => {
  return (
    <AuthStatusProvider>
      <RequestProvider>
        <div {...props}>{element}</div>
      </RequestProvider>
    </AuthStatusProvider>
  )
}
