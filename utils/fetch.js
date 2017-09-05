const app = getApp()

module.exports = (url, data, method = 'GET', header = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: app.config.apiBase + url,
      data,
      header,
      method,
      dataType: 'json',
      success: resolve,
      fail: reject
    })
  })
}
