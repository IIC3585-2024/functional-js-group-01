import parseTags from "./parsers/tags.js";
import parseParagraphs from "./parsers/paragraphs.js";
import parseCodeBlocks from "./parsers/codeBlocks.js";
import parseBlockQuotes from "./parsers/blockQuotes.js";
import parseHeaders from "./parsers/headers.js";

// REEMPLAZA ETIQUETAS INTERNAS (bold, italic, bold-italic, code, br, h's)
const convertMdToHTML = (text) => {
  let newText = parseTags(text);
  newText = parseParagraphs(newText);
  newText = parseCodeBlocks(newText);
  newText = parseBlockQuotes(newText);
  newText = parseHeaders(newText);
  return newText;
};

export default convertMdToHTML;
