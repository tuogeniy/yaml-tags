import { parseFloat3 } from '../types/parsers/index.js';
import { FLOAT3_TYPE_ID } from '../types/ids.js';

export const float3 = {
  tag: FLOAT3_TYPE_ID,
  collection: 'seq',
  resolve: sequence => {
    const float3Candidate = sequence.items.map(item => item.value);
    const float3 = parseFloat3(float3Candidate);
    return float3;
  },
};
