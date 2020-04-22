//app.js
App({
  //生命周期回调-监听小程序初始化

  //小程序初始化完成时触发（全局只触发一次）
  onLaunch: function (options) {
    console.log('onLaunch执行')
    console.log('onLaunch-options: ', options)

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('res: ', res)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function() {
      //小程序启动或从后台进入到前台时，执行该操作
      console.log('App onShow')
  },

  onHide: function() {
    //小程序从前台进入后台时，执行该操作
    console.log('App onHide')
  },

  getUserInfo: function(cb) {
      var that = this;
      if(this.globalData.userInfo) {
        typeof cb == "function" && cb(this.globalData.userInfo)
      } else {
        //调用登陆接口
        wx.login({
          complete: (res) => {
            wx.getUserInfo({
              complete: (res) => {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              },
            })
          },
        })
      }
  },

  globalFunction: function() {
    console.log('----全局函数-----')
  },

  globalData: {
    userInfo: null
  }
})