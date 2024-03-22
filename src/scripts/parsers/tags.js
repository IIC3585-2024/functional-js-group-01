/* eslint-disable camelcase */
import mdHTMLTags from '../dicts/mdHTMLTags.js';
import mdRegex from '../dicts/mdRegex.js';

// ENVUELVE TEXTO HACIENDO CONVERSIÓN DE ETIQUETAS
const wrap = ({ tag = '', text }) => {
  const { open_tag, close_tag, f = (x) => x } = mdHTMLTags[tag];
  return `${open_tag}${f(text)}${close_tag}`;
};

const parseTags = (text) => {
  let newText = text;
  const mdSymbols = Object.keys(mdRegex);
  mdSymbols.forEach((symbol) => {
    newText = newText.replace(mdRegex[symbol], (match, p1) => wrap({ tag: symbol, text: p1 }));
  });
  return newText;
};

export default parseTags;
