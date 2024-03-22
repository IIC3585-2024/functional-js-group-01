const parseParagraphs = (text) => {
  const newText = text
    .replace(/^(?!<h[1-6]>|<ol>|<ul>|<blockquote>|<hr>)(.+)(?!<\/h[1-6]>|<\/ol>|<\/ul>|<\/blockquote>)/gm, '<p>$1</p>')
    .replace(/<\/p>\s<p>/g, '')
    .replace(/<p>\s*<(li|ol|ul|h([1-6]))>([^]*?)<\/(li|ol|ul|h([1-6]))>\s*<\/p>/g, '<$1$2>$3</$4$5>');
  return newText;
};

export default parseParagraphs;
