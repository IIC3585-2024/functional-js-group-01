const parseLinks = (text) => {
  const nuevoTexto = text
    .replace(/\[(.*?)\]\((.*?)(|\s* "(.*?)")\)/g, "<a href='$2' title='$4'>$1</a>");
  return nuevoTexto;
};

export default parseLinks;
