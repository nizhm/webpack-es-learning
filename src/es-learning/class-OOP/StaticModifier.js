class StaticModifier {
  static n = 'nizhm'
  static age = '25'
  static printProfile() {
    console.log(`${this.n} is ${StaticModifier.age} years old.`)
  }
}

// console.log(StaticModifier)
// console.log(StaticModifier.n)
// console.log(StaticModifier.age)
// StaticModifier.printProfile()
// let obj = new StaticModifier()
// console.log(obj)

class SubStaticModifier extends StaticModifier{
  static n = 'ni'
  static age = '26'
  static printProfile() {
    // console.log(`${super.n} is ${this.age} years old.`)
    super.printProfile()
  }
}

console.log(SubStaticModifier)
console.log(SubStaticModifier.n)
console.log(SubStaticModifier.age)
SubStaticModifier.printProfile()
let subObj = new SubStaticModifier()
console.log(subObj)

exports.StaticModifier = StaticModifier