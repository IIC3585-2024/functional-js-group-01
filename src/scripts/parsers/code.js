const parseCode = (text) => {
    let newText = text;
    newText = newText.replace(/(<code>.*?)<code>(.*?)<\/code>(.*?<\/code>)/g, '$1 `$2` $3');
    newText = newText.replace(/<\/code>\n<code>/g, '\n');
    return newText;
  };
  
  export default parseCode;
  