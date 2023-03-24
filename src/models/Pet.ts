import JSONable from "./JSONable"

export default class Pet implements JSONable {
  id?: any
  vetId: Number
  name: string
  kind: string
  birthDate: Date
  constructor(vetId?: Number, name?: string, kind?: string, birthDate?: Date) {
    if(!vetId || !name || !kind || !birthDate) {
      throw new Error("Parms missing")
    }
    this.vetId = vetId
    this.name = name
    this.kind = kind || ""
    this.birthDate = birthDate
  }

  /**
   * @returns Number the current pet's age calculated from its birthDate
   */
  getAge(): number {
    throw new Error("Not implemented")
  }

  /**
   * @returns string `name (vetId): kind, age`
   * @example "Pastèque (123456): dog, 2"
   */
  describe(): string {
    throw new Error("Not implemented")
  }

  /**
   * 
   * @returns a JSON representation of the current Pet
   * @example
   * ```json
   * {
   *    name: "Pastèque",
   *    kind: "dog",
   *    age: 2
   * }
   * ```
   */toJSON(): Object {
    return {
      id: this.id,
      name: this.name,
      kind: this.kind,
      birhtdate: this.birthDate
    }
    throw new Error("Not implemented")
  }
}