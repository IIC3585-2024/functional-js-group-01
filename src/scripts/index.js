import convertMdToHTML from './converter.js';

// RENDERIZA EL TEXTO EN HTML
let htmlRendered = '';
document.addEventListener('DOMContentLoaded', () => {
  const markdownInput = document.getElementById('input');
  const renderedOutput = document.getElementById('output');

  markdownInput.value = localStorage.getItem('textInput') || '';
  renderedOutput.innerHTML = localStorage.getItem('htmlRendered') || '';

  markdownInput.addEventListener('input', () => {
    const md = markdownInput.value;
    const html = convertMdToHTML(md);
    htmlRendered = html;
    renderedOutput.innerHTML = html;
    localStorage.setItem('textInput', markdownInput.value);
    localStorage.setItem('htmlRendered', html);
  });
});

document.getElementById('downloadButton').addEventListener('click', () => {
  const htmlContent = htmlRendered;
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'archivo.html';
  a.click();
  window.URL.revokeObjectURL(url);
});
