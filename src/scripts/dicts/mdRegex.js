/* eslint-disable no-useless-escape */
/* eslint-disable quote-props */
// DICCIONARIO MARKDOWN TO REGEX
const mdRegex = {
  '***': /\*\*\*(.*?)\*\*\*/g,
  '___': /\_\_\_(.*?)\_\_\_/g,
  '__*': /\_\_\*(.*?)\*\_\_/g,
  '**_': /\*\*\_(.*?)\_\*\*/g,

  '**': /\*\*(.*?)\*\*/g,
  '__': /\_\_(.*?)\_\_/g,

  '*': /\*(.*?)\*/g,
  '_': /\_(.*?)\_/g,

  '``': /\`\`(.*?)\`\`/g,
  '`': /\`(.*?)\`/g,

  '  \n': /() + +$/gm,

  '==': /(.+?)\n+={2,}/g,
  '--': /(.+?)\n+-{2,}/g,
};

export default mdRegex;
