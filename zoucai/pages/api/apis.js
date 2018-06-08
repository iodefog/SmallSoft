
const app = getApp();

// 当前订单列表
export function RequestCurrentOrderList(options) {
  var {
    seller_id,
    success, complete
  } = options
  wx.request({
    url: app.globalData.Host + "/order/getUnpaidList",
    header: {
      'content-type': 'application/json'
    },// 设置请求的 header
    method: "POST",
    data: {
      page_num: "1",
      page_size: "10",
      token: app.globalData.Token
    },
    success, complete
  })
}

// 历史订单列表
export function RequestHistoryOrderList(options) {
  var {
    seller_id,
    success, complete
  } = options
  wx.request({
    url: app.globalData.Host +"/order/getPaidList",
    header: {
      'content-type': 'application/json'
    },// 设置请求的 header
    method: "POST",
    data: {
      page_num: "1",
      page_size: "10",
      token: app.globalData.Token
    },
    success, complete
  })
}

// 获取订单详情
export function RequestOrderDetailList(options) {
  var {
    seller_id,
    success, complete
  } = options
  wx.request({
    url: app.globalData.Host + "/order/getOrderDetail",
    header: {
      'content-type': 'application/json'
    },// 设置请求的 header
    method: "POST",
    data: {
      order_id: "6400793641425707008",
      token: app.globalData.Token
    },
    success, complete
  })
}

export function merchantget(options){
  var {
    success, complete
  } = options
  wx.request({
    url: app.globalData.Host + "/merchant/get",
    header: {
      'content-type': 'application/json'
    },// 设置请求的 header
    method: "POST",
    data:{
      token: app.globalData.Token
    },
    success, complete
  })
}
