<template>
    <div id="container" v-if="$store.state.show">
        <div class="module">   
            <i class="iconfont icon-kongqi"></i>   
            <p>空气质量：{{$store.state.weathers.HeWeather5[0].aqi.city.qlty}}</p>
        </div>
        <div class="module">  
            <i class="iconfont icon-pm25"></i>         
            <p>PM2.5：{{$store.state.weathers.HeWeather5[0].aqi.city.pm25}}微克/立方米</p>
        </div>
        <div class="module">
            <i class="iconfont icon-pm"></i>            
            <p>PM10：{{$store.state.weathers.HeWeather5[0].aqi.city.pm10}}微克/立方米</p>
        </div>
        <div class="module">
            <i class="iconfont icon-eryanghuadan"></i>            
            <p>NO2：{{$store.state.weathers.HeWeather5[0].aqi.city.no2}}μg/m3</p>
        </div>
        <div class="module">
            <i class="iconfont icon-eryanghualiu"></i>          
            <p>SO2：{{$store.state.weathers.HeWeather5[0].aqi.city.so2}}μg/m3</p>
        </div>
        <div class="module">
            <i class="iconfont icon-yiyanghuatan"></i>
            <p>CO：{{$store.state.weathers.HeWeather5[0].aqi.city.co}}mg/m3</p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
#container{
    font-size: 0;
}

.module{
    width: 30%;
    height: 200px;
    margin: 20px 10px;
    padding-top: 30px;
    font-size :18px;
    display: inline-block;
    background: green;
    border-radius: 10px;
    box-shadow: 10px 10px 5px #888888;
    text-align: center;
}
.iconfont{
    display: block;
    font-size: 40px;
    height: auto;
}
</style>