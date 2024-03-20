const parseHeaders = (text) => {
  let newText = text;
  const headers = ['1', '2', '3', '4', '5', '6'];
  headers.forEach((h) => {
    newText = newText.replace(new RegExp(`<p><h${h}>`, 'g'), `<h${h}>`);
    newText = newText.replace(new RegExp(`</h${h}></p>`, 'g'), `</h${h}>`);
  });
  return newText;
};

export default parseHeaders;
