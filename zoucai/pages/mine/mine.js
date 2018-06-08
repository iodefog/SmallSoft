
import{
  merchantget
} from "../api/apis.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: null,
    serverOn: true,
    serverTitle: "正在营业",
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
    var self = this;
    merchantget({
      success(res) {
        var data = res.data.data;
        self.setData({
          userData: data,
        })

        console.log(data)
      }
    })
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


  serverChange : function(e){
    var option = e.detail.value;
    var title = "正在营业";
    if (option == false){
      title = "打烊";
    }
    this.setData({
      serverOn: option,
      serverTitle: title,
    })
  },

  mineItemTap:function(e){
    var showtype = e.currentTarget.dataset.replyType;
  if(showtype == "0"){
    wx.navigateTo({
      url: "./paymethod/paymethod",
    })
  }
  else if (showtype == "1") {
    wx.navigateTo({
      url: "./password/password",
    })
  }
  else if (showtype == "2") {
    wx.navigateTo({
      url: "./contactus/contactus",
    })
  }
  else if (showtype == "3") {
    wx.navigateTo({
      url: "../web/web?url=http://api.iqrgo.com/qrgo_agreement.html&title=码上用户协议",
    })
  }
  }
})