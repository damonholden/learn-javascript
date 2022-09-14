// a switch can replace multiple if statements:

let number = 2 + 2;

switch (number) {
  case 3:
    alert(`Too small`);
    break;
  case 4:
    alert(`Exactly`);
    break;
  case 5:
    alert(`Too big`);
    break;
  default:
    alert(`I don't know what that is`);
}

// switches can also be used to create codeblocks of which executes in varying sizes
//  by removing breaks accordingly.
// Also, switch cases are always strict equality.
