import _ from 'lodash';

export const removeHtmlTagSpaces = (html: string): string => {
  return _.trim(_.replace(html, />\s+</g, '><'));
};

export const parserPipe = (...fns: ((input: string) => string)[]) => {
  return (input: string) => fns.reduce((acc, fn) => fn(acc), input);
};
