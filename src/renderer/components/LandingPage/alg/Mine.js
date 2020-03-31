import TemplateMine from './template-mine.json'

let createEmpty = function () {
  return TemplateMine
}

let New = function (name, price, elements) {
  let tmp = TemplateMine
  if (elements === undefined || typeof elements !== 'object') {
    console.log('Error input mine info')
    return
  }
  tmp.name = name
  tmp.price = price
}

export default {
  createEmpty: createEmpty,
  New: New
}
