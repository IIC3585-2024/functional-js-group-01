import fs from 'fs';

const getMdFileLines = (dir) => {
  const file = fs.readFileSync(dir, 'utf8');
  const lines = file.split('\n');
  return lines;
};

export default getMdFileLines;
