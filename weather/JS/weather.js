// 天气预报

function getWeather(cityCode){
  // 获取北京市天气数据
  myAxios({
    url:'https://hmajax.itheima.net/api/weather',
    method:'GET',
    params:{
      city:cityCode
    }
  }).then(result => {
    // console.log(result)

    const headerSpan = 
    `<span class="dateShort">${result.data.dateShort}</span>
      <span>农历</span>
      <span class="dateLunar">${result.data.dateLunar}</span>`

    const contentSpan = 
    `<h1 class="temDay">${result.data.todayWeather.temDay}°</h1>
    <div class="content1">
      <p class="green"><span class="psPm">${result.data.psPm25 + result.data.psPm25Level}</span></p>
      <div class="content2">
        <img src="${result.data.weatherImg}" class="weatherImg" alt="weatherImg" style="width:20px">
        <span class="weather">${result.data.weather}</span>
        <span class="windDirection">${result.data.windDirection}</span>
        <span class="windPower">${result.data.windPower}</span>
      </div>
    </div>
    <div class="content3">
      <span>今天：</span>
      <span class="todayWeather">${result.data.todayWeather.weather}</span>
      <span class="tem">${result.data.todayWeather.temDay}-${result.data.todayWeather.temNight}°C</span>
      <span>紫外线</span>
      <span class="ultraviolet">${result.data.todayWeather.ultraviolet}</span>
      <span>湿度</span>
      <span class="humidity">${Math.floor(result.data.todayWeather.humidity)}%</span>
      <span>日出 </span>
      <span class="sunriseTime">${result.data.todayWeather.sunriseTime}</span>
      <span>日落</span>
      <span class="sunsetTime">${result.data.todayWeather.sunsetTime}</span>
    </div>`
    document.querySelector('.header1').innerHTML = headerSpan
    document.querySelector('.address').innerText = result.data.area
    document.querySelector('.content').innerHTML = contentSpan

    // 7日
    const dayForecast = result.data.dayForecast
    const dayStr = dayForecast.map(item => {
      return `<div class="box">
        <p>${item.dateFormat}</p>
        <p>${item.date}</p>
        <img src="${item.weatherImg}" alt="太阳">
        <p>${item.weather}</p>
        <p>-4 - 8°C</p>
        <p>
          <span>${item.windDirection}</span>
          <span>${item.windPower}</span>
        </p>
      </div>`
    }).join('')
    document.querySelector('.footer1').innerHTML = dayStr

    // let arr = []
    // for(let i = 0;i < result.data.dayForecast.length; i++){
    //   html  = 
    //   `<div class="box">
    //     <p>${result.data.dayForecast[i].dateFormat}</p>
    //     <p>${result.data.dayForecast[i].date}</p>
    //     <img src="${result.data.dayForecast[i].weatherImg}" alt="太阳">
    //     <p>${result.data.dayForecast[i].weather}</p>
    //     <p>-4 - 8°C</p>
    //     <p>
    //       <span>${result.data.dayForecast[i].windDirection}</span>
    //       <span>${result.data.dayForecast[i].windPower}</span>
    //     </p>
    //   </div>`
    //   arr.push(html)
    //   // console.log(arr)
    //   html = arr.join(' ')
    //   document.querySelector('.footer1').innerHTML = html
    // }
  }).catch(error => {
    console.dir(error)
  })
}

// 默认进入网页 - 就要获取天气数据
// 北京市城市编码：110100
getWeather('110100')