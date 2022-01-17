import { pParseFloat } from './float.js';

const FLOAT3_LENGTH = 3;

export const parseFloat3 = float3Candidate => {
  if (!Array.isArray(float3Candidate)) {
    throw new Error(`Value '${float3Candidate}' must be float3'`);
  }

  if (float3Candidate.length !== FLOAT3_LENGTH) {
    throw new Error(`Value '${float3Candidate}' must be float3'`);
  }

  const float3AsArray = float3Candidate.map(pParseFloat);

  const float3 = new Float32Array(float3AsArray);

  return float3;
};
