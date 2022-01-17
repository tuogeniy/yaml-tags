import { parseU32 } from '../types/parsers/index.js';
import { U32_TYPE_ID } from '../types/ids.js';

export const u32 = {
  tag: U32_TYPE_ID,
  resolve: value => parseU32(value),
};
