//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabs: [],
    activeTab: 0,
    clientHeight: 'auto',

    mockListData: [
      {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }, {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }, {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }, {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }, {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }, {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }, {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }, {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }, {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }, {
        title: '奥委会官宣：2024年和2028年奥运主办正式确认！中国终于不用接锅',
        info: '作者 时间'
      }
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  loadMore: function() {
    console.log(123);
  },

  switchTab: function(e) {
    const ele = e.target.dataset;
    this.setData({
      activeTab: ele.index
    });
  },
  onLoad: function () {
    const that = this;

    wx.showLoading({
      title: '加载中...'
    })

    setTimeout(function() {
      wx.hideLoading()
    }, 2000)

    // init tabs
    if (app.globalData.tabs) {
      this.setData({
        tabs: app.globalData.tabs
      })
    }

    // list height
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          clientHeight: (res.windowHeight - 39) + 'px'
        })
      }
    })
  }
})
