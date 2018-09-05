const { mysql } = require('../qcloud')
// 获取商店详情

async function get (ctx, next) {
  let restaurant_id = ctx.query.id
  if (restaurant_id) {
    let menu = await mysql('restaurantMenu').where({restaurant_id: restaurant_id}).select('id', 'name')
    ctx.state.data = { menu }
  } else {
    ctx.state.code = -1
    ctx.state.data = '缺少id'
  }
}

module.exports = {
  get
}