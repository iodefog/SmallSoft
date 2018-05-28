

export function RequestOrderList(options) {
  var {
    seller_id,
    success, complete
  } = options
  console.log("request url");
  wx.request({
    url: "https://api.iqrgo.com/order/getPaidList",
    header: {
      'content-type': 'application/json'
    },// 设置请求的 header
    method: "POST",
    //data: { cityname: "上海", key: "1430ec127e097e1113259c5e1be1ba70" },  
    data: {
      page_num: "1",
      page_size: "10",
      token: "TOKEN_c0e726bca23d46f067a147d2a0fa9882"
    },
    success, complete

    // success: function (res) {
      // if (res.statusCode == 200) {
    //     // console.log(res.data);
    //   } else {
    //     console.log("index.js wx.request CheckCallUser statusCode" + res.statusCode);
    //   }
    // },
    // fail: function () {
    //   console.log("index.js wx.request CheckCallUser fail");
    // },
    // complete: function () {
    //   // complete
    // }
  })
}
