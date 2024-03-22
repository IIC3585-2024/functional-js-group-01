import parseTags from './parsers/tags.js';
import parseOrdLists from './parsers/orderedLists.js';
import parseUnordLists from './parsers/unorderedLists.js';
import parseParagraphs from './parsers/paragraphs.js';
import parseCodeBlocks from './parsers/codeBlocks.js';
import parseCode from './parsers/code.js';
import parseBlockQuotes from './parsers/blockQuotes.js';
import parseHeaders from './parsers/headers.js';
import parseLinkImages from './parsers/images.js';

// REEMPLAZA ETIQUETAS INTERNAS (bold, italic, bold-italic, code, br, h's)
const convertMdToHTML = (text) => {
  let newText = parseTags(text);
  newText = parseCodeBlocks(newText);
  newText = parseCode(newText);
  newText = parseBlockQuotes(newText);
  newText = parseOrdLists(newText);
  newText = parseUnordLists(newText);
  newText = parseHeaders(newText);
  newText = parseParagraphs(newText);
  newText = parseLinkImages(newText);
  return newText;
};

export default convertMdToHTML;
