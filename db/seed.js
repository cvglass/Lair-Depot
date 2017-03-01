const db = require('APP/db')

const data = require('../seed.json')
//data[keys]
const seedData = () => db.Promise.map(Object.keys(data), function(model) {
    return db.Promise.map(data[model], function(item){
      return db.model(model)
      .create(item)
    })
})


const seedUsers = () => db.Promise.map(data.users, user => db.model('users').create(user))

const seedOrders = () => db.Promise.map(data.orders, order => db.model('orders').create(order))

const seedCategories = () => db.Promise.map(data.category, category => db.model('category').create(category))
const seedProducts = () => db.Promise.map(data.products, product =>  db.model('products').create({name: product.name, description: product.description}))

const seedProdCat = () => db.Promise.map(data.category_product, cat_prod => db.model('category_product').create(cat_prod))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(seedOrders)
  .then(seedCategories)
  .then(seedProducts)
  .then(seedProdCat)
  .then(() => console.log('done'))
  .catch(error => console.error(error))
  .finally(() => db.close())
