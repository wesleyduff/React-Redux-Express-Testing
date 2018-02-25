// @flow
import * as React from 'react';
import Article from '../Article/Article.js';

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
      <div>
        <h1>Test</h1>
        <Article title={'Test'} body="test body" />
        <div className="foo bar">Hello</div>
      </div>
    );
  }
}
