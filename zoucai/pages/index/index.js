//index.js

import{
  RequestCurrentOrderList,
  RequestHistoryOrderList
}from '../api/apis.js'

//获取应用实例
const app = getApp()

var initOrder = {
  totalNum: 0,
  totalPrice: 0,
  totalGoodsPrice: 0,
  totalPackingFee: 0,
  goodsNums: {},
  goods: []
}

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
   
    currentOrderList:[],

    tabs: ["当前订单", "历史订单"],
    activeIndex: 0,

    activeMenuIndex: 0,
    showCart: false,

    showSubGoods: false,

    order: initOrder,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  currentOrderChange: function (e) {
    var showtype = e.target.dataset.type;
    this.currentOrderLoadData()
    this.setData({
      status: 0,
    });
  },

  historyOrderChange: function (e) {
    var showtype = e.target.dataset.type;
    this.historyOrderLoadData()
    this.setData({
      status: 1,
    });
  },

  onLoad: function () {
    // that = this;  
    this.currentOrderLoadData()
    this.setData({
      status: 0,
    });
  },

  celltap: function() {
    wx.navigateTo({
      url: '../orderDetail/orderDetail'
    })
  },



  currentOrderLoadData() {
    var that = this;
    RequestCurrentOrderList({
      success(res){
        if (res.statusCode == 200) {
          var list2 = res.data.data;
          console.log(list2)

          that.setData({
            currentOrderList :list2
          });
        }
        else {
          console.log("request fail");
        }
      }
    });
  },

  historyOrderLoadData() {
    var that = this;
    RequestHistoryOrderList({
      success(res) {
        if (res.statusCode == 200) {
          var list2 = res.data.data;
          console.log(list2)

          that.setData({
            currentOrderList: list2
          });
        }
        else {
          console.log("request fail");
        }
      }
    });
  }

})