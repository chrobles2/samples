class Car {
  constructor(val) {
    this.plate = val
  }
}

class Spot {
  constructor(Id) {
    this.isOccupied = false
    this.Id = Id
    this.car = null
  }

  park(car) {
    this.car = car
    this.isOccupied = true
  }
}

class Garage {
  constructor(params) {
    this.map = []
    this.lookUp = {}
    this.init(params['floors'], params['spots'])
  }

  init(floors, spots) {
    let Id = 1
    for (let i = 0; i < floors; i++) {
      let floor = []
      for (let j = 0; j < spots; j++) {
        let spot = new Spot(Id)
        floor.push(spot)
        this.lookUp[Id] = spot
        Id++
      }
      this.map.push(floor)
    }
  }

  park(car, spotId) {
    this.lookUp[spotId].park(car)
  }
}

let g = new Garage({floors: 2, spots: 5})
console.log(g.map)
console.log(g.lookUp)

let c = new Car('BIGDAN')

g.park(c, 3)

console.log(g.map)
console.log(g.lookUp)