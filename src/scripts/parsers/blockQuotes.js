const parseBlockQuotes = (text) => {
  let newText = text;
  while (newText.match(/^>/gm)) {
    newText = newText
      .replace(/^>(.*)/gm, `<blockquote>\n${'$1'.trimStart()}\n</blockquote>`)
      .replace(/\n{3,}/g, '\n\n')
      .replace(/<\/blockquote>\n*<blockquote>/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/^ {1,3}(?! )/gm, '\n');
  }
  return newText;
};

export default parseBlockQuotes;
