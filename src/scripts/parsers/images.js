const parseImages = (text) => {
  const nuevoTexto = text
    .replace(/!\[(.*?)\]\((.*?)(|\s* "(.*?)")\)/g, "<img height=350 width=600 alt='$1' src='$2' title='$4'>");
  return nuevoTexto;
};

export default parseImages;
