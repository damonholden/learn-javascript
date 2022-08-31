'use strict'

let username = prompt('username:', '')

if (username === 'admin') {
  let password = prompt('password:', '');
  if (password === 'TheMaster') {
    alert(`welcome!`);
  } else if (!password) {
    alert(`Canceled`);
  } else {
    alert(`Wrong password`);
  }
} else if (!username) {
  alert(`Canceled`);
} else {
  alert(`I don't know you`);
}
