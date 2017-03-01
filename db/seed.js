const db = require('APP/db')

const data = require('../seed.json')

const seedData = () => db.Promise.map(Object.keys(data), function(model) {
    return db.Promise.map(data[model], function(item){
      return db.model(model)
      .create(item)
    })
})

const seedProducts = () => db.Promise.map([
  {name: "Kryptonite", description: "The man of steel's main weakness, also really shiny" },
  {name: "Laser beams", description: "Pew Pew"}
], product =>  db.model('products').create(product).then((product) => product.addCategories([1,2])))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedData)
  .then(seededData => console.log(`data is seededData`))
  .catch(error => console.error(error))
  .finally(() => db.close())
