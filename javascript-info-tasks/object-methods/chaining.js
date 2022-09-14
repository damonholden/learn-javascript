// Non chained methods will have to be called in sequence:
{
  let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep() {
      alert(this.step);
    },
  };

  ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep();
  ladder.down();
  ladder.showStep();
}

// however, returning a reference to the object in a method allows for chaining:

{
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert(this.step);
      return this;
    },
  };

  ladder.up().up().down().showStep().down().showStep();
}
