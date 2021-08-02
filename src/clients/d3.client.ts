import d3 from 'd3';

import { createSvgObjectUrl, downloadObjectUrl } from '../helpers';
import { TFreqNode } from '../types';

const DEFAULT_WIDTH = 954;
const DEFAULT_RADIUS = DEFAULT_WIDTH / 2;

export class D3Client {
  private static wrapperId = 'wrapper';

  constructor(private readonly svgId: string) {}

  /** render d3 radial tidy tree by given data */
  render(root: TFreqNode, width = DEFAULT_WIDTH, radius = DEFAULT_RADIUS) {}

  /** export pre-rendered d3 tree */
  export(filename: string) {
    if (!this.svgEle) {
      throw new Error('svg element not exists');
    }

    const objectUrl = createSvgObjectUrl(this.svgEle);
    downloadObjectUrl(objectUrl, filename);
  }

  get svg() {
    return d3.select(`#${this.svgId}`);
  }

  get svgEle() {
    return document.getElementsByTagName('svg')[0];
  }

  private createSvg() {
    const wrapper = d3.select(`#${D3Client.wrapperId}`);
    wrapper.append('svg').attr('id', this.svgId);
  }

  private removeSvg() {
    document.getElementById(D3Client.wrapperId).removeChild(this.svgEle);
  }
}
