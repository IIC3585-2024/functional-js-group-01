import parseTags from './parsers/tags.js';
import parseLists from './parsers/lists/lists.js';
import parseParagraphs from './parsers/paragraphs.js';
import parseCodes from './parsers/codes/codes.js';
import parseBlockQuotes from './parsers/blockQuotes.js';
import parseHeaders from './parsers/headers.js';
import parseExternals from './parsers/externals/externals.js';
import parseHorizontalRules from './parsers/horizontalRules.js';
import parsePipe from './helpers/pipe.js';
import parseCover from './helpers/coverCompose.js';
import { transformEscapeChars, parseEscapeChars } from './parsers/escapeChars.js';

// REEMPLAZA ETIQUETAS INTERNAS (bold, italic, bold-italic, code, br, h's)
const parseMd = parsePipe([
  parseHorizontalRules,
  parseTags,
  parseCodes,
  parseBlockQuotes,
  parseLists,
  parseHeaders,
  parseParagraphs,
  parseExternals,
]);

const coverEscapeChars = parseCover(transformEscapeChars, parseEscapeChars);

const convertMdToHTML = coverEscapeChars(parseMd);

export default convertMdToHTML;
