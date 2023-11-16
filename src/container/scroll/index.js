window.scrollButton.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth',
  })
}

let isDisplay = false
setInterval(() => {
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    window.scrollButton.style.display = 'flex'
    isDisplay = true
  }
  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    isDisplay = false
    window.scrollButton.style.display = 'none'
  }
}, 500)
