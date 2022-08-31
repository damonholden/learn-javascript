
let question = () => {
  let answer = prompt('what is 2 + 2', 'Hi, Im annoying pre-filled text');
  let certainty = confirm('Are you absolutely certain?');
  certainty ? alert(answer == 2 + 2) : question()
}

let loop = () => {
  confirm()
  loop()
}


question()

loop()
