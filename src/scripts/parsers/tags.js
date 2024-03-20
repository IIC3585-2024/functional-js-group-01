/* eslint-disable camelcase */
import mdHTMLTags from '../dicts/mdHTMLtags.js';
import mdRegex from '../dicts/mdRegex.js';

// ENVUELVE TEXTO HACIENDO CONVERSIÓN DE ETIQUETAS
const wrap = ({ tag = '', text }) => {
  const { open_tag, close_tag } = mdHTMLTags[tag];
  return `${open_tag}${text}${close_tag}`;
};

const parseTags = (text) => {
  let newText = text;
  const mdSymbols = Object.keys(mdRegex);
  mdSymbols.forEach((symbol) => {
    newText = newText.replace(mdRegex[symbol], wrap({ tag: symbol, text: '$1' }));
  });
  return newText;
};

export default parseTags;
