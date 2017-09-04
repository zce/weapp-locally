Page({
  /**
   * 页面的初始数据
   */
  data: {
    slides: [],
    grids: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    const slides = [
      { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg', link: '' },
      { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg', link: '/pages/list/list?cat=10' }
    ]

    const grids = [
      { icon: '/assets/icons/grid-01.png', text: '美食', category_id: 1 },
      { icon: '/assets/icons/grid-02.png', text: '洗浴足疗', category_id: 2 },
      { icon: '/assets/icons/grid-03.png', text: '结婚啦', category_id: 3 },
      { icon: '/assets/icons/grid-04.png', text: '卡拉OK', category_id: 4 },
      { icon: '/assets/icons/grid-05.png', text: '找工作', category_id: 5 },
      { icon: '/assets/icons/grid-06.png', text: '辅导班', category_id: 6 },
      { icon: '/assets/icons/grid-07.png', text: '汽车保养', category_id: 7 },
      { icon: '/assets/icons/grid-08.png', text: '租房', category_id: 8 },
      { icon: '/assets/icons/grid-09.png', text: '装修', category_id: 9 }
    ]

    this.setData({ slides, grids })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {

  }
})
