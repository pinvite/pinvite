import React from "react"
import {AuthStatusProvider, AuthStatusConsumer} from './src/context/AuthStatusContext'
import {RequestProvider} from './src/context/RequestContext'

export const wrapPageElement = ({ element, props }) => {
  return (
    <AuthStatusProvider>
      <RequestProvider>
        <AuthStatusConsumer>
        {(context) => (
          React.Children.map(element, (child, index) => {
            return React.cloneElement(child, {
              context: context.result
            });
          })
        )}
        </AuthStatusConsumer>
      </RequestProvider>
    </AuthStatusProvider>
  )
}
