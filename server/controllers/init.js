const { mysql } = require('../qcloud')
// 首页数据

async function get (ctx, next) {
  let catalogs = await mysql('catalogs').select('*')
  let restaurants = await mysql('restaurants').select('*')
  for (let key in restaurants) {
    restaurants[key].flavors = await mysql('flavors').where({'restaurant_id': restaurants[key].id}).select('id', 'name')
    restaurants[key].activities = await mysql('activities').where({'restaurant_id': restaurants[key].id}).select('*')
  }
  ctx.state.data = { catalogs, restaurants}
}

module.exports = {
  get
}