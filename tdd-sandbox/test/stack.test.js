class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    delete this.items[this.top];
    this.top -= 1;
  }
}

describe('my stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });
  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to top', () => {
    stack.push('something');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('something');
  });

  it('can pop off', () => {
    stack.push('first thing in');
    stack.push('to be popped');
    stack.push('another thing');
    stack.pop();
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('to be popped');
    stack.pop();
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('first thing in');
  });
});
