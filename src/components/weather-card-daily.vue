<template>
    <div class="weather-card-daily 
    flex flex-col text-center text-gray-400 
    mt-2 xl:w-[calc(100%/5)] lg:w-[calc(100%/4)] md:w-[47%] sm:w-[45%]
    p-4 align-middle justify-center">
        <div class="weather-card-daily-header">
            <div class="date">
                <p>{{ weatherDaily?.day }}</p>
            </div>
        </div>
        <div class="img">
            <img :src="`https://openweathermap.org/img/wn/${weatherDaily?.icon}@2x.png`" alt="">
        </div>
        <div class="temp-daily flex justify-between px-1">
            <span>
                <span :class="[styles.grayBold]">{{ weatherDaily?.temp?.day }}</span><sup>°C</sup>
            </span>
            <span>
                <span :class="[styles.grayBold]">{{ weatherDaily?.temp?.night }}</span><sup>°C</sup>
            </span>
        </div>
    </div>
</template>
<script>
import { styles,weatherConverter } from '@/utils';
export default {
    name: 'weather-card-daily',
    props: {
        day:{
            type:Object,
            required:true
        }
    },  
    data() {
        return {
            styles,
            weatherConverter,
            weatherDaily:{
                day:weatherConverter.dateConvert(this.day.dt),
                icon:this.day.weather[0].icon,
                temp:this.day.temp

            }
        }
    }
}
</script>
<style scoped lang="scss">
.weather-card-daily {
    background-color: var(--tw-dark-bg);
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;

    .temp-daily {

    }
}
</style>