/* eslint-disable camelcase */
import mdToHTML from './tags.js';
import mdToRegex from './regex.js';

// ENVUELVE TEXTO HACIENDO CONVERSIÓN DE ETIQUETAS
const wrap = ({ tag = '', text }) => {
  const { open_tag, close_tag } = mdToHTML[tag];
  return `${open_tag}${text}${close_tag}`;
};

// REEMPLAZA ETIQUETAS INTERNAS (bold, italic, bold-italic, code, br, h's)
const wrapInLine = (text) => {
  const mdSymbols = Object.keys(mdToRegex);
  let newText = text;
  mdSymbols.forEach((symbol) => {
    newText = newText.replace(mdToRegex[symbol], wrap({ tag: symbol, text: '$1' }));
  });
  newText = newText.replace(/(<code>.*?)<code>(.*?)<\/code>(.*?<\/code>)/g, '$1 `$2` $3');
  return newText;
};

export default wrapInLine;
