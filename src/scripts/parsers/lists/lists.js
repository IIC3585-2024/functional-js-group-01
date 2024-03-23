import parseOrdLists from './orderedLists.js';
import parseUnordLists from './unorderedLists.js';
import parseCompose from '../../helpers/compose.js';

const parseLists = parseCompose(parseUnordLists, parseOrdLists);

export default parseLists;
