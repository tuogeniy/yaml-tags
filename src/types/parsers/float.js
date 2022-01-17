export const pParseFloat = value => {
  const floatCandidate = Number(value);

  if (Number.isNaN(floatCandidate)) {
    throw new Error(`Value '${value}' must be float`);
  }

  const float = floatCandidate;

  return float;
};
