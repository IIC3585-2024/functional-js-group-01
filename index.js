import getMdFileLines from './utils/getMdFileLines.js';

const file = 'tests/input/test1.md';
const fileLines = getMdFileLines(file);

console.log(fileLines);
