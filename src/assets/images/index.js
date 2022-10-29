function importAll(r) {
  const images = [];
  r.keys().forEach((item, index) => { images.push(r(item)); });
  return images;
}
const images = importAll(require.context('./', false, /\.(jpg)$/));
export default images;
