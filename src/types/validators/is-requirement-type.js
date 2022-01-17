import { U32_TYPE_ID } from '../ids.js';

const requirementTypeDef = {
  min_battles: U32_TYPE_ID,
};

const TYPE_DEF_KEYS_NUM = Object.keys(requirementTypeDef).length;

export const isRequirementType = typeDef => {
  if (Object.keys(typeDef).length !== TYPE_DEF_KEYS_NUM) {
    return false;
  }

  return Object
    .entries(requirementTypeDef)
    .every(([key, type]) => typeDef[key] === type);
};
