var token = "TOKEN_c0e726bca23d46f067a147d2a0fa9882";
var Host = "https://api.iqrgo.com/"; 

// 当前订单列表
export function RequestCurrentOrderList(options) {
  var {
    seller_id,
    success, complete
  } = options
  wx.request({
    url: Host+"/order/getUnpaidList",
    header: {
      'content-type': 'application/json'
    },// 设置请求的 header
    method: "POST",
    data: {
      page_num: "1",
      page_size: "10",
      token: token
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
    url: Host +"/order/getPaidList",
    header: {
      'content-type': 'application/json'
    },// 设置请求的 header
    method: "POST",
    data: {
      page_num: "1",
      page_size: "10",
      token: token
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
    url: Host + "/order/getOrderDetail",
    header: {
      'content-type': 'application/json'
    },// 设置请求的 header
    method: "POST",
    data: {
      order_id: "6400793641425707008",
      token: token
    },
    success, complete
  })
}
