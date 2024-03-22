const parseBlockQuotes = (text) => {
  let newText = text;
  while (newText.match(/^>/gm)) {
    newText = newText
      .replace(/^>(.*)/gm, '<blockquote>$1</blockquote>')
      .replace(/<\/blockquote>\n<blockquote>/g, '\n');
  }
  return newText;
};

export default parseBlockQuotes;
