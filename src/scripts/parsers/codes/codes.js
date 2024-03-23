import parseCodeBlocks from './codeBlocks.js';
import parseCodeTags from './codeTags.js';
import parseCompose from '../../helpers/compose.js';

const parseCodes = parseCompose(parseCodeBlocks, parseCodeTags);

export default parseCodes;
