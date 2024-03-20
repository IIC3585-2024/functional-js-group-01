
const asignarOl = texto => {
    let level = 0;
    let result = [];

	result.push("<ol>")
    texto
        .forEach(line => {
            const matches = line.match(/^(\s*)<li>(.*)<\/li>$/);
            if (matches) {
                const indent = matches[1].length / 4; // 4 espacios por nivel de indentación
                let diff = indent - level;

                while (diff > 0) {
                    result.push('<ol>');
                    level++;
                    diff--;
                }

                while (diff < 0) {
                    result.push('</ol>');
                    level--;
                    diff++;
                }

                result.push(line);
            }
        });

    while (level > 0) {
        result.push('</ol>');
        level--;
    }

	result.push("</ol>")
    return result.join("\n");
}

const mdListToHtml = (texto) => {
    const convertedTexts = texto
							.replace(/^(\s*)\d+\.(.*)/gm, "$1<li>$2</li>")
							.split('\n\n')
							.filter((line) => line.match(/^<li>.*<\/li>/))
							.map((line) => line.split("\n"))
							.map(text => asignarOl(text));

    const fragmentos = texto
                        	.split('\n\n')
                        	.filter((line) => line.match(/^\s*\d+.*/))
                        	.map((line) => line.split("\n"))
                        	.map(text => text.join("\n"));

    for(let i = 0; i < fragmentos.length; i++){
        texto = texto.replace(fragmentos[i], convertedTexts[i])
    }

    return texto;
}

export default mdListToHtml;