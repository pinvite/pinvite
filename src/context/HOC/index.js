import React from 'react';
import { AuthStatusContext } from '../AuthStatusContext';
import { RequestConsumer } from '../RequestContext';

export function withAuthStatusContext(Component) {
    return function WrapperComponent(props) {
        return (
            <AuthStatusContext.Consumer>
                {state => <Component {...props} context={state} />}
            </AuthStatusContext.Consumer>
        );
    };
}

export function withRequestContext(Component) {
  return function WrapperComponent(props) {
      return (
          <RequestConsumer>
              {state => <Component {...props} requestContext={state} />}
          </RequestConsumer>
      );
  };
}