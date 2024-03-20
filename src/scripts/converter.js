/* eslint-disable camelcase */
import mdToHTML from './tags.js';
import mdToRegex from './regex.js';

// ENVUELVE TEXTO HACIENDO CONVERSIÓN DE ETIQUETAS
const wrap = ({ tag = '', text }) => {
  const { open_tag, close_tag } = mdToHTML[tag];
  return `${open_tag}${text}${close_tag}`;
};

const parseTags = (text) => {
  let newText = text;
  const mdSymbols = Object.keys(mdToRegex);
  mdSymbols.forEach((symbol) => {
    newText = newText.replace(mdToRegex[symbol], wrap({ tag: symbol, text: '$1' }));
  });
  return newText;
};

const parseBlocks = (text) => {
  let newText = text;
  newText = newText.replace(/(<code>.*?)<code>(.*?)<\/code>(.*?<\/code>)/g, '$1 `$2` $3');
  newText = newText.replace(/<\/blockquote>(\n|\n>\n)<blockquote>/g, '');
  newText = newText.replace(/<p><blockquote>/g, '<blockquote>');
  newText = newText.replace(/<\/blockquote><\/p>/g, '</blockquote>');
  return newText;
};

const parseParagraphs = (text) => {
  let newText = text;
  newText = newText.replace(/\n{2,}/g, '</p><p>');
  newText = `<p>${newText}</p>`;
  return newText;
};

const parseHeaders = (text) => {
  let newText = text;
  const headers = ['1', '2', '3', '4', '5', '6'];
  headers.forEach((h) => {
    newText = newText.replace(new RegExp(`<p><h${h}>`, 'g'), `<h${h}>`);
    newText = newText.replace(new RegExp(`</h${h}></p>`, 'g'), `</h${h}>`);
  });
  return newText;
};

// REEMPLAZA ETIQUETAS INTERNAS (bold, italic, bold-italic, code, br, h's)
const wrapInLine = (text) => {
  let newText = parseTags(text);
  newText = parseParagraphs(newText);
  newText = parseBlocks(newText);
  newText = parseHeaders(newText);
  return newText;
};

export default wrapInLine;
