<template lang="">
    <div class="input-container w-[45%] flex justify-between">
      <input type="text" class="text-gray-400 " placeholder="Search" v-model="searchText"/>
      <button @click="search" class="bg-[var(--tw-dark-bg)] hover:border-gray-400  text-white font-bold py-2 px-4 border border-transparent rounded">
          <i class="fa fa-search text-gray-400 top-3 right-3"></i>
      </button>
    </div>
</template>
<script lang="js">
export default {
    name: "input-search",
    data() {
       return {
        searchText : '',
       }
    },

    methods: {
        search(){
            this.$store.dispatch('getLonLat', this.searchText).then(async(res) => {
                await this.$store.dispatch('getData',res);
            });
            this.searchText = '';
        }
    } 
};
</script>
<style lang="scss">
input[type="text"] {
    background-color: transparent;
    border: none;
    outline: none;
    caret-color: #fff;
}

.input-container {
    padding: 3px 2px;
    border-bottom: 2px solid var(--tw-dark-bg);
}
</style>
