import { isEnumType } from '../types/validators/index.js';
import { ENUM_TYPE_ID } from '../types/ids.js';

export const enumTag = {
  tag: ENUM_TYPE_ID,
  resolve: enumCandidate => {
    if (!isEnumType(enumCandidate)) {
      throw new Error(`Value '${enumCandidate}' must be Enum'`);
    }

    const enumType = enumCandidate;
    
    return enumType;
  },
};
