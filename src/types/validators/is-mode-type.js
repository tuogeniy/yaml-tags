import {
  FLOAT3_TYPE_ID,
  U32_TYPE_ID,
  YAML_SEQ_ID,
} from '../ids.js';

const modeTypeDef = {
  duration_s: U32_TYPE_ID,
  team_size: U32_TYPE_ID,
  position: FLOAT3_TYPE_ID,
  requirements: YAML_SEQ_ID,
  levels: YAML_SEQ_ID,
};

const TYPE_DEF_KEYS_NUM = Object.keys(modeTypeDef).length;

export const isModeType = typeDef => {
  if (Object.keys(typeDef).length !== TYPE_DEF_KEYS_NUM) {
    return false;
  }

  return Object
    .entries(modeTypeDef)
    .every(([key, type]) => typeDef[key] === type);
};
