const sec = 2

class Pet {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
}

module.exports = class Class {
  constructor(name) {
    this.name = name
    this.val = 1
    this.pet = null
  }

  get sec() {
    return sec
  }

  change(name) {
    this.name = name
  }

  changeVal(val) {
    this.val = val
  }

  sayHi() {
    console.log('hi')
  }

  adopt() {
    let p = new Pet('tim', 'dog')
    this.pet = p
  }

  walk() {
    if(this.pet === null) return 'i dont have a pet!'
    return 'taking ' + this.pet.name + ' the ' + this.pet.breed + ' for a walk!'
  }
}