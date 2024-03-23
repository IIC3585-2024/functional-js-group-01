import parseWhitespace from './parsers/whitespace.js';
import parseTags from './parsers/tags.js';
import parseLists from './parsers/lists/lists.js';
import parseParagraphs from './parsers/paragraphs.js';
import parseCodes from './parsers/codes/codes.js';
import parseBlockQuotes from './parsers/blockQuotes.js';
import parseHeaders from './parsers/headers.js';
import parseExternals from './parsers/externals/externals.js';
import parseHorizontalRules from './parsers/horizontalRules.js';
import parsePipe from './helpers/pipe.js';

// REEMPLAZA ETIQUETAS INTERNAS (bold, italic, bold-italic, code, br, h's)
const convertMdToHTML = parsePipe([
  parseWhitespace,
  parseHorizontalRules,
  parseTags,
  parseCodes,
  parseBlockQuotes,
  parseLists,
  parseHeaders,
  parseParagraphs,
  parseExternals,
]);

export default convertMdToHTML;
