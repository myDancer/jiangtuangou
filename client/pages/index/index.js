//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
      initData: null,
      onePageCatalogs: [],
      twoPageCatalogs: []
  },
  onLoad: function () {
    this.getInitData() // 初始化数据
  },
  getInitData: function () {
    let _this = this;
    qcloud.request({
      url: config.service.init,
      login: false,
      success(result) {
        if (result.data.code == 0) {
          console.log(result.data.data);
          _this.setData({
            initData: result.data.data,
            onePageCatalogs: result.data.data.catalogs.slice(0, 10),
            twoPageCatalogs: result.data.data.catalogs.slice(10)
          })
        }
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  }
})
