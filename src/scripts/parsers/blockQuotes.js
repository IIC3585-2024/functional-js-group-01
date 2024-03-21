const parseBlockQuotes = (text) => {
  let newText = text;
  newText = newText.replace(/^>(.*)\n/gm, '<blockquote>$1</blockquote>');
  newText = newText.replace(/<\/blockquote><blockquote>/g, '\n');
  return newText;
};

export default parseBlockQuotes;
