//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    scanRlt: "",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    units: app.globalData.goods.units,
    searchText: '',
    goods : []  
  },
  onLoad: function (option) {
    this.getGoodsList();
  },
  //事件处理函数
  sanQrcode: function() {
    var that = this;
    console.log("test")
    // 扫码获取条码信息
    wx.scanCode({
      success: (res) => {
        // that.setData({
        //   "scanRlt": res.result
        // });
        // 导航到添加商品页面
        // wx.navigateTo({
        //   url: '/pages/goods/goods?barcode=' + res.result
        // })
      }
    });
  },
  // 查询商品信息
  getGoodsList: function() {
    let _this = this;
    wx.request({
      url: 'http://zstore.butterfly.mopaasapp.com/api/goods/list', //仅为示例，并非真实的接口地址
      data: {
        keyword: _this.searchText
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log('查询商品信息', res.data)
        this.setData({
          goods: [
            {
              "id": "0",
              "name": "充电宝",
              "price": 100,
              "unit": 0,
              "remark": "测试"
            },
            {
              "id": "1",
              "name": "魅蓝手机Max",
              "price": 1600,
              "unit": 0,
              "remark": "测试"
            },
            {
              "id": "2",
              "name": "暖宝宝",
              "price": 2,
              "unit": 2,
              "remark": "测试"
            }
          ]
        })
      }
    })
  }
})
