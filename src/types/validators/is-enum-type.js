const enumValues = [
  'GameModes',
  'GameLevels',
  'GameCharacters',
];

export const isEnumType = value => enumValues.some(enumValue => enumValue === value);
