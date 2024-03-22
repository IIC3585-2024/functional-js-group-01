import parseNewLines from './parsers/newLines.js';
import parseTags from './parsers/tags.js';
import parseOrdLists from './parsers/orderedLists.js';
import parseUnordLists from './parsers/unorderedLists.js';
import parseParagraphs from './parsers/paragraphs.js';
import parseCodeBlocks from './parsers/codeBlocks.js';
import parseBlockQuotes from './parsers/blockQuotes.js';
import parseHeaders from './parsers/headers.js';
import parseLinks from './parsers/links.js';
import parseImages from './parsers/images.js';
import parseHorizontalRules from './parsers/horizontalRules.js';

// REEMPLAZA ETIQUETAS INTERNAS (bold, italic, bold-italic, code, br, h's)
const convertMdToHTML = (text) => {
  let newText = parseNewLines(text);
  newText = parseHorizontalRules(newText);
  newText = parseTags(newText);
  newText = parseCodeBlocks(newText);
  newText = parseOrdLists(newText);
  newText = parseUnordLists(newText);
  newText = parseBlockQuotes(newText);
  newText = parseHeaders(newText);
  newText = parseParagraphs(newText);
  newText = parseImages(newText);
  newText = parseLinks(newText);
  return newText;
};

export default convertMdToHTML;
