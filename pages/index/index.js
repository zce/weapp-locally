const fetch = require('../../utils/fetch')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    slides: [],
    categories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    fetch('/slides')
      .then(res => {
        this.setData({ slides: res.data })
      })

    fetch('/categories')
      .then(res => {
        this.setData({ categories: res.data })
      })

    // const slides = [
    //   { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg', link: '' },
    //   { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg', link: '/pages/list/list?cat=10' }
    // ]

    // const categories = [
    //   { icon: '/assets/icons/grid-01.png', text: '美食', category_id: 1 },
    //   { icon: '/assets/icons/grid-02.png', text: '洗浴足疗', category_id: 2 },
    //   { icon: '/assets/icons/grid-03.png', text: '结婚啦', category_id: 3 },
    //   { icon: '/assets/icons/grid-04.png', text: '卡拉OK', category_id: 4 },
    //   { icon: '/assets/icons/grid-05.png', text: '找工作', category_id: 5 },
    //   { icon: '/assets/icons/grid-06.png', text: '辅导班', category_id: 6 },
    //   { icon: '/assets/icons/grid-07.png', text: '汽车保养', category_id: 7 },
    //   { icon: '/assets/icons/grid-08.png', text: '租房', category_id: 8 },
    //   { icon: '/assets/icons/grid-09.png', text: '装修', category_id: 9 }
    // ]

    // this.setData({ slides, categories })
  }
})
