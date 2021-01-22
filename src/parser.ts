import { MetadataLike } from '../types/types'
import { validateVersion } from './versions'

export class Parser {
  public name: string
  public calVer: string

  constructor(version: string) {
    validateVersion(version)

    const [name, calVer] = version.split('-')
    this.name = name
    this.calVer = calVer
  }

  /**
   * Parses the JSON string
   *
   * @param json
   */
  public parse(json: string): MetadataLike {
    const parsed: MetadataLike = JSON.parse(json)
    return parsed
  }
}
