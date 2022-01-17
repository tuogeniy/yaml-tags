import test from 'ava';
import { isEnumType } from '../../../src/types/validators/is-enum-type.js'

test('should be falsy if value is not in enum type', async t => {
  t.plan(4);

  t.is(isEnumType('aezakmi'), false);
  t.is(isEnumType(123), false);
  t.is(isEnumType(null), false);
  t.is(isEnumType(() => {}), false);
});
