// @flow

/** LoginComponent : Contains the UI and triggers to log in a user
 * @returns React Component
 */
import * as React from 'react';

type Props = {|
  foo: number,
  bar?: string,
|};

type State = {|
  name: string
|};

export default class LoginComponent extends React.Component<Props, State> {
  /**
   * Represents the default state of this component
   * @param {string} foo - Testing for right now
   */
  static defaultProps = {
    foo: 'test'
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <div className="foo bar">Hello</div>
      </div>
    );
  }
}
