// Is it possible to create functions A and B so that new A() == new B()?

{
  function A() {}
  function B() {}

  let a = new A();
  let b = new B();

  a == b;
}

// yes it is:

{
  let obj = {};

  function A() {
    return obj;
  }
  function B() {
    return obj;
  }

  let a = new A();
  let b = new B();

  a == b;
}

// If a function returns an object then new returns it instead of 'this'.

// So they can, for instance, return the same externally defined object obj:
