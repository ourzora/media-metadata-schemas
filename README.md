# Media Metadata Schemas

## Overview

The Zora Protocol requires media that is minted on its smart contracts contain a URI pointing to its metadata.

The Zora Protocol maintains zero opinion about the structure of that metadata. It is explicitly not enforceable at the blockchain level.

As such, this repository will serve as the source of truth of community supported metadata schemas described by JSON Schema, and will generate Types, Parsers, Generators, and Validators that will be served through the [Zora Development Kit (ZDK)](https://github.com/ourzora/zdk)

## Usage

### Generate

Given a schema version and some nonformatted json it generates a valid, minified, alphabetized json

```typescript
const metadata = {
  version: 'zora-20210101',
  name: randomName,
  description: randomDescription,
  mimeType: mimeType,
}
const generator = new Generator(metadata.version)
const minified = generator.generate(metadata)
```

### Validate

```typescript
const metadata = {
  version: 'zora-20210101',
  name: randomName,
  description: randomDescription,
  mimeType: mimeType,
}

const validator = new Validator(metadata.version)
const validated = validator.validate(metadata)
```

### Parse

```typescript
const json = `
  {
    "version": "zora-20210101",
    "name": "randomName",
    "description": "randomDescription",
    "mimeType": "mimeType"
  }
`

const parser = new Parser('zora-20210101')
const parsed =  parser.parse(json)
```

## Tests

`yarn test`

## Define a New Schema

To define a new schema version, locate the directory of your project's name in `schemas/`. If a directory does not already exist create one. 
Within the project directory create a new file with the desired calendar version as the file name example: `schemas/zora/20210101.json` 

* Define the schema according to JSON Schema specification.
* Write some tests in the `schema.tests.ts` file.
* run `yarn codegen` to generate type specifically for your new schema
* Add your version to the `supportedVersions` and `supportedVersionsTypeMapping` in `versions.ts`
* Add your version type to the exported types in `types.ts`

Submit a PR! 

Someone on our team will review and merge.

## Further Reading

- JSON-schema spec: https://tools.ietf.org/html/draft-zyp-json-schema-04
- JSON-schema wiki: https://github.com/json-schema/json-schema/wiki
