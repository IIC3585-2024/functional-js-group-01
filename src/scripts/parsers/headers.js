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
    newText = newText.replace(mdHeaderRegex[symbol], `$3${wrap({ tag: symbol, text: '$4' })}`);
  });

  const headers = ['1', '2', '3', '4', '5', '6'];
  headers.forEach((h) => {
    newText = newText.replace(new RegExp(`<p><h${h}>`, 'g'), `<h${h}>`);
    newText = newText.replace(new RegExp(`</h${h}></p>`, 'g'), `</h${h}>`);
  });
  return newText;
};

export default parseHeaders;
