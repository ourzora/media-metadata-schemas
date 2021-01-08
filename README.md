# Media Metadata Schemas

## Usage

## Tests


## Validate

## Generate

## Parse

```
const version = media.getMetadataversion()
const parsedMetadata = parser.parse(version, media.metadata)

switch typeOf(parsedMetadata) {
    case 'Zora20210101': {
        // custom handling for Zora
    }
        
    case 'Mirror20210101': {
        // custom handling for Mirror
    }
}
```

## Define a New Schema

To define a new schema version, locate the directory of your projects name in `schemas/`. If a directory does not already exist create one. 
Within the project directory create a new file with the desired calendar version as the file name example: `schema/zora/20210101.json` 

Define the schema according to JSON Schema specification.

Write some tests in the `schema.tests.ts` file.

Submit a PR! 

Someone on our team will review and merge.


## New Features
TODO: Auto Generate Parser + Type Definitions
TODO: Generate JSON from Input

## Further Reading

- JSON-schema spec: https://tools.ietf.org/html/draft-zyp-json-schema-04
- JSON-schema wiki: https://github.com/json-schema/json-schema/wiki
