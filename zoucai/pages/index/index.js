//index.js

import{
  RequestOrderList
}from '../api/apis.js'

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    list:[
      {
        "order_id": 6355448061518548992,
        "pay_mode": 2,
        "pay_mode_value": "支付后置",
        "order_status": 2,
        "order_status_value": "已完成",
        "pay_status": 2,
        "pay_status_value": "已支付",
        "is_offline_pay": 0,
        "is_invoice": 0,
        "total_amount": "0.00",
        "real_amount": "0.10",
        "invoice_amount": "0.00",
        "create_time": "2018-01-24 11:43:33",
        "district_name": "桃花源厅",
        "district_photo": "",
        "district_price": "0.00",
        "district_min_price": "0.00",
        "district_interval": 200,
        "district_desc": "8人"
        },
      {
        "order_id": 6355448061518548992,
        "pay_mode": 2,
        "pay_mode_value": "支付后置",
        "order_status": 2,
        "order_status_value": "已完成",
        "pay_status": 2,
        "pay_status_value": "已支付",
        "is_offline_pay": 0,
        "is_invoice": 0,
        "total_amount": "0.00",
        "real_amount": "0.10",
        "invoice_amount": "0.00",
        "create_time": "2018-01-24 11:43:33",
        "district_name": "桃花源厅",
        "district_photo": "",
        "district_price": "0.00",
        "district_min_price": "0.00",
        "district_interval": 200,
        "district_desc": "8人"
      },
      {
        "order_id": 6355448061518548992,
        "pay_mode": 2,
        "pay_mode_value": "支付后置",
        "order_status": 2,
        "order_status_value": "已完成",
        "pay_status": 2,
        "pay_status_value": "已支付",
        "is_offline_pay": 0,
        "is_invoice": 0,
        "total_amount": "0.00",
        "real_amount": "0.10",
        "invoice_amount": "0.00",
        "create_time": "2018-01-24 11:43:33",
        "district_name": "桃花源厅",
        "district_photo": "",
        "district_price": "0.00",
        "district_min_price": "0.00",
        "district_interval": 200,
        "district_desc": "8人"
      },
      {
        "order_id": 6355448061518548992,
        "pay_mode": 2,
        "pay_mode_value": "支付后置",
        "order_status": 2,
        "order_status_value": "已完成",
        "pay_status": 2,
        "pay_status_value": "已支付",
        "is_offline_pay": 0,
        "is_invoice": 0,
        "total_amount": "0.00",
        "real_amount": "0.10",
        "invoice_amount": "0.00",
        "create_time": "2018-01-24 11:43:33",
        "district_name": "桃花源厅",
        "district_photo": "",
        "district_price": "0.00",
        "district_min_price": "0.00",
        "district_interval": 200,
        "district_desc": "8人"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // that = this;  
    this.loadData()
  },

  loadData() {
    var that = this;
    RequestOrderList({
      success(res){
        if (res.statusCode == 200) {
          // console.log("xxxxx Hello");
          // console.log(res.data);



          var list2 = res.data.data;
          console.log(list2)

          that.setData({
            list :list2
          });
          // that.setData({
          //   'review.list': list ? list.concat(list2) : list2,
          //   'review.loading': false,
          //   'review.page': page + 1,
          //   'review.hasMore': data.count == 10
          // })

        }
        else {
          console.log("request fail");
        }
      }
    });
  }
})