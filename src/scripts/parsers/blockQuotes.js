const parseBlockQuotes = (text) => {
  let newText = text;
  newText = newText.replace(/<\/blockquote>(\n|\n>\n)<blockquote>/g, '');
  newText = newText.replace(/<p><blockquote>/g, '<blockquote>');
  newText = newText.replace(/<\/blockquote><\/p>/g, '</blockquote>');
  return newText;
};

export default parseBlockQuotes;
