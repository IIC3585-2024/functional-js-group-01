/* eslint-disable quote-props */
// DICCIONARIO MARKDOWN TO HTML
const mdHTMLTags = {
  '': { open_tag: '<p>', close_tag: '</p>' },

  '***': { open_tag: '<em><strong>', close_tag: '</strong></em>' },
  '___': { open_tag: '<em><strong>', close_tag: '</strong></em>' },
  '__*': { open_tag: '<em><strong>', close_tag: '</strong></em>' },
  '**_': { open_tag: '<em><strong>', close_tag: '</strong></em>' },

  '**': { open_tag: '<strong>', close_tag: '</strong>' },
  '__': { open_tag: '<strong>', close_tag: '</strong>' },

  '*': { open_tag: '<em>', close_tag: '</em>' },
  '_': { open_tag: '<em>', close_tag: '</em>' },

  '  \n': { open_tag: '', close_tag: '</br>' },

  '==': { open_tag: '<h1>', close_tag: '</h1>' },
  '--': { open_tag: '<h2>', close_tag: '</h2>' },

  '```': { open_tag: '<fencedCode>', close_tag: '</fencedCode>' },
  '``': { open_tag: '<code>', close_tag: '</code>' },
  '`': { open_tag: '<code>', close_tag: '</code>' },
};

export default mdHTMLTags;
