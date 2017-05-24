<template>
    <div id="container" v-if="$store.state.show">
        <div class="module">   
            <i class="iconfont icon-kongqi"></i>   
            <p>天气：{{$store.state.weathers.HeWeather5[0].daily_forecast[0].cond.txt_d}}</p>
        </div>
        <div class="module">  
            <i class="iconfont icon-pm25"></i>         
            <p>气温：{{$store.state.weathers.HeWeather5[0].daily_forecast[0].tmp.min}}℃ ~{{this.$store.state.weathers.HeWeather5[0].daily_forecast[0].tmp.max+"℃ "}}</p>
        </div>
        <div class="module">
            <i class="iconfont icon-pm"></i>            
            <p>相对湿度：{{$store.state.weathers.HeWeather5[0].daily_forecast[0].hum}}%</p>
        </div>
        <div class="module">
            <i class="iconfont icon-eryanghuadan"></i>            
            <p>降水概率：{{$store.state.weathers.HeWeather5[0].daily_forecast[0].pop}}%</p>
        </div>
        <div class="module">
            <i class="iconfont icon-eryanghualiu"></i>          
            <p>降水量：{{$store.state.weathers.HeWeather5[0].daily_forecast[0].pcpn}}mm</p>
        </div>
        <div class="module">
            <i class="iconfont icon-yiyanghuatan"></i>
            <p>风力：{{$store.state.weathers.HeWeather5[0].daily_forecast[0].wind.sc}}</p>
        </div>
        <div class="module">
            <i class="iconfont icon-yiyanghuatan"></i>
            <p>风速：{{$store.state.weathers.HeWeather5[0].daily_forecast[0].wind.spd}}m/s</p>
        </div>
        <div class="module">
            <i class="iconfont icon-yiyanghuatan"></i>
            <p>风向：{{$store.state.weathers.HeWeather5[0].daily_forecast[0].wind.dir}}</p>
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

.title{
    float: left;
    width: 40%;
    height:100%;
    margin-top: 30px;
}    
.txt{
    font-size: 18px;
    width: 55%;
    height: 100%;
    float: left;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    }
</style>