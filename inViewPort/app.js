const inViewport = (el, partiallyVisible = false) => {
  const {
    top,
    left,
    bottom,
    right
  } = el.getBoundingClientRect();
  const {
    innerHeight,
    innerWidth
  } = window;
  return partiallyVisible ?
    ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
    top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

const homeEl = document.querySelector('#home')

window.addEventListener('scroll', () => {
  const isInViewPort = inViewport(homeEl, false)
  if (isInViewPort) {
    if (!homeEl.style.backgroundColor) {
      homeEl.innerText = "I'm in viewPort now :)"
      homeEl.style.backgroundColor = 'gray'
    }
  } else {
    homeEl.innerText = "I'm out of viewPort"
    homeEl.style.backgroundColor = null
  }
})