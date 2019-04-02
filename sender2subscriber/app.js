class Hub {
  constructor() {
    this.hub = Object.create(null)
  }

  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = []
    this.hub[event].push(handler)
  }

  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data))
  }

  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler)
    if (i > -1) this.hub[event].splice(i, 1)
  }
}

const myHub = new Hub()
let count = 0
myHub.on('test', res => {
  count++
  if (count > 0) {
    document.getElementById('text').innerText = `you have emit test event for ${count} times`
  }
})