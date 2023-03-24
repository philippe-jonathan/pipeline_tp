import Pet from "../../src/models/Pet"

describe("Testing Pet class", () => {
  describe("Normal creation", () => {
    let cat: Pet
    beforeAll(() => {
      cat = new Pet(2, 'Donkey', 'cat', new Date("03/23/2023"))
    })
    test("should create a cat", () => {
      expect(cat).toBeInstanceOf(Pet)
    })
  })
  describe("Creation with missing params", () => {
    test("should raise an MissingDataError error", () => {
      expect(
        () => {
          const pet = new Pet(undefined, "Donkey", undefined, undefined)
        }
      ).toThrowError()
    })
  })
  describe("JSON representation", () => {
    let pet: Pet
    let json: object
    beforeAll(() => {
      pet = new Pet(1, "Pastèque", "dog", new Date("03/24/2023"))
      json = pet.toJSON()
    })
    test("Generate JSON", () => {
      expect(json).toBeInstanceOf(Object)
    })
  })
})