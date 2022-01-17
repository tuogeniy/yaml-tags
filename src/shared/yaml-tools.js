import { Scalar, YAMLSeq, YAMLMap } from 'yaml';

export const getTypeDef = items => items.reduce((map, item) => {
  if (item.value instanceof Scalar) {
    map[item.key.value] = item.value.tag;
  } else if (item.value instanceof YAMLSeq) {
    map[item.key.value] = YAMLSeq.tagName;
  } else if (item.value instanceof YAMLMap) {
    map[item.key.value] = YAMLMap.tagName;
  } else {
    throw new Error('Unknown type');
  }

  return map;
}, {});
