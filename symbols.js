let user = {
  name: 'john',
};


// App 1
{
  let id = Symbol('id');

  user[id] = 1;

  user[id];
}

// App 2
{
  user

  user[id] = 1;

  user[id];
}
