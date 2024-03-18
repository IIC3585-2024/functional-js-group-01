// DICCIONARIO MARKDOWN TO HTML
const equivalence = {
    "#": { open_tag: "<h1>", close_tag: "</h1>" },
    "##": { open_tag: "<h2>", close_tag: "</h2>" },
    "###": { open_tag: "<h3>", close_tag: "</h3>" },
    "####": { open_tag: "<h4>", close_tag: "</h4>" },
    "#####": { open_tag: "<h5>", close_tag: "</h5>" },
    "######": { open_tag: "<h6>", close_tag: "</h6>" },
    "": { open_tag: "<p>", close_tag: "</p>" },
    "*": { open_tag: "<em>", close_tag: "</em>" },
    "_": { open_tag: "<em>", close_tag: "</em>" },
    "**": { open_tag: "<strong>", close_tag: "</strong>" },
    "__": { open_tag: "<strong>", close_tag: "</strong>" },
    "***": { open_tag: "<em><strong>", close_tag: "</strong></em>" },
    "___": { open_tag: "<em><strong>", close_tag: "</strong></em>" },
    "__*": { open_tag: "<em><strong>", close_tag: "</strong></em>" },
    "**_": { open_tag: "<em><strong>", close_tag: "</strong></em>" },
    "`": { open_tag: "<code>", close_tag: "</code>" },
    "``": { open_tag: "<code>", close_tag: "</code>" },
    "  \n": { open_tag: "", close_tag: "</br>" },
};
  
// DICCIONARIO MARKDOWN TO REGEX
const mdToRegex = {
    "***": /\*\*\*(.*?)\*\*\*/g,
    "___": /\_\_\_(.*?)\_\_\_/g,
    "__*": /\_\_\*(.*?)\*\_\_/g,
    "**_": /\*\*\_(.*?)\_\*\*/g,
  
    "**": /\*\*(.*?)\*\*/g,
    "__": /\_\_(.*?)\_\_/g,
  
    "*": /\*(.*?)\*/g,
    "_": /\_(.*?)\_/g,
  
    "``": /\`\`(.*?)\`\`/g,
    "`": /\`(.*?)\`/g,
  
    "  \n": /()\s+\s+$/gm,

    "######": /^#{6}(.+)/gm,
    "#####": /^#{5}(.+)/gm,
    "####": /^#{4}(.+)/gm,
    "###": /^#{3}(.+)/gm,
    "##": /^#{2}(.+)/gm,
    "#": /^#(.+)/gm
};

// ENVUELVE TEXTO HACIENDO CONVERSIÓN DE ETIQUETAS
const wrap = ({ tag = "", text }) => {
    const { open_tag, close_tag } = equivalence[tag];
    return `${open_tag}${text}${close_tag}`;
};
  
// REEMPLAZA ETIQUETAS INTERNAS (bold, italic, bold-italic, code, br, h's)
const wrapInLine = (text, wrap) => {
    const mdSymbols = Object.keys(mdToRegex);
    mdSymbols.forEach((symbol) => {
        text = text.replace(mdToRegex[symbol], wrap({ tag: symbol, text: "$1" }));
    });
    text = text.replace(/(<code>.*?)<code>(.*?)<\/code>(.*?<\/code>)/g, "$1 `$2` $3");
    return text;
};


// RENDERIZA EL TEXTO EN HTML
let htmlRendered = ""
document.addEventListener("DOMContentLoaded", () => {
    const markdownInput = document.getElementById('input');
    const renderedOutput = document.getElementById('output');

    markdownInput.addEventListener('input', () => {
        const md = markdownInput.value;
        const html = wrapInLine(md, wrap)
        htmlRendered = html
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
