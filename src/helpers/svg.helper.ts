export const createSvgObjectUrl = (svgEle: SVGSVGElement): string => {
  const data = svgEle.outerHTML;
  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  const blob = new Blob([preface, data], {
    type: 'image/svg+xml;charset=utf-8',
  });

  return URL.createObjectURL(blob);
};
