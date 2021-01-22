import { Validator } from './validator'
import { validateVersion } from './versions'

export class Generator {
  public name: string
  public calVer: string

  constructor(version: string) {
    validateVersion(version)

    const [name, calVer] = version.split('-')
    this.name = name
    this.calVer = calVer
  }

  /**
   * Generates valid, minfied, and ordered (alphabetized keys) schema
   * Raises if the unordered json does not Validate against the Generator's schema
   *
   * @param unordered
   */
  public generateJSON(unordered: { [key: string]: any }): string {
    // validate the schema
    const version = this.name.concat('-').concat(this.calVer)
    const validator = new Validator(version)
    const validated = validator.validate(unordered)
    if (!validated) {
      throw new Error(`JSON does not conform to the ${version} schema.`)
    }

    // alphabetize key
    const ordered: { [key: string]: {} } = {}
    Object.keys(unordered)
      .sort()
      .forEach(key => {
        ordered[key] = unordered[key]
      })

    return JSON.stringify(ordered) // minify
  }
}
