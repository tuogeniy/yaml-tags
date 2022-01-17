import fs from 'fs';
import YAML from 'yaml';
import { u32, float3, enumTag, mode, requirement } from './custom-tags/index.js';

const trace = (obj) => console.dir(obj, { depth: null });

const INPUT_PATH = './input.yaml';

const fileContent = fs.readFileSync(INPUT_PATH, { encoding: 'utf-8' });

const parsedDocument = YAML.parseDocument(fileContent, {
  customTags: [u32, float3, enumTag, mode, requirement],
});

if (parsedDocument.errors.length > 0) {
  throw parsedDocument.errors[0];
}

trace(parsedDocument.toJS());
