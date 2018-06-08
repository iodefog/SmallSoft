// pages/mine/contactus/contactus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      dataArray:[{"title":"官方网址:","value":"http://www.iqrgo.com"},
        { "title": "邮箱:", "value": "arcticfoxstudio@163.com" },
        { "title": "手机:", "value": "17600006007" },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  itemTap : function(e){
    var id = e.currentTarget.dataset.id;
    if(id == 0){
      
    }
    else if(id == 1){

    }
    else if(id ==2){

    }
  }
})