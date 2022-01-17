import test from 'ava';
import { parseFloat3 } from '../../../src/types/parsers/float3.js';

test('should be instance of Float32Array', t => {
  t.plan(2);

  t.true(parseFloat3([3, 2, 1]) instanceof Float32Array);
  t.true(parseFloat3([3.1, 2.2, 1.2]) instanceof Float32Array);
});

test('should be throw if input length not eq 3', t => {
  t.plan(3);

  t.throws(() => parseFloat3([1]));

  t.throws(() => parseFloat3([1, 2, 3, 4, 5]));

  t.throws(() => parseFloat3([1, 2]));
});

test('should be throw if value not a number', t => {
  t.plan(2);

  t.throws(() => parseFloat3([1, 2, 'q']));
  t.throws(() => parseFloat3([1, 2, '1q']));
});

test('should be parse number as string', t => {
  t.plan(2);

  t.deepEqual(parseFloat3([1, 2, '3']), new Float32Array([1, 2, 3]));
  t.deepEqual(parseFloat3([12, '2.0', '3']), new Float32Array([12, 2.0, 3]));
});
