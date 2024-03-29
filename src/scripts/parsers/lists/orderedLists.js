const assignTag = (text) => {
  let level = 0;
  const result = [];

  result.push('<ol>');
  text.forEach((line) => {
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
    .replace(/^( *)(\d+\.)(.*)/gm, '$1<li>$3</li>')
    .split('\n\n')
    .filter((line) => line.match(/^<li>.*<\/li>/))
    .map((line) => line.split('\n'))
    .map((txt) => assignTag(txt));

  const fragments = text
    .split('\n\n')
    .filter((line) => line.match(/^(?!\n)\s*(\d+\.)+.*/))
    .map((line) => line.split('\n'))
    .map((txt) => txt.join('\n'));

  let newText = text;
  fragments.forEach((fragment, i) => {
    newText = newText.replace(fragment, convertedTexts[i]);
  });

  return newText;
};

export default parseOrdLists;
