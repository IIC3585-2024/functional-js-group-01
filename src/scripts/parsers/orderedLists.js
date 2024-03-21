const assignTag = (texto) => {
  let level = 0;
  const result = [];

  result.push('<ol>');
  texto.forEach((line) => {
    const matches = line.match(/^(\s*)<li>(.*)<\/li>$/);
    if (matches) {
      const indent = matches[1].length / 4; // 4 espacios por nivel de indentación
      let diff = indent - level;

      while (diff > 0) {
        result.push('<ol>');
        level += 1;
        diff -= 1;
      }

      while (diff < 0) {
        result.push('</ol>');
        level -= 1;
        diff += 1;
      }

      result.push(line);
    }
  });

  while (level > 0) {
    result.push('</ol>');
    level -= 1;
  }

  result.push('</ol>');
  return result.join('\n');
};

const parseOrdLists = (text) => {
  const convertedTexts = text
    .replace(/^(\s*)\d+\.(.*)/gm, '$1<li>$2</li>')
    .split('\n\n')
    .filter((line) => line.match(/^<li>.*<\/li>/))
    .map((line) => line.split('\n'))
    .map((txt) => assignTag(txt));

  const fragments = text
    .split('\n\n')
    .filter((line) => line.match(/^\s*\d+.*/))
    .map((line) => line.split('\n'))
    .map((txt) => txt.join('\n'));

  let newText = text;
  for (let i = 0; i < fragments.length; i += 1) {
    newText = newText.replace(fragments[i], convertedTexts[i]);
  }

  return newText;
};

export default parseOrdLists;
