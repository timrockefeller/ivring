import TemplateMine from './template-mine.json'

let finetrim = s => s.replace(/^\s+/, '').replace(/\s+$/, '').split(/\s+/)

let testConfig = [
  'Aee 1.7 2.3 1.1 2.3 4.4 1.2 5.1',
  'Bee 1.2 2.3 1.1 2.3 4.4 1.4 7.1',
  'Cee 1.2 2.3 1.1 2.3 9.9 1.4 7.1',
  'Dee 1.2 2.3 1.1 2.3 4.4 1.4 1.3',
  'Eee 1.2 5.3 1.1 2.3 4.4 1.4 7.1',
  'Fee 1.2 2.3 1.1 2.3 4.4 1.4 9.9',
  'Gee 1.2 2.3 1.1 2.3 4.4 1.4 7.1',
  'Hee 1.2 2.3 1.1 2.3 4.4 1.4 7.1',
  'Iey 1.2 2.3 1.1 2.1 4.4 1.4 7.1',
  'Jwk 1.2 2.3 1.1 2.3 4.4 1.4 1.2']

let createEmpty = function () {
  return TemplateMine
}

let New = function (name, price, elements) {
  let tmp = {}
  if (elements === undefined) {
    console.log('Error input mine info')
    return
  }
  if (typeof price !== 'number') {
    price = parseFloat(price)
  }
  if (!(elements instanceof Array)) {
    elements = finetrim(elements).map(e => Number.parseFloat(e))
  }
  tmp.name = name
  tmp.price = price
  tmp.elements = elements
  return tmp
}

let NewParse = s => {
  s = finetrim(s)
  return {
    name: s[0],
    price: parseFloat(s[7]),
    elements: s.slice(1, 7).map(e => parseFloat(e))
  }
}

export default {
  createEmpty: createEmpty,
  New: New,
  NewParse: NewParse,

  test: testConfig
}
