import { TFreqNode } from '../types';

/** check if given value is FreqNode */
export const isFreqNode = (value: unknown): value is TFreqNode => {
  if (!value) {
    return false;
  }

  const node = value as TFreqNode;
  if ('value' in node) {
    return typeof node.value === 'number';
  }
  if ('children' in node) {
    return node.children.every(isFreqNode);
  }

  return false;
};
