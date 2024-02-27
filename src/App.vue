<template>
  <div class="xl:flex-row lg:flex-row md:flex-row sm:flex-col flex relative">
    <section class="sidebar-left h-full md:min-h-[100vh] md:w-1/3 lg:w-100">
      <div class="row">
        <div class="list-notif">
          <div class="notif">
            <span>Search for places</span>
          </div>
          <div class="notif">
            <span><i class="fa fa-map-marker"></i></span>
          </div>
        </div>
      </div>
      <template v-if="data" class="flex h-full align-middle">
        <div class="row mt-5 justify-center flex">
          <img data-type="current" :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" alt="">
        </div>
        <div class="row">
          <div class="current-weather-inform gap-[12px]">
            <p class="current-temp font-sans">
              <span class="temp-nmbr font-bold">{{ temp }}</span><sup>°C</sup>
            </p>
            <p :class="[styles.grayBold, 'current-event text-[1.5rem]']">{{ event }}</p>
            <p :class="[styles.grayBold, 'current-date text-[.8rem]']">{{ date }}</p>
            <p :class="[styles.grayBold, 'current-location']"><i class="fa fa-map-marker text-[1.5rem]"></i> {{ country }}
            </p>
          </div>
        </div>
      </template>
      <template v-else>
        <Loading />
      </template>
    </section>
    <main class="h-full md:min-h-[100vh] md:w-2/3 lg:w-100 max-h-[100vh] overflow-y-scroll">
      <section class="header-main mb-[50px]">
        <div class="flex justify-between">
          <inputSearch />
          <button @click="isOpen"
            class="bg-[var(--tw-dark-bg)] hover:border-gray-400 text-white font-bold py-2 px-4 border border-transparent rounded">
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </section>
      <div :class="['text-gray-400 font-bold', 'title']">
        Kunlik ob - havo ma'lumoti
      </div>
      <template v-if="data">
        <div class="weather-daily-list 
        flex 
        flex-row 
        gap-4 
        xl:justify-start 
        lg:justify-start 
        justify-between
        flex-wrap">
          <WeatherCardDaily v-for="day in data?.daily" :key="day.dt" :day="day" />
        </div>
      </template>
      <template v-else>
        <Loading />
      </template>
    </main>
    <city-list></city-list>
  </div>
</template>

<script>
import { styles } from './utils';
import { WeatherCardDaily, CityList } from './components';
import inputSearch from './ui-components/input-search.vue';
import { mapState } from 'vuex'
import { weatherConverter } from '@/utils'
import Loading from './ui-components/loading.vue';
export default {
  name: 'App',
  components: {
    WeatherCardDaily,
    inputSearch,
    CityList,
    Loading
  },
  data() {
    return {
      styles,
      isOpenCard: false,
      weatherConverter,
    }
  },
  computed: {
    ...mapState({
      data: state => state.modules.data,
      current: state => state.modules.data?.current,
      icon: state => state.modules.data?.current?.weather[0]?.icon,
      temp: state => state.modules.data?.current?.temp,
      country: state => state.modules.LongLat?.country,
      event: state => state.modules.data?.current?.weather[0]?.main,
      date: state => weatherConverter.dateConvert(state.modules.data?.current?.dt).toString(),
    })
  },
  mounted() {
    this.$store.dispatch('getLonLat', 'tashkent').then(async (res) => {
      await this.$store.dispatch('getData', res);
    });
  },
  methods: {
    isOpen() {
      this.$store.commit('toggleOpenCard', true);
      console.log(this.icon);
    }
  }
}
</script>

<style scoped lang="scss">
$color_1: #fff;
$background-color_1: var(--tw-dark-bg);
$background-color_2: var(--bg-notification);

.sidebar-left {
  background: url("https://cdn0.iconfinder.com/data/icons/hand-drawn-weather-collection/100/Yitan-06-512.png") no-repeat;
  background-color: $background-color_1;
  background-size: 100% 100%;
  color: $color_1;
  padding: 10px;

  .list-notif {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .notif {
      padding: 3px 10px;
      font-size: 12px;
      color: $color_1;
      background-color: $background-color_2;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
    }
  }

  img[data-type~="current"] {
    width: 50%;
    height: 100%;
  }

  .current-weather-inform {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .current-temp {
      font-size: 3rem;

      .temp-nmbr {
        font-size: 4rem;
      }

      .current-event {
        color: var(--text-color-two);
      }
    }
  }
}

main {
  padding: 30px 70px;
  padding-right: 30px;

  .title {
    font-size: 1.5rem;
    margin: 20px 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .weather-daily-list {
    width: 100%;
  }

  .header-main {}
}
</style>
