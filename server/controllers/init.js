const { mysql } = require('../qcloud')
// 首页数据

async function get (ctx, next) {
  let catalogs = await mysql('catalogs').select('*')
  let restaurants = await mysql('restaurants').select('*')
  ctx.state.data = { catalogs, restaurants}
}

module.exports = {
  get
}