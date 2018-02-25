// @flow
import * as React from 'react';
type Props = {|
  title: string,
  body: string,
|}
export default function Article({ title, body }: Props) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  );
}