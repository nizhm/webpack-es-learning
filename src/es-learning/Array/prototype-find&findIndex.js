/**
 * @find & findIndex
 * @find
 *  1.返回满足条件的element；
 *  2.没有element满足条件，返回undefined；
 * @findIndex
 *  1.返回满足条件的element的index；
 *  2.没有element满足条件，返回-1；
 */
const list = [
  { id: '001', name: 'admin1' },
  { id: '002', name: 'admin2' },
  { id: '003', name: 'admin3' },
  { id: '004', name: 'admin4' },
  { id: '005', name: 'admin5' }
]
const item = list.find(el => el.id === '006')
const idx = list.findIndex(el => { return  el.id === '006'})
console.log(item, idx)