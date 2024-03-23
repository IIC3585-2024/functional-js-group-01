const parseCodeBlocks = (text) => {
  let newText = text;
  console.log(newText)
  newText = newText
    .replace(/^<fencedCode>([\s\S]+?)<\/fencedCode>/g, (match, captured) => captured.replace(/(.*)(?:\n|$)/g, '<pre><np>$1</np></pre>\n'))
    .replace(/<pre><np><\/np><\/pre>\n/g,'')
    .replace(/^ {4}(?![-*+0123456789.])([^-*+0123456789.]*?(?:\n|$))/gm, '<pre><np>$1</np></pre>\n')
    .replace(/<\/pre>\n<pre>/g, '\n');

  const fragments = newText.match(/(?<=<pre>)([^]+?)(?=<\/pre>)/gm);

  const convertedTexts = newText
    .match(/(?<=<pre>)([^]+?)(?=<\/pre>)/gm)
    ?.map((block) => `<code>\n${block
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
    }\n</code>`);

  fragments?.forEach((fragment, index) => {
    newText = newText.replace(fragment, convertedTexts[index]);
  });

  console.log(newText)
  return newText;
};

export default parseCodeBlocks;
