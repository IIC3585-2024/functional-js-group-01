const assignTag = (text) => {
  let level = 0;
  const result = [];

  result.push('<ul>');
  text.forEach((line) => {
    const matches = line.match(/^(\s*)<li>(.*)<\/li>$/);
    if (matches) {
      const indent = matches[1].length / 4; // 4 espacios por nivel de indentación
      let diff = indent - level;

      while (diff > 0) {
        result.push('<ul>');
        level += 1;
        diff -= 1;
      }

      while (diff < 0) {
        result.push('</ul>');
        level -= 1;
        diff += 1;
      }

      result.push(line);
    }
  });

  while (level > 0) {
    result.push('</ul>');
    level -= 1;
  }

  result.push('</ul>');
  return result.join('\n');
};

const parseUnordLists = (text) => {
  const convertedTexts = text
    .replace(/^( *)[-*+](.*)/gm, '$1<li>$2</li>')
    .split('\n\n')
    .filter((line) => line.match(/^<li>.*<\/li>/))
    .map((line) => line.split('\n'))
    .map((txt) => assignTag(txt));

  const fragments = text
    .split('\n\n')
    .filter((line) => line.match(/^\s*[-*+].*/))
    .map((line) => line.split('\n'))
    .map((txt) => txt.join('\n'));

  let newText = text;
  fragments.forEach((fragment, i) => {
    newText = newText.replace(fragment, convertedTexts[i]);
  });

  return newText;
};

export default parseUnordLists;
