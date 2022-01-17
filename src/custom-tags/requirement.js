import { REQUIREMENT_TYPE_ID } from '../types/ids.js';
import { isRequirementType } from '../types/validators/index.js';
import { getTypeDef } from '../shared/yaml-tools.js';

export const requirement = {
  tag: REQUIREMENT_TYPE_ID,
  collection: 'map',
  resolve: map => {
    const typeDef = getTypeDef(map.items);

    if (!isRequirementType(typeDef)) {
      throw new Error(`Value must be ${REQUIREMENT_TYPE_ID} type`);
    }

    return map;
  },
}
