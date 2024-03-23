const parseWhitespace = (text) => {
  const newText = text
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^ *\s$/gm, '\n');
  return newText;
};

export default parseWhitespace;
