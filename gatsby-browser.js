import React from "react"
import {AuthStatusProvider, AuthStatusConsumer} from './src/context/AuthStatusContext'
import {RequestProvider} from './src/context/RequestContext'

export const wrapPageElement = ({ element, props }) => {
  return (
    <AuthStatusProvider>
      <RequestProvider>
        {element}
      </RequestProvider>
    </AuthStatusProvider>
  )
}
