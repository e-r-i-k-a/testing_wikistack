const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

describe('simple test', () => {
  it('confirms that addition is working', () => {
    expect(2 + 2).to.equal(4);
  });
});

describe('asynchronous', () => {
  it('set timeout of 1000ms takes ~1000ms', (done) => {
    let start = new Date();
    setTimeout(() => {
      let duration = new Date() - start;
      expect(duration).to.be.closeTo(1000, 50);
      done();
    }, 1000);
  });
});

describe('spy', () => {
  it('forEach invokes cb once per element', () => {
    const arr = [1, 2, 3, 4];
    let logNth = (val, idx) => console.log(`Logging elem #${idx}: ${val}`);
    logNth = chai.spy(logNth);
    arr.forEach(logNth);
    console.log('hiiiiiii');
    expect(logNth).to.have.been.called.exactly(arr.length);
  });
});
