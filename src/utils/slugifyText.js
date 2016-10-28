export default function slugify(text) {
    let ret = text;
    ret = ret.toLowerCase();
    ret = ret.replace(/\s+/g, '_')
    ret = ret.replace(/\W+/g, '')
    ret = ret.replace(/_/g, '-')
    return ret;
}
