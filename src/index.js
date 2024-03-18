import getMdFileLines from './utils/getMdFileLines.js';

const inputFile = process.argv[2] || 'examples/input/test1.md';
// const outputFile = process.argv[3] || 'output.html';

const fileLines = getMdFileLines(inputFile);

console.log(fileLines);
