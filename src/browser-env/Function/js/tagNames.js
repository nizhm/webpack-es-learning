const tagNamesArray = [
  'a',
  'abbr',
  'acronym',
  'address',
  'applet',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'basefont',
  'bdi',
  'bdo',
  'bgsound',
  'big',
  'blink',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'center',
  'cite',
  'code',
  'col',
  'colgroup',
  'content',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'font',
  'footer',
  'form',
  'frame',
  'frameset',
  'head',
  'header',
  'h1',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'image',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'nobr',
  'noembed',
  'noframes',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'plaintext',
  'portal',
  'pre',
  'progress',
  'q',
  'rb',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'shadow',
  'slot',
  'samll',
  'source',
  'spacer',
  'span',
  'strike',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'tt',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'xmp'
]

/**
 * Valid if a tag name can be used to create intrinsic HTMLElement
 *
 * @function
 * @param {string} tagName
 * @return {boolean}
 */
const isIntrinsicTag = function isIntrinsicTag(tagName) {
  if (this instanceof isIntrinsicTag) throw new TypeError(`'isIntrinsicTag' is not a constructor`)

  let isIntrinsic = true
  try {
    const node = document.createElement(tagName)
    // unknown tag is not intrinsic
    if (node instanceof HTMLUnknownElement) {
      isIntrinsic = false
    }
  } catch(DOMException) {
    // invalid tag name
    isIntrinsic = false
  }
  return isIntrinsic
}

/**
 * Get intrinsic tag name array in browser environment
 *
 * @function
 * @param {empty}
 * @return {string[]}
 */
const getIntrinsicTagNames = function getIntrinsicTagNames() {
  if (this instanceof getIntrinsicTagNames) throw new TypeError(`'getIntrinsicTagNames' is not a constructor`)

  return tagNamesArray.filter(el => isIntrinsicTag(el))
}

/**
 * Get non-intrinsic tag name array in browser environment
 *
 * @function
 * @param {empty}
 * @return {string[]}
 */
const getNonIntrinsicTagNames = function getNonIntrinsicTagNames() {
  if (this instanceof getNonIntrinsicTagNames) throw new TypeError(`'getNonIntrinsicTagNames' is not a constructor`)

  return tagNamesArray.filter(el => !isIntrinsicTag(el))
}
