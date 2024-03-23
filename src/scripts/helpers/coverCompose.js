const parseCover = (firstParser, lastParser) => (
  chainParser,
) => (text) => lastParser(chainParser(firstParser(text)));

export default parseCover;
