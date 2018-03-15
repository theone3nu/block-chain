const Block = require('./block');
const { DIFFICULTY } = require('../config');

let data, lastBlock, block;

beforeEach(() => {
  data = 'bar';
  lastBlock = Block.genesis();
  block = Block.mineBlock(lastBlock, data);
});

describe('Block', () => {
  it('sets the `data` to match the input', () => {
    expect(block.data).toEqual(data);
  });

  it('sets the `lashHash` to match the hash of the last block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });

  it('generats a hash that matches the difficulty', () => {
    expect(block.hash.substring(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
  });
});
