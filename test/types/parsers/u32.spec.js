import test from 'ava';
import { parseU32 } from '../../../src/types/parsers/u32.js';

test('should be throw if value is not u32', t => {
  t.plan(5);

  t.throws(() => parseU32(0xFFFFFFFF + 1));
  t.throws(() => parseU32(-1));
  t.throws(() => parseU32('qwerty'));
  t.throws(() => parseU32(5.555));
  t.throws(() => parseU32('5.555'));
});
