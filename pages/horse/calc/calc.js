Page({
  data: {
    item: 0,
    tab: 0,
    playlist: [{
      id: 1, title: '钢琴协奏曲', singer: '肖邦',
      src: '', coverImgUrl:'../../images/cover.jpg'
    },{
      id: 2, title: '奏鸣曲', singer: '莫扎特',
      src: '', coverImgUrl:'../../images/cover.jpg'
    },{
      id: 3, title: '欢乐颂', singer: '贝多芬',
      src: '', coverImgUrl:'../../images/cover.jpg'
    },{
      id: 4, title: '爱之梦', singer: '李斯特',
      src: '', coverImgUrl:'../../images/cover.jpg'
    }],
    state: 'paused',
    playIndex: 0,
    play: {
      currentTime: '00:00',
      duration:'00:00',
      percent: 0,
      title: '',
      singer: '',
      coverImgUrl: '../../images/cover.jpg'
    },
    audioCtx: null
  },

  onReady: function() {
    this.audioCtx = wx.createInnerAudioContext()
    //默认选择第一曲
    this.setMusic(0)
  },
  setMusic: function(index) {
    var music = this.data.playlist[index]
    this.audioCtx.src = music.src
    this.setData({
      playIndex: index,
      'play.title': music.title,
      'play.singer': music.singer,
      'play.coverImgUrl': music.coverImgUrl,
      'play.currentTime': '00:00',
      'play.duration': '00:00',
      'play.percent': 0
    })
  },

  changeItem: function(e) {
    this.setData({
      item: e.target.dataset.item
    })
  },
  changeTab: function(e) {
    this.setData({
      tab: e.detail.current
    })
  },
  
})