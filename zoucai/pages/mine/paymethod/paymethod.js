// pages/mine/paymethod/paymethod.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTip:"",
    tipsItems: [{ "name": "支付前置", checked: 'true', "tip": "用餐者必须先付款，才能享受用餐服务" }, 
    { "name": "支付后置", "tip": "用餐者可以先用餐，而后通过线上支付结账" }, 
    { "name": "线下支付", "tip": "用餐者可以先用餐，而后通过线下方式（例如，现金）结账，此方式请商家记得让客户结账，避免损失。"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentTip: this.data.tipsItems[0].tip,
    })
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

  paymethodTap: function(e){
    var method = e.detail.value;
    self = this;
    this.setData({
      currentTip: method,
    })
  }
})