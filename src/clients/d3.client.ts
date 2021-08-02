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
  export(filename: string) {
    const { outerHTML: data } = this.checkSvgEleExists();

    const blob = new Blob(['<?xml version="1.0" standalone="no"?>\r\n', data], {
      type: 'image/svg+xml;charset=utf-8',
    });
    const objectUrl = URL.createObjectURL(blob);

    const aEle = document.createElement('a');
    aEle.href = objectUrl;
    aEle.download = filename;
    document.body.appendChild(aEle);
    aEle.click();
    document.body.removeChild(aEle);
  }

  get svg() {
    return d3.select(`#${this.svgId}`);
  }

  get svgEle() {
    return document.getElementsByTagName('svg')[0];
  }

  private checkSvgEleExists() {
    if (!this.svgEle) {
      throw new Error('svg element not exists');
    }

    return this.svgEle;
  }

  private createSvg() {
    const wrapper = d3.select(`#${WRAPPER_ID}`);
    wrapper.append('svg').attr('id', this.svgId);
  }

  private removeSvg() {
    this.checkSvgEleExists();

    document.getElementById('wrapper').removeChild(this.svgEle);
  }
}
