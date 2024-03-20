const parseParagraphs = (text) => {
  let newText = text;
  newText = newText.replace(/\n{2,}/g, '</p><p>');
  newText = `<p>${newText}</p>`;
  return newText;
};

export default parseParagraphs;
