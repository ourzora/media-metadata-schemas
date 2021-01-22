import { Validator } from '../src/validator'

describe('Validator', () => {
  describe('#constructor', () => {
    it('raises when an unsupported schema version is specified', () => {
      expect(() => {
        new Validator('zora-20190101')
      }).toThrow(
        'There are no versions in the zora namespace with the 20190101 calendar version'
      )

      expect(() => {
        new Validator('coinbase-20190101')
      }).toThrow('There are no versions with the coinbase project name')
    })
  })

  describe('#validate', () => {
    it('it returns true if the schema is correct', () => {
      const validator = new Validator('zora-20210101')
      const json = {
        description: 'blah',
        mimeType: 'application/json',
        name: 'who cares',
        version: 'zora-01012021'
      }

      const result = validator.validate(json)
      expect(result).toBe(true)
    })

    it('it returns false if the schema is incorrect', () => {
      const validator = new Validator('zora-20210101')
      const json = {
        description: 'blah',
        mimeType: 'application/json',
        name: 'who cares',
        version: 'zora-01012021',
        additionalProperty: 'idk'
      }

      const result = validator.validate(json)
      expect(result).toBe(false)
    })
  })
})
