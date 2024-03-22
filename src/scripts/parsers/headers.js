/* eslint-disable camelcase */
import mdHTMLHeaderTags from '../dicts/header/mdHTMLHeaderTags.js';
import mdHeaderRegex from '../dicts/header/mdHeaderRegex.js';

const wrap = ({ tag = '', text }) => {
  const { open_tag, close_tag } = mdHTMLHeaderTags[tag];
  return `${open_tag}${text}${close_tag}`;
};

const parseHeaders = (text) => {
  let newText = text;
  const mdSymbols = Object.keys(mdHeaderRegex);
  mdSymbols.forEach((symbol) => {
    newText = newText.replace(mdHeaderRegex[symbol], `$1${wrap({ tag: symbol, text: '$2' })}$3`);
  });

  return newText;
};

export default parseHeaders;
