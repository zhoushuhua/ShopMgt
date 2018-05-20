//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    units : app.globalData.goods.units,
    sorts : app.globalData.goods.sorts,
    SortIdx: 0,
    UnitIdx: 0,
    rdonly : false
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindSortChange: function (e) {
    console.log('bindNormalChange', e.detail.value)
    this.setData({
      SortIdx: e.detail.value
    })
  },
  bindUnitChange: function (e) {
    console.log('bindNormalChange', e.detail.value)
    this.setData({
      UnitIdx: e.detail.value
    })
  },
  onLoad: function (option) {

    // 获取条码信息
    console.log("test", option.barcode)
    this.setData({
      "barcode": option.barcode
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  formSubmit: function(e) {
    console.log("formSubmit:", e)
  }
})