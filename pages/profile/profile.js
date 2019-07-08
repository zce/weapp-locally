Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  getUserInfo (e) {
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo
    })
  }
})
