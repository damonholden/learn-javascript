// function declarations and expressions

{
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
    `Do you agree?`,
    function () {
      alert(`You agreed.`);
    },
    function () {
      alert(`You canceled the execution.`);
    }
  );
}

// arrow function equivalent:
// (shorter and cleaner)

{
  let ask = (question, yes, no) => (confirm(question) ? yes() : no());

  ask(
    `Do you agree?`,
    () => alert(`You agreed.`),
    () => alert(`You canceled the execution.`)
  );
}
