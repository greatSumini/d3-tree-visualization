import React, { useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

import exampleFile from '../example.json';

const WIDTH = 954;
const RADIUS = WIDTH / 2;

const tree = d3
  .tree()
  .size([2 * Math.PI, RADIUS])
  .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

export default function Home() {
  const [inputFile, setInputFile] = useState(null);
  const [filename, setFilename] = useState('tree.svg');
  const [expandRate, setExpandRate] = useState(1);

  const loadFile = (event) => {
    const reader = new FileReader();
    reader.onload = (sender) => {
      const result = JSON.parse(
        sender.target.result.replace(/u'(?=[^:]+')/g, "'")
      );
      setInputFile(result);
    };
    reader.readAsText(event.target.files[0]);
    setFilename(event.target.files[0].name.replace('.json', '.svg'));
  };

  const render = (file) => {
    if (!file && !inputFile) {
      alert('파일이 업로드되지 않았습니다.');
      return;
    }

    document
      .getElementById('wrapper')
      .removeChild(document.getElementById('svg'));
    const wrapper = d3.select('#wrapper');
    wrapper.append('svg').attr('id', 'svg');

    const svg = d3.select('#svg');

    const data = d3
      .hierarchy(file || inputFile)
      .sort((a, b) => d3.ascending(a.data.name, b.data.name));
    const root = tree(data);

    svg
      .append('g')
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(root.links())
      .join('path')
      .attr(
        'd',
        d3
          .linkRadial()
          .angle((d) => d.x)
          .radius((d) => d.y * expandRate)
      );

    svg
      .append('g')
      .selectAll('circle')
      .data(root.descendants())
      .join('circle')
      .attr(
        'transform',
        (d) => `
        rotate(${(d.x * 180) / Math.PI - 90})
        translate(${d.y * expandRate},0)
      `
      )
      .attr('fill', (d) => (d.children ? '#555' : '#999'))
      .attr('r', 2.5 * expandRate);

    svg
      .append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', 3)
      .selectAll('text')
      .data(root.descendants())
      .join('text')
      .attr(
        'transform',
        (d) => `
        rotate(${(d.x * 180) / Math.PI - 90}) 
        translate(${d.y * expandRate},0) 
        rotate(${d.x >= Math.PI ? 180 : 0})
      `
      )
      .attr('dy', '0.31em')
      .attr('x', (d) => (d.x < Math.PI === !d.children ? 6 : -6))
      .attr('text-anchor', (d) =>
        d.x < Math.PI === !d.children ? 'start' : 'end'
      )
      .text((d) => d.data.name)
      .clone(true)
      .lower()
      .attr('stroke', 'white');

    svg
      .attr('viewBox', autoBox)
      .attr('xmlns', 'http://www.w3.org/2000/svg')
      .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
      .node();
  };

  const autoBox = () => {
    const ele = document.getElementById('svg');
    const { x, y, width, height } = ele.getBBox();
    return [x, y, width, height];
  };

  const saveSvg = () => {
    const svgEl = document.getElementById('svg');
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {
      type: 'image/svg+xml;charset=utf-8',
    });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Wrapper id="wrapper">
      <StyledLabel htmlFor="file">upload file</StyledLabel>
      <StyledInput id="file" type="file" accept=".json" onChange={loadFile} />
      <StyledLabel htmlFor="number">expand</StyledLabel>
      <StyledInput
        id="number"
        type="number"
        value={expandRate}
        onChange={(e) => {
          setExpandRate(e.target.value);
        }}
      />
      <button
        onClick={() => {
          render();
        }}
      >
        render
      </button>
      <button
        onClick={() => {
          render(exampleFile);
        }}
      >
        render example
      </button>
      <button onClick={saveSvg}>save file</button>
      <svg id="svg" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLabel = styled.label`
  font-weight: 700;
`;

const StyledInput = styled.input`
  margin-bottom: 2rem;
`;
