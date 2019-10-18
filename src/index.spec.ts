import { callableObject } from './index';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('math ex', () => {
  const math = callableObject((a: number, b: number) => {
    return a + b;
  }, {
    add: (a, b) => a + b,
    sub: (a, b) => a - b, 
    mult: (a, b) => a * b, 
    div: (a, b) => a / b, 
  });

  it('calling should add', () => {
    expect(math(2, 3)).to.equal(5);
    expect(math(-2, 3)).to.equal(1);
  });

  it('add should add', () => {
    expect(math.add(2, 3)).to.equal(5);
    expect(math.add(-2, 3)).to.equal(1);
  });
  it('sub should subtract', () => {
    expect(math.sub(2, 3)).to.equal(-1);
    expect(math.sub(-2, 3)).to.equal(-5);
  });
  it('mult should multiply', () => {
    expect(math.mult(2, 3)).to.equal(6);
    expect(math.mult(-2, 3)).to.equal(-6);
  });
  it('div should divide', () => {
    expect(math.div(6, 3)).to.equal(2);
    expect(math.div(-6, 3)).to.equal(-2);
  });
});
