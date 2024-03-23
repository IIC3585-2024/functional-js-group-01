const parseParagraphs = (text) => {
  const newText = text
    .replace(/^((?!(?:<pre><code>)|(?:<\/code><\/pre>)|(?:<h[1-6]>(?:[^]*?)<\/h[1-6]>)|(?:<hr>)|(?:<\/?[ou]l>)|(?:<li>(?:[^]*?)<\/li>)|(?:<\/?blockquote>)|(?:&lt;\/?np&gt;)).+)+$/gm, '<p>$1</p>')
    .replace(/<\/p>\s<p>/g, '\n')
    .replace(/<p>\s*<(li|ol|ul|h([1-6]))>([^]*?)<\/(li|ol|ul|h([1-6]))>\s*<\/p>/g, '<$1$2>$3</$4$5>')
    .replace(/&lt;np&gt;([^]*?)&lt;\/np&gt;/gm, '$1');

  return newText;
};

export default parseParagraphs;
