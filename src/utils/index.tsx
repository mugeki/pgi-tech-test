import { Fragment, ReactNode } from 'react';

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatNewLines(str: string): ReactNode {
  const lines = str.split('\n');
  const formatted = lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
  return formatted;
}
