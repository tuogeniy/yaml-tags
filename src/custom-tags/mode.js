import { MODE_TYPE_ID } from '../types/ids.js';
import { isModeType } from '../types/validators/index.js';
import { getTypeDef } from '../shared/yaml-tools.js';

export const mode = {
  tag: MODE_TYPE_ID,
  collection: 'map',
  resolve: map => {
    const typeDef = getTypeDef(map.items);

    if (!isModeType(typeDef)) {
      throw new Error(`Value must be ${MODE_TYPE_ID} type`);
    }

    return map;
  },
}
