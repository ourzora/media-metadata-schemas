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
    describe('20210604', () => {
      it('requires all keys', () => {
        const validator = new Validator('zora-20210604')
        const json = {
          description: 'blah',
          mimeType: 'application/json',
          name: 'who cares'
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('does not allow additional properties', () => {
        const validator = new Validator('zora-20210604')
        const json = {
          description: 'blah',
          mimeType: 'application/json',
          name: 'who cares',
          version: 'zora-20210604',
          someAdditionalProperty: 'okay'
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('requires string values', () => {
        const validator = new Validator('zora-20210604')
        const json = {
          description: 'blah',
          mimeType: 'application/json',
          name: 100,
          version: 'zora-20210604'
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('validates a valid minimal schema', () => {
        const validator = new Validator('zora-20210604')
        const json = {
          description: 'blah',
          mimeType: 'application/json',
          name: 'who cares',
          version: 'zora-20210604'
        }

        const result = validator.validate(json)
        expect(result).toBe(true)
      })

      it('validates a valid full schema', () => {
        const validator = new Validator('zora-20210604')
        const json = {
          description: 'blah',
          mimeType: 'application/json',
          name: 'who cares',
          version: 'zora-20210604',
          image: 'someURL',
          external_url: 'zora.co',
          animation_url: 'zora.co',
          attributes: [{trait_type: 'color', value: 'blue'}, {trait_type: 'rank', value: 1, display_type: 'number'}, {trait_type: 'good?', value: true, display_type: 'boolean'}]
        }

        const result = validator.validate(json)
        expect(result).toBe(true)
      })
    })
  })
  describe('catalog', () => {
    describe('20210202', () => {
      it('requires all keys', () => {
        const validator = new Validator('catalog-20210202')
        const json = {
          body: {
            version: "catalog-20210202",
            title: "Never Gonna Give You Up",
            notes: "An unexpected classic"
          }
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('does not allow additional properties', () => {
        const validator = new Validator('catalog-20210202')
        const json = {
          body: {
            version: "catalog-20210202",
            title: "Never Gonna Give You Up",
            artist: "Rick Astley",
            notes: "An unexpected classic",
            duration: 213.1,
            grammyNominated: "I wish",
            mimeType: "audio/aiff",
            trackNumber: null,
            project: null,
            artwork: {
              isNft: false,
              info: {
                uri: "https://img.discogs.com/Q8B0-mvrVFLPx5jZLlRa2zialII=/fit-in/584x579/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-995860-1300387504.jpeg.jpg",
                mimeType: "image/jpeg"
              },
              nft: null
            },
            visualizer: {
              isNft: false,
              info: {
                uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                mimeType: "video/mp4"
              },
              nft: null
            }
          },
          origin: {
            algorithm: "secp256k1",
            encoding: "rlp",
            publicKey: "0xc236541380fc0C2C05c2F2c6c52a21ED57c37952",
            signature: "0x2d7c0dc8a9252bb8cf0e654c58badb0585f41941270765e46c238a1692243e6d128bbaf072c2886348d49498794365f60f1793a758a7d1c281affc9c81de61ae1b"
          }
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })
      it('does not allow forbidden audio file formats', () => {
        const validator = new Validator('catalog-20210202')
        const json = {
           body: {
            version: "catalog-20210202",
            title: "Never Gonna Give You Up",
            artist: "Rick Astley",
            notes: "An unexpected classic",
            duration: 213.1,
            mimeType: "audio/mp3",
            trackNumber: null,
            project: null,
            artwork: {
              isNft: false,
              info: {
                uri: "https://img.discogs.com/Q8B0-mvrVFLPx5jZLlRa2zialII=/fit-in/584x579/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-995860-1300387504.jpeg.jpg",
                mimeType: "image/jpeg"
              },
              nft: null
            },
            visualizer: {
              isNft: false,
              info: {
                uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                mimeType: "video/mp4"
              },
              nft: null
            }
          },
          origin: {
            algorithm: "secp256k1",
            encoding: "rlp",
            publicKey: "0xc236541380fc0C2C05c2F2c6c52a21ED57c37952",
            signature: "0x2d7c0dc8a9252bb8cf0e654c58badb0585f41941270765e46c238a1692243e6d128bbaf072c2886348d49498794365f60f1793a758a7d1c281affc9c81de61ae1b"
          }
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('requires properties are of the correct type', () => {
        const validator = new Validator('catalog-20210202')
        const json = {
          body: {
            version: "catalog-20210202",
            title: "Never Gonna Give You Up",
            artist: "Rick Astley",
            notes: "An unexpected classic",
            duration: "213.1",
            grammyNominated: "I wish",
            mimeType: "audio/aiff",
            trackNumber: null,
            project: null,
            artwork: {
              isNft: "false",
              info: {
                uri: "https://img.discogs.com/Q8B0-mvrVFLPx5jZLlRa2zialII=/fit-in/584x579/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-995860-1300387504.jpeg.jpg",
                mimeType: "image/jpeg"
              },
              nft: null
            },
            visualizer: {
              isNft: false,
              info: {
                uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                mimeType: "video/mp4"
              },
              nft: null
            }
          },
          origin: {
            algorithm: "secp256k1",
            encoding: "rlp",
            publicKey: "0xc236541380fc0C2C05c2F2c6c52a21ED57c37952",
            signature: "0x2d7c0dc8a9252bb8cf0e654c58badb0585f41941270765e46c238a1692243e6d128bbaf072c2886348d49498794365f60f1793a758a7d1c281affc9c81de61ae1b"
          }
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('does not allow null for non-nullable fields', () => {
        const validator = new Validator('catalog-20210202')
        const json = {
          body: {
            version: "catalog-20210202",
            title: null,
            artist: null,
            notes: "An unexpected classic",
            duration: 213.1,
            grammyNominated: "I wish",
            mimeType: "audio/aiff",
            trackNumber: null,
            project: null,
            artwork: {
              isNft: false,
              info: {
                uri: "https://img.discogs.com/Q8B0-mvrVFLPx5jZLlRa2zialII=/fit-in/584x579/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-995860-1300387504.jpeg.jpg",
                mimeType: "image/jpeg"
              },
              nft: null
            },
            visualizer: {
              isNft: false,
              info: {
                uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                mimeType: "video/mp4"
              },
              nft: null
            }
          },
          origin: {
            algorithm: "secp256k1",
            encoding: "rlp",
            publicKey: "0xc236541380fc0C2C05c2F2c6c52a21ED57c37952",
            signature: "0x2d7c0dc8a9252bb8cf0e654c58badb0585f41941270765e46c238a1692243e6d128bbaf072c2886348d49498794365f60f1793a758a7d1c281affc9c81de61ae1b"
          }
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('does not allow an empty artist field', () => {
        const validator = new Validator('catalog-20210202')
        const json = {
          body: {
            version: "catalog-20210202",
            title: "Never Gonna Give You Up",
            artist: "",
            notes: "An unexpected classic",
            duration: 213.1,
            grammyNominated: "I wish",
            mimeType: "audio/aiff",
            trackNumber: null,
            project: null,
            artwork: {
              isNft: false,
              info: {
                uri: "https://img.discogs.com/Q8B0-mvrVFLPx5jZLlRa2zialII=/fit-in/584x579/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-995860-1300387504.jpeg.jpg",
                mimeType: "image/jpeg"
              },
              nft: null
            },
            visualizer: {
              isNft: false,
              info: {
                uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                mimeType: "video/mp4"
              },
              nft: null
            }
          },
          origin: {
            algorithm: "secp256k1",
            encoding: "rlp",
            publicKey: "0xc236541380fc0C2C05c2F2c6c52a21ED57c37952",
            signature: "0x2d7c0dc8a9252bb8cf0e654c58badb0585f41941270765e46c238a1692243e6d128bbaf072c2886348d49498794365f60f1793a758a7d1c281affc9c81de61ae1b"
          }
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('requires the correct Catalog schema version', () => {
        const validator = new Validator('catalog-20210202')
        const json = {
          body: {
            version: "catalog-0",
            title: "Our Taproot",
            artist: "Omari Jazz",
            notes: null,
            duration: 1.0,
            mimeType: "audio/aiff",
            trackNumber: 9,
            project: {
              title: "Dream Child",
              artwork: {
                isNft: false,
                info: {
                  uri: "https://ipfs.io/ipfs/QmRMDmDsQPGaNhRikBgTiCDjtk93uuBPwN5myeYXczV9Ug",
                  mimeType: "image/jpeg"
                },
                nft: null
              }
            },
            artwork: {
              isNft: false,
              info: {
                uri: "https://ipfs.io/ipfs/QmRMDmDsQPGaNhRikBgTiCDjtk93uuBPwN5myeYXczV9Ug",
                mimeType: "image/jpeg"
              },
              nft: null
            },
            visualizer: {
              isNft: false,
              info: {
                uri: "https://ipfs.io/ipfs/QmQnDQbc7wDnVdtXbdrbY5ifwGw6QPAQGLwBvrV444vPhH",
                mimeType: "video/mp4"
              },
              nft: null
            }
          },
          origin: {
            algorithm: "secp256k1",
            encoding: "rlp",
            publicKey: "0xc236541380fc0C2C05c2F2c6c52a21ED57c37952",
            signature: "0x2d7c0dc8a9252bb8cf0e654c58badb0585f41941270765e46c238a1692243e6d128bbaf072c2886348d49498794365f60f1793a758a7d1c281affc9c81de61ae1b"
          }
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('validates a valid Catalog metadata schema (with non-NFT cover art)', () => {
        const validator = new Validator('catalog-20210202')
        const json = {
          body: {
            version: "catalog-20210202",
            title: "Our Taproot",
            artist: "Omari Jazz",
            notes: null,
            duration: 1.0,
            mimeType: "audio/aiff",
            trackNumber: 9,
            project: {
              title: "Dream Child",
              artwork: {
                isNft: false,
                info: {
                  uri: "https://ipfs.io/ipfs/QmRMDmDsQPGaNhRikBgTiCDjtk93uuBPwN5myeYXczV9Ug",
                  mimeType: "image/jpeg"
                },
                nft: null
              }
            },
            artwork: {
              isNft: false,
              info: {
                uri: "https://ipfs.io/ipfs/QmRMDmDsQPGaNhRikBgTiCDjtk93uuBPwN5myeYXczV9Ug",
                mimeType: "image/jpeg"
              },
              nft: null
            },
            visualizer: {
              isNft: false,
              info: {
                uri: "https://ipfs.io/ipfs/QmQnDQbc7wDnVdtXbdrbY5ifwGw6QPAQGLwBvrV444vPhH",
                mimeType: "video/mp4"
              },
              nft: null
            }
          },
          origin: {
            algorithm: "secp256k1",
            encoding: "rlp",
            publicKey: "0xc236541380fc0C2C05c2F2c6c52a21ED57c37952",
            signature: "0x2d7c0dc8a9252bb8cf0e654c58badb0585f41941270765e46c238a1692243e6d128bbaf072c2886348d49498794365f60f1793a758a7d1c281affc9c81de61ae1b"
          }
        }

        const result = validator.validate(json)
        expect(result).toBe(true)
      })

      it('validates a valid Catalog metadata schema (with NFTs)', () => {
        const validator = new Validator('catalog-20210202')
        const json = {
          body: {
            version: "catalog-20210202",
            title: "Our Taproot",
            artist: "Omari Jazz",
            notes: null,
            duration: 1.0,
            mimeType: "audio/aiff",
            trackNumber: 9,
            project: {
              title: "Dream Child",
              artwork: {
                isNft: false,
                info: {
                  uri: "https://ipfs.io/ipfs/QmRMDmDsQPGaNhRikBgTiCDjtk93uuBPwN5myeYXczV9Ug",
                  mimeType: "image/jpeg"
                },
                nft: null
              }
            },
            artwork: {
              isNft: true,
              info: null,
              nft: {
                chainId: 1,
                contractAddress: "0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7",
                tokenId: 147
              }
            },
            visualizer: {
              isNft: false,
              info: null,
              nft: {
                chainId: 1,
                contractAddress: "0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7",
                tokenId: 147
              }
            }
          },
          origin: {
            algorithm: "secp256k1",
            encoding: "rlp",
            publicKey: "0xc236541380fc0C2C05c2F2c6c52a21ED57c37952",
            signature: "0x2d7c0dc8a9252bb8cf0e654c58badb0585f41941270765e46c238a1692243e6d128bbaf072c2886348d49498794365f60f1793a758a7d1c281affc9c81de61ae1b"
          }
        }

        const result = validator.validate(json)
        expect(result).toBe(true)
      })
    })
  })

  describe('amulet', () => {
    describe('20210221', () => {
      it('requires all keys', () => {
        const validator = new Validator('amulet-20210221')
        const json = {
          description: 'it is an amulet, what do you want from me!',
          mimeType: 'text/plain',
          name: 'a fine amulet',
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('cannot be assigned a random rarity', () => {
        const validator = new Validator('amulet-20210221')
        const json = {
          version: 'amulet-20210221',
          description: 'it is an amulet, what do you want from me!',
          mimeType: 'text/plain',
          name: 'a fine amulet',
          rarity: 'hyperrare'
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })

      it('must be of mimeType text/plain', () => {
        const validator = new Validator('amulet-20210221')
        const json = {
          version: 'amulet-20210101',
          carbonOffsetURL: 'https://dashboard.cloverly.com/receipt/20210223-9e38b918ecfd9bfb051287bf71556736',
          description: 'it is a picture of an amulet',
          mimeType: 'image/jpeg',
          name: 'pic of my amulet',
          poemText: 'DON\'T WORRY.',
          rarity: 'common'
        }

        const result = validator.validate(json)
        expect(result).toBe(false)
      })
    })
  })
})
