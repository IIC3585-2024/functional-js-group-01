const transformEscapeChars = (text) => {
  const newText = text
    .replace(/\\\\/g, '&bs;')
    .replace(/\\`/g, '&bt;')
    .replace(/\\\*/g, '&at;')
    .replace(/\\_/g, '&us;')
    .replace(/\\{/g, '&lcb;')
    .replace(/\\}/g, '&rcb;')
    .replace(/\\\[/g, '&lb;')
    .replace(/\\\]/g, '&rb;')
    .replace(/\\\(/g, '&lp;')
    .replace(/\\\)/g, '&rp;')
    .replace(/\\#/g, '&sh;')
    .replace(/\\>/g, '&rab;')
    .replace(/\\</g, '&lab;')
    .replace(/\\\+/g, '&pl;')
    .replace(/\\-/g, '&mi;')
    .replace(/\\\./g, '&dot;')
    .replace(/\\!/g, '&ex;')
    .replace(/\\\|/g, '&pip;')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^ *\s$/gm, '\n');

  return newText;
};

const parseEscapeChars = (text) => {
  const newText = text
    .replace(/&bs;/g, '\\')
    .replace(/&bt;/g, '`')
    .replace(/&at;/g, '*')
    .replace(/&us;/g, '_')
    .replace(/&lcb;/g, '{')
    .replace(/&rcb;/g, '}')
    .replace(/&lb;/g, '[')
    .replace(/&rb;/g, ']')
    .replace(/&lp;/g, '(')
    .replace(/&rp;/g, ')')
    .replace(/&sh;/g, '#')
    .replace(/&rab;/g, '&gt;')
    .replace(/&lab;/g, '&lt;')
    .replace(/&pl;/g, '+')
    .replace(/&mi;/g, '-')
    .replace(/&dot;/g, '.')
    .replace(/&ex;/g, '!')
    .replace(/&pip;/g, '|');

  return newText;
};

export { transformEscapeChars, parseEscapeChars };
