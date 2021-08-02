import d3 from 'd3';

import { TFreqNode } from '../types';

const WRAPPER_ID = 'wrapper';

const DEFAULT_WIDTH = 954;
const DEFAULT_RADIUS = DEFAULT_WIDTH / 2;

export class D3Client {
  constructor(private readonly svgId: string) {}

  /** render d3 radial tidy tree by given data */
  render(root: TFreqNode, width = DEFAULT_WIDTH, radius = DEFAULT_RADIUS) {}

  /** export pre-rendered d3 tree */
  export() {}

  get svg() {
    return d3.select(`#${this.svgId}`);
  }

  get svgEle() {
    return document.getElementsByTagName('svg')[0];
  }

  private createSvg() {
    const wrapper = d3.select(`#${WRAPPER_ID}`);
    wrapper.append('svg').attr('id', this.svgId);
  }

  private removeSvg() {
    if (!this.svgEle) {
      throw new Error('svg element not exists');
    }
    document.getElementById('wrapper').removeChild(this.svgEle);
  }
}
