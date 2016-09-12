export default function isDescriptiveTag(tag) {
  switch(tag.toLowerCase()) {
    case 'general':
      return false;
    default:
      return true;
  }
}
