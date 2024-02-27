<template>
  <div :class="{ 'city-list': true, 'hide': !isOpenCard }">
    <h3 class="mb-4 font-semibold text-center mt-4 text-gray-900 text-wrap dark:text-white">
      Choose Uzbekistan Regions
    </h3>
    <ul class="w-48 text-sm font-medium relative text-gray-900 bg-[var(--tw-dark-bg)] border-0 rounded-lg dark:text-white">
      <button @click="hiddenCard" class="open-hide btn absolute bg-gray-700 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
        <i class="fa fa-chevron-right"></i>
      </button>
      <li
        v-for="region in regions"
        :key="region.id"
        class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
      >
        <div class="flex items-center ps-3">
          <input
            :id="'list-radio-license' + region.id"
            type="radio"
            name="list-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            v-model="cityRegions"
            
            />
          <label
            :for="'list-radio-license' + region.id"
            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            @click="onChanegRegion(region.name_uz)"
          >
            {{ region.name_uz }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';  // Import mapState and mapActions
import { regions } from "../utils";

export default {
  name: "CityList",
  data() {
    return {
      regions,
      cityRegions: '',
    };
  },
  computed: {
    ...mapState({
      isOpenCard: (state) => state.modules.isOpenCard
    }),
  },
  methods: {
    hiddenCard(){
      this.$store.commit('toggleOpenCard', false);
    },
    onChanegRegion(city){
      this.$store.dispatch('getLonLat', city).then(async (res) => {
        await this.$store.dispatch('getData', res);
      })
    }
    // Use mapActions to get 'toggleCard' from the Vuex store
  },
};
</script>

<style lang="scss">
.city-list {
  background-color: var(--tw-dark-bg);
  color: #ccc;
  overflow-y: auto;
  position: fixed;
  right: 0;
  transition: transform 0.5s linear , display 3s linear;
  height: 100vh;
  transform: translateX(0);
  
  &.hide {
    transform: translateX(100%);
  }

  ul {
    transition: transform 0.5s linear;
    .open-hide {
      position: fixed;
      transform: translateY(-50%) translateX(-40%);
      top: 50%;
    }

    width: fit-content;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
