import JSONable from "./JSONable"
import Pet from "./Pet"

export default class User implements JSONable {
  id?: any
  firstname: string
  lastname: string
  pets: Pet[]
  constructor(firstname?: string, lastname?: string) {
    if(!firstname || !lastname) {
      throw new Error("Fisrtname and lastname is empty")
    }
    this.firstname = firstname
    this.lastname = lastname
    this.pets = []
  }

  /**
   * @returns string `firstname lastname`
   */
  getFullname(): string {
    return `${this.firstname} ${this.lastname}`
    // throw new Error("Not implemented")
  }

  /**
   * Add a Pet in the user's Pets list
   * @param pet Pet to add to the list
   */
  addPet(pet: Pet) {
    this.pets.push(pet);
    // throw new Error("Not implemented")
  }

  /**
   * Get a Pet in the user's Pets list
   * @param pet Pet to get to the list
   */
  getPet(name: String, kind: String) {
    return this.pets.find(e => e.name === name && e.kind === kind)
  }

  /**
   * 
   * @returns a JSON representation of the current User
   * @example
   * ```json
   * {
   *    firstname: "Nicolas",
   *    lastname: "Espiau",
   *    pets: [
   *      10322
   *    ]
   * }
   * ```
   */
  toJSON() {
    return {
      pets: this.pets
    }
  }
}