<template>
    <div class="weather-card-daily 
    flex flex-col text-center text-gray-400 
    mt-2 xl:w-[calc(100%/5)] lg:w-[calc(100%/4)] md:w-[47%] sm:w-[45%]
    p-2 align-middle justify-center"
    >
        <div class="weather-card-daily-header">
            <div class="date">
                <p>Sun 17 Jan</p>
            </div>
        </div>
        <div class="img">
            <img src="https://cdn1.iconfinder.com/data/icons/weather-cartoon/512/g10135-512.png" alt="">
        </div>
        <div class="temp-daily flex justify-between ">
            <span>
                <span :class="[styles.grayBold]">4</span><sup>°C</sup>
            </span>
            <span>
                <span :class="[styles.grayBold]">4</span><sup>°C</sup>
            </span>
        </div>
    </div>
</template>
<script>
import { styles } from '@/utils';
export default {
    name: 'weather-card-daily',
    data() {
        return {
            styles
        }
    }
}
</script>
<style scoped lang="scss">
.weather-card-daily {
    background-color: var(--tw-dark-bg);
}
</style>