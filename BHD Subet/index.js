/**
 * Author: Pszz
 */
void function () {
  var ws = new WebSocket('wss://www.aex.plus/ws')
  var cbkMap = new Map()
  ws.onmessage = function (res) {
    let data = JSON.parse(res.data)
    let callback = cbkMap.get(data.cmd)
    typeof callback === 'function' && callback(data)
  }
  ws.onopen = function () {
    init()
  }

  function onSend (cmd, callback) {
    let jsonCmd = JSON.stringify(cmd)
    cbkMap.set(cmd.cmd, callback)
    ws.send(jsonCmd)
  }
  function init () {
    // 获取买卖行情
    var dwList = document.getElementById('J_dw') || {}
    var upList = document.getElementById('J_up') || {}
    var priceInfo = document.getElementById('J_price') || {}
    // 获取价格
    onSend({ 'cmd': 8 }, function (res) {
      let bhd = res.m.cnc.bhd
      let rate = parseFloat(((bhd[4] / bhd[3] - 1) * 100).toFixed(2))
      priceInfo.className = rate > 0 ? 'up' : 'dw'
      priceInfo.innerHTML = `
        ${ bhd[4]}<i>CNC<i>
        <i>${ (rate > 0 ? '+' : '-') + rate}%</i>   
     `
    })
    onSend({ c: 'bhd', m: 'cnc', cmd: 1 }, function (res) {
      let up = (res['b'] || [[0, 0]])
      let dw = (res['s'] || [[0, 0]])
      // 重置数据
      dwList.innerHTML = '<dt>档位 & 卖价 & 卖量</dt>'
      upList.innerHTML = '<dt>档位 & 买价 & 买量</dt>'

      dwList.innerHTML += dw.map((v, i) => {
        return `<dd>卖${(i + 1) + '：' + v[0] + '/CNC    卖' + v[1] }个</dd>`
      }).join('')
      upList.innerHTML += up.map((v, i) => {
        return `<dd>买${(i + 1) + '：' + v[0] + '/CNC    买' + v[1]}个</dd>`
      }).join('')
    })
  }
}()
