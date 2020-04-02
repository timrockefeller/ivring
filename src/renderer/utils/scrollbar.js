import Vue from 'vue'
import 'classlist-polyfill'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

const _elScrollBar = (el) => {
  if (el._ps_ instanceof PerfectScrollbar) {
    el._ps_.update()
  } else {
    el._ps_ = new PerfectScrollbar(el, {suppressScrollX: true})
  }
}

Vue.directive('scrollBar', {
  inserted (el, binding, vnode) {
    const rules = ['fixed', 'absolute', 'relative']
    let position = window.getComputedStyle(el).position
    if (
      position !== 'fixed' &&
            position !== 'absolute' &&
            position !== 'relative'
    ) {
      console.error(
        `scrollbar所在的容器的position属性必须是以下之一：${rules.join('、')}`
      )
    }
    _elScrollBar(el)
  },

  componentUpdated (el, binding, vnode, oldVnode) {
    let content = document.getElementById('app-content')
    content.scrollTop = 0
    try {
      vnode.context.$nextTick(() => {
        _elScrollBar(el)
      })
    } catch (error) {
      console.error(error)
      _elScrollBar(el)
    }
  }
})
