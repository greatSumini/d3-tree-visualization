export const cleanFileData = (input: string) =>
  input.replace(/u'(?=[^:]+')/g, "'");
