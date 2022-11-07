// Is it possible to create functions A and B so that new A() == new B()?

{
    const A = () => {};
    const B = () => {};

    let a = new A();
    let b = new B();

    a == b;
}

// yes it is:

{
    let obj = {};

    const A = () => {
      return obj;
    };

    const B = () => {
      return obj;
    };

    let a = new A();
    let b = new B();

    a == b;
}

// If a function returns an object then new returns it instead of 'this'.

// So they can, for instance, return the same externally defined object obj:
