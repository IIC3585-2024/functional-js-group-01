const parseNewLines = (text) => {
  const newText = text.replace(/\n{3,}/g, '\n\n');
  return newText;
};

export default parseNewLines;
