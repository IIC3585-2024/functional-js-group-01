const mdImagesToHtml = texto => {
    const nuevoTexto = texto.replace(/\<(.*?)\>/g, "<a href='$1'>$1</a>")
                            .replace(/\!\[(.*?)\]\((.*?)\s* \"(.*?)\"\)/g, "<img height=350 width=600 alt='$1' src='$2' title='$3'><img>")
                            .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2'>$1</a>")
    return nuevoTexto
}

export default mdImagesToHtml;