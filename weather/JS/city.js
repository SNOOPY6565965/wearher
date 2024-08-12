// 天气预报

// 搜索城市
document.querySelector('.int').addEventListener('input', e => {
  // console.log(e.target.value)
  document.querySelector('.local').style.display = "inline"
  myAxios({
    url:'https://hmajax.itheima.net/api/weather/city',
    method:'GET',
    params:{
      city:e.target.value
    }
  }).then(result => {
    console.log(result)
    // 映射
    const liStr = result.data.map(item => {
      return `<li class="city-item" data-code="${item.code}">${item.name}</li>`
    }).join('')
    console.log(liStr)
    document.querySelector('.local').innerHTML = liStr
    
  })
})

// 切换城市天气
document.querySelector('.local').addEventListener('click', e => {
  if(e.target.classList.contains('city-item')){
    // 只有点击城市li才会执行以下
    console.log(e)
    const cityCode = e.target.dataset.code
    document.querySelector('.local').style.display = "none"
    document.querySelector('.address').innerHTML = e.target.innerText
    console.log(cityCode)
    // 调取获取并展示天气函数
    getWeather(cityCode)
  }
})