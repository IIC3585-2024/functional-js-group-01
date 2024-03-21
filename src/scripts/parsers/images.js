const parseLinkImages = (text) => {
  const nuevoTexto = text
    .replace(/!\[(.*?)\]\((.*?)(|\s* "(.*?)")\)/g, "<img height=350 width=600 alt='$1' src='$2' title='$4'>")
    .replace(/\[(.*?)\]\((.*?)(|\s* "(.*?)")\)/g, "<a href='$2' title='$4'>$1</a>");
  return nuevoTexto;
};

export default parseLinkImages;
