const U32_MAX_VALUE = 0xFFFFFFFF;
const U32_MIN_VALUE = 0;

export const parseU32 = value => {
  const u32Candidate = Number(value);

  if (!Number.isInteger(u32Candidate)) {
    throw new Error(`Value '${value}' must be u32`);
  }

  if (Number.isNaN(u32Candidate)) {
    throw new Error(`Value '${value}' must be u32`);
  }

  if (u32Candidate > U32_MAX_VALUE || u32Candidate < U32_MIN_VALUE) {
    throw new Error(`Value '${value}' must be u32`);
  }
  
  const u32 = u32Candidate;

  return u32;
};

