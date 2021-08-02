export const downloadObjectUrl = (
  objectUrl: string,
  filename: string
): void => {
  const aEle = document.createElement('a');

  aEle.href = objectUrl;
  aEle.download = filename;

  document.body.appendChild(aEle);
  aEle.click();
  document.body.removeChild(aEle);
};
