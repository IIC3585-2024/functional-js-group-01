const parseParagraphs = (text) => {
  let newText = text;
  newText = newText.replace(/\n{2,}/g, '</p>\n<p>');
  newText = `<p>${newText}</p>`;
  return newText;
};

export default parseParagraphs;
