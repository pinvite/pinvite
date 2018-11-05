import React from 'react';
import { AuthStatusConsumer } from '../AuthStatusContext';
import { RequestConsumer } from '../RequestContext';

export function withAuthStatusContext(Component) {
    return function WrapperComponent(props) {
        return (
            <AuthStatusConsumer>
                {state => <Component {...props} context={state} />}
            </AuthStatusConsumer>
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