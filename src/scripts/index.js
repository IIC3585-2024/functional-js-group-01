import wrapInLine from './converter.js';

// RENDERIZA EL TEXTO EN HTML
let htmlRendered = '';
document.addEventListener('DOMContentLoaded', () => {
  const markdownInput = document.getElementById('input');
  const renderedOutput = document.getElementById('output');

  markdownInput.addEventListener('input', () => {
    const md = markdownInput.value;
    const html = wrapInLine(md);
    htmlRendered = html;
    renderedOutput.innerHTML = html;
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
