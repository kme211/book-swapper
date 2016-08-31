export default function replaceAll(str, search, replacement) {
  return str.replace(new RegExp(search, 'g'), replacement);
}
