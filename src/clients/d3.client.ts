import { TFreqNode } from '../types';

const DEFAULT_WIDTH = 954;
const DEFAULT_RADIUS = DEFAULT_WIDTH / 2;

export class D3Client {
  constructor(private readonly svgId: string) {}

  render(root: TFreqNode, width = DEFAULT_WIDTH, radius = DEFAULT_RADIUS) {}

  export() {}
}
