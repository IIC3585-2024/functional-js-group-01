const parsePipe = (parsers) => (text) => parsers.reduce((acc, parser) => parser(acc), text);

export default parsePipe;
