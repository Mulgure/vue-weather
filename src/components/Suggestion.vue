<template>
    <div id="container" v-if="$store.state.show">
        <div class="module">      
            <p class="title"><i class="iconfont icon-xinxinicon"></i>洗车指数：</br>{{this.$store.state.weathers.HeWeather5[0].suggestion.cw.brf}}</p>
            <p class="txt">{{$store.state.weathers.HeWeather5[0].suggestion.cw.txt}}</p>
        </div>
        <div class="module">           
            <p class="title"><i class="iconfont icon-yifu"></i>穿衣指数：</br>{{this.$store.state.weathers.HeWeather5[0].suggestion.drsg.brf}}</p>
            <p class="txt">{{$store.state.weathers.HeWeather5[0].suggestion.drsg.txt}}</p>
        </div>
        <div class="module">            
            <p class="title"><i class="iconfont icon-shushidu"></i>舒适度指数：</br>{{this.$store.state.weathers.HeWeather5[0].suggestion.comf.brf}}</p>
            <p class="txt">{{$store.state.weathers.HeWeather5[0].suggestion.comf.txt}}</p>
        </div>
        <div class="module">            
            <p class="title"><i class="iconfont icon-ziwaixian"></i>紫外线指数：<br>{{this.$store.state.weathers.HeWeather5[0].suggestion.uv.brf}}</p>
            <p class="txt">{{$store.state.weathers.HeWeather5[0].suggestion.uv.txt}}</p>
        </div>
        <div class="module">          
            <p class="title"><i class="iconfont icon-badaxilietubiao01"></i>运动指数：<br>{{this.$store.state.weathers.HeWeather5[0].suggestion.sport.brf}}</p>
            <p class="txt">{{$store.state.weathers.HeWeather5[0].suggestion.sport.txt}}</p>
        </div>
        <div class="module">
            <p class="title"><i class="iconfont icon-lvyou"></i>旅游指数：</br>{{this.$store.state.weathers.HeWeather5[0].suggestion.trav.brf}}</p>
            <p class="txt">{{$store.state.weathers.HeWeather5[0].suggestion.trav.txt}}</p>
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>
#container{
    font-size: 0;
    margin: 0 auto; 
}

.module{
    width: 30%;
    height: 200px;
    margin: 20px 10px;
    font-size :18px;
    display: inline-block;
    background: green;
    border-radius: 10px;
    box-shadow: 10px 10px 5px #888888;

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
    text-align: center;
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