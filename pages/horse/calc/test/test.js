Page({
  scroll: function(e) {
    console.log(e.detail)
  },

  sliderChanging: function(e) {
    console.log(e.detail.value)
  }, 
  
  onReady: function() {
    //创建InnerAudioContext实例
    var audioCtx = wx.createInnerAudioContext()
    //设置音频资源地址
    audioCtx.src = 'https://music.163.com/#/song?id=569214247&autoplay=true&market=baiduhd'
    //当开始播放时，输出调试信息
    audioCtx.onPlay(function() {
      console.log('开始播放')
    })
    //当发生错误时，输出调试信息
    audioCtx.onError(function(res) {
      console.log(res.errMsg)
      console.log(res.errCode)
    })

    //开始播放
    audioCtx.play()
  }
})