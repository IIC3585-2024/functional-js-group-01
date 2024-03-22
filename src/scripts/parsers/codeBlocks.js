const parseCodeBlocks = (text) => {
  let newText = text;
  newText = newText.replace(/<\/code><\/pre>\n<pre><code>/g, '\n');
  return newText;
};

export default parseCodeBlocks;
