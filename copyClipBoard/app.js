const copy2Clipboard = str => {
  const textarea = document.createElement('textarea')
  textarea.setAttribute('readonly', '') // 让手机端不会跳出键盘
  textarea.position = 'absolute'
  textarea.left = '-9999px'
  textarea.value = str
  document.body.appendChild(textarea)

  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false

  textarea.select()
  // res=textarea.getAnimations()
  document.execCommand('copy')
  document.body.removeChild(textarea)

  if (selected) { // 让之前选中的地方保持选中
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

function copy() {
  const {
    data
  } = document.getSelection().anchorNode
  copy2Clipboard(data.trim())
  console.log('ok :)')
}