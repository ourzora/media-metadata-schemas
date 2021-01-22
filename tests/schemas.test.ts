import { Validator } from '../src/validator'

describe('schemas', () => {
  describe('zora', () => {
    describe('20210101', () => {
      it('requires all keys', () => {
        const validator = new Validator('zora-20210101')
        const json = {
          description: 'blah',
          mimeType: 'application/json',
          name: 'who cares'
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('does not allow additional properties', () => {
        const validator = new Validator('zora-20210101')
        const json = {
          description: 'blah',
          mimeType: 'application/json',
          name: 'who cares',
          version: 'zora-01012021',
          someAdditionalProperty: 'okay'
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('requires string values', () => {
        const validator = new Validator('zora-20210101')
        const json = {
          description: 'blah',
          mimeType: 'application/json',
          name: 100,
          version: 'zora-01012021'
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('validates a valid schema', () => {
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
    })
  })
})
