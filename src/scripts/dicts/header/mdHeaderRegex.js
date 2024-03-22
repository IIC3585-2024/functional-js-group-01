const mdHeaderRegex = {
  '######': /^\s*(<li>|<blockquote>)? *#{6} (.+?)(<\/li>|<\/blockquote>|$)/gm,
  '#####': /^\s*(<li>|<blockquote>)? *#{5} (.+?)(<\/li>|<\/blockquote>|$)/gm,
  '####': /^\s*(<li>|<blockquote>)? *#{4} (.+?)(<\/li>|<\/blockquote>|$)/gm,
  '###': /^\s*(<li>|<blockquote>)? *#{3} (.+?)(<\/li>|<\/blockquote>|$)/gm,
  '##': /^\s*(<li>|<blockquote>)? *#{2} (.+?)(<\/li>|<\/blockquote>|$)/gm,
  '#': /^\s*(<li>|<blockquote>)? *# (.+?)(<\/li>|<\/blockquote>|$)/gm,
};

export default mdHeaderRegex;
