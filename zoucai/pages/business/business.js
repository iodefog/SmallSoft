
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      items:[
        { "icon": "../images/queuing@2x.png", title: "排队", url:"./rownumber/rownumber"},
        { "icon": "../images/take_number@2x.png", title: "叫号",url:"./queue/queue"},
        { "icon": "../images/printer@2x.png", title: "小票机管理", url: "./machine/machine"},
        { "icon": "../images/bank@2x.png", title: "银行卡", url: "./bankcard/bankcard" },
        { "icon": "../images/revenue@2x.png", title: "营收管理", url: "./income/income" },
        { "icon": "../images/bill@2x.png", title: "对账单", url: "../web/web?url=" + app.globalData.HTTPHost + "/statement/apply&title=对账单" },
        { "icon": "../images/prepare@2x.png", title: "二维码管理", url: "../web/web?url=" + app.globalData.HTTPHost + "/qr/mail&title=二维码管理"},
        { "icon": "../images/merchant@2x.png", title: "商品管理", url: "./goodsmanager/goodsmanager" },
        { "icon": "../images/category@2x.png", title: "类别管理", url: "./categorymanager/categorymanager" },
        { "icon": "../images/table@2x.png", title: "桌面管理", url: "./desktopmanager/desktopmanager" },
        { "icon": "", title: "",url: "" }, // 占位
        { "icon": "", title: "", url: ""  }, // 占位
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
  
  }
})