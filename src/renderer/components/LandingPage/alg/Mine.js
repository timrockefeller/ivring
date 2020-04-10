import TemplateMine from './template-mine.json'

let finetrim = s => s.replace(/^\s+/, '').replace(/\s+$/, '').split(/\s+/)

let createEmpty = function () {
  return TemplateMine
}

let New = function (name, price, elements) {
  let tmp = {}
  if (elements === undefined) {
    console.log('Error input mine info')
    return
  }

  if (!(elements instanceof Array)) {
    elements = finetrim(elements).map(e => Number.parseFloat(e))
  }
  tmp.name = name
  tmp.price = price
  tmp.elements = elements
  return tmp
}

export default {
  createEmpty: createEmpty,
  New: New
}
