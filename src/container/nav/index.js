class Nav {
  static #HOME_PAGE = 'https://www.google.com/'

  static #back = () => {
    return window.history.back()
  }

  static #forward = () => {
    return window.history.forward()
  }

  static #reload = () => {
    return location.reload()
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static #go = () => {
    try {
      const url = new URL(window.input.value)
      return this.#changePage(url.href)
    } catch (error) {
      alert('Веддіть коректну url адресу')
      console.log(e)
    }
  }

  static init = () => {
    window.back.onclick = this.#back
    window.forward.onclick = this.#forward
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nav.init()

window.nav = Nav
