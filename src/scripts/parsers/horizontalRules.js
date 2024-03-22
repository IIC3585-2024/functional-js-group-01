const parseHorizontalRules = (text) => {
  const newText = text
    .replace(/^\n(\*{3,}|-{3,}|_{3,})\n/gm, '<hr>\n');
  return newText;
};

export default parseHorizontalRules;
