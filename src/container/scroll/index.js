window.scrollButton.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth',
  })
  window.scrollButton.style.animationPlayState = 'running'
  isDisplay === false
}

let isDisplay = false
setInterval(() => {
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    window.scrollButton.style.animationPlayState = 'running'
    isDisplay = true
  }
  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    window.scrollButton.style.animationPlayState = 'running'
    isDisplay = false
  }

  if (
    (window.scrollButton.style.animationPlayState ===
      'running' &&
      isDisplay === true &&
      document
        .getElementById('scrollButton')
        .getBoundingClientRect().y <=
        visualViewport.height - 79.5) ||
    (isDisplay === false &&
      document
        .getElementById('scrollButton')
        .getBoundingClientRect().y > visualViewport.height)
  ) {
    window.scrollButton.style.animationPlayState = 'paused'
  }
}, 5)
