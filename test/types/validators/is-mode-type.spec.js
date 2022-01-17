import test from 'ava';
import { isModeType } from '../../../src/types/validators/is-mode-type.js';
import { U32_TYPE_ID, FLOAT3_TYPE_ID, YAML_SEQ_ID } from '../../../src/types/ids.js';

test('should be falsy if struct has unknown properties', t => {
  t.plan(2);

  t.false(isModeType({
    duration_s: U32_TYPE_ID,
    team_size: U32_TYPE_ID,
    position: FLOAT3_TYPE_ID,
    requirements: YAML_SEQ_ID,
    levels: YAML_SEQ_ID,
    unknown_field: U32_TYPE_ID,
  }));

  t.false(isModeType({
    duration_s: U32_TYPE_ID,
  }))
});

test('should be falsy if struct has property with a bad type', t => {
  t.plan(1);

  t.false(isModeType({
    duration_s: YAML_SEQ_ID,
    team_size: YAML_SEQ_ID,
    position: YAML_SEQ_ID,
    requirements: YAML_SEQ_ID,
    levels: YAML_SEQ_ID,
    unknown_field: YAML_SEQ_ID,
  }));
});