import { readFileSync } from 'fs';

const getMdFileLines = (dir) => {
  try {
    const fileContent = readFileSync(dir, 'utf8');
    return fileContent.split('\n');
  } catch (err) {
    console.log('File not found or is not readable. Please check the file path and try again.');
    return process.exit(1);
  }
};

export default getMdFileLines;
