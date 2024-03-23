const parseCompose = (firstParser, secondParser) => (text) => secondParser(firstParser(text));

export default parseCompose;
