import parseLinks from './links.js';
import parseImages from './images.js';
import parseCompose from '../../helpers/compose.js';

const parseExternals = parseCompose(parseImages, parseLinks);

export default parseExternals;
