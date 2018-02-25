// @flow
import * as React from 'react';
import Article from '../Article/Article.js'

type Props = {|
  foo: number,
  bar?: string,
|};

export default class LoginComponent extends React.Component<Props> {

  static defaultProps = {
    foo: 'test'
  }

  render() {
    return (
      <div>This is the login
    <div>{this.props.foo}</div>
    </div>
    );
  }
}
