Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 1,
    hasMore: true,
    list: []
  },

  loadMore (callback) {
    const start = (this.data.currentPage - 1) * 30
    const stop = start + 30

    if (start > 100) {
      // no more
      return this.setData({ hasMore: false })
    }

    const list = start ? this.data.list : []

    for (let i = start; i < stop; i++) {
      list.push({
        title: '首个美人鱼节开启' + i,
        image: 'http://imgbdb2.bendibao.com/szbdb/20178/31/2017831234922_49973.gif',
        locale: '深圳蛇口海湾路8号价值工厂（iFactory）',
        price: '免费',
        score: '4.9'
      })
    }

    setTimeout(() => {
      this.setData({ list, currentPage: this.data.currentPage + 1 })
      typeof callback === 'function' && callback()
    }, Math.random() * 2000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.loadMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    this.setData({ hasMore: true, currentPage: 1 })
    this.loadMore(() => wx.stopPullDownRefresh())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {

  },
  showInput () {
    this.setData({ inputShowed: true })
  },
  hideInput () {
    this.setData({ inputVal: '', inputShowed: false })
  },
  clearInput () {
    this.setData({ inputVal: '' })
  },
  inputTyping (e) {
    this.setData({ inputVal: e.detail.value })
  }
})
