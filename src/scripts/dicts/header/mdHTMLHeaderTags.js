/* eslint-disable quote-props */
// DICCIONARIO MARKDOWN TO HTML
const mdHTMLHeaderTags = {
  '######': { open_tag: '<h6>', close_tag: '</h6>' },
  '#####': { open_tag: '<h5>', close_tag: '</h5>' },
  '####': { open_tag: '<h4>', close_tag: '</h4>' },
  '###': { open_tag: '<h3>', close_tag: '</h3>' },
  '##': { open_tag: '<h2>', close_tag: '</h2>' },
  '#': { open_tag: '<h1>', close_tag: '</h1>' },
};

export default mdHTMLHeaderTags;
