Page({
  data: {
      num1: 0,
      num2: 0,
      result: ''
  },

  onLoad: function(options) {
      console.log('---onLoad-页面加载----')
      console.log('options-页面传值: ', options)
  },

  onReady: function() {
      console.log('onReady-页面初次渲染完成')
      var app = getApp()
      console.log("globalData: ", app.globalData)
      app.globalFunction()
  },

  onShow: function() {
    console.log('onShow-页面显示')
  },
  
  onShareAppMessage: function(options) {
    console.log('onShareAppMessage-分享')
    console.log('分享：', options)
  },

  onError: function(err) {
    console.log('onError执行', err)
  },

  onPageNotFound: function(options) {
    console.log('onPageNotFound: ', options)
  },

  //如下三个页面事件处理函数在页面出现滚动条时触发出现
  onPullDownRefresh: function() {
    console.log('此时用户下拉触顶')
  }, 
  onReachBottom: function() {
    console.log('此时用户上拉触底')
  },
  onPageScroll: function(options) {
    console.log('此时用户在滚动页面')
    console.log('滚动距离: ' + options.scrollTop)
  },

  viewtap: function(e) {
    //e.target获取自元素属性集合
    //e.currentTarget获取父元素属性值集合
    console.log(e.target.id + '-' + e.currentTarget.id)
  },

  outertap: function(e) {
    console.log('outertap: ', e.target.id, '-', e.currentTarget.id)
  },
  middletap: function(e) {
    console.log('middletap: ', e.target.id, '-', e.currentTarget.id)
  },
  innertap: function(e) {
    console.log('innertap: ', e.target.id, '-', e.currentTarget.id)
  },

  formCompare: function(e) {
    console.log('----计算----', e)
    var str = '两数相等'
    var num1 = (e.detail.value.num1)
    var num2 = (e.detail.value.num2)
    console.log('num1: ', num1, ' num2: ', num2)
    if(num1 > num2) {
      str = '第一个数大'
    } else if (num1 < num2) {
      str = '第二个数大'
    } else if (num1 == num2) {
      str = '两数相等'
    } else {
      str = 'other'
    }
    this.setData({result: str})
  },

  num1change: function(e) {
    console.log('1: ', e)
    this.data.num1 = e.detail.value
    console.log('第一个数字为: ', this.data.num1)
  },
  num2change: function(e) {
    this.data.num2 = e.detail.value
    console.log('第二个数字为: ', this.data.num2)
  },

  change: function(e) {
    this[e.currentTarget.id] = Number(e.detail.value)
  },

  change3: function(e) {
    console.log('change3: ', e)
    var data = {}
    data[e.target.dataset.id] = Number(e.detail.value)
    console.log('e.target.dataset.id: ', e.target.dataset.id)
    console.log('e.detail.value: ', e.detail.value)
    console.log('data: ', data, Number('23'), ' ', Number(e.detail.value))
    this.setData(data)
  }
})