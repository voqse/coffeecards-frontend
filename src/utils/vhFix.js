import debounce from 'lodash/debounce'

function updateStyle() {
  const value = window.innerHeight * 0.01
  const bodyStyle = document.documentElement.style
  bodyStyle.setProperty('--vh', `${value}px`)
}

;(function vfFix() {
  if (typeof window !== 'undefined') {
    updateStyle()
    window.addEventListener('resize', debounce(updateStyle, 250, { leading: true }), { passive: true })
  }
})()
