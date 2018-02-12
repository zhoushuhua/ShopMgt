//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    scanRlt: "",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  sanQrcode: function() {
    var that = this;
    console.log("test")
    // 扫码获取条码信息
    wx.scanCode({
      success: (res) => {
        that.setData({
          "scanRlt": res.result
        });
      }
    });

    // 导航到添加商品页面
    // wx.navigateTo({
    //   url: '/pages/goods/goods'
    // })
  }
})
