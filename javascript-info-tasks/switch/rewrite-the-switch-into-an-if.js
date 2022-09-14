// Consider this switch statement:

{
  switch (browser) {
    case 'Edge':
      alert(`You've got the edge!`);
      break;

    case `Chrome`:
    case `Firefox`:
    case `Safari`:
    case `Opera`:
      alert(`Okay, we support this browser too.`);
      break;
    default:
      alert(`We hope this page looks okay.`);
  }
}

// here is the equivalent if statement:

{
  if (browser === `Edge`) {
    alert(`You've got the edge!`);
  } else if (
    browser === `Chrome` ||
    browser === `Firefox` ||
    browser === `Opera` ||
    browser === `Safari`
  ) {
    alert(`Okay, we support this browser too.`);
  } else {
    alert(`We hope this page looks okay.`);
  }
}

// its debatable which is "cleaner" code, but the switch statement has less code duplication
// and allows shareable code blocks through break removal.
