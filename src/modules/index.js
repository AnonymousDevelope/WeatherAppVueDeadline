// Import WeatherService if it's needed

import WeatherService from "@/service/weather";

const state = {
    data: null,
    loading: false,
    error: null,
    isOpenCard: false,
    LongLat:{
        lon: null,
        lat: null,
    }
  };
  
  const mutations = {
    getDataStart(state) {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    getDataSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
      state.error = null;
    },
    getDataError(state, payload) {
      state.loading = false;
      state.data = null;
      state.error = payload;
    },
    getLonLatStart(state, payload){
        state.loading = true;
        state.LongLat = null;
        state.error = null;
    },
    getLonLatSuccess(state, payload){
        state.loading = false; 
        state.LongLat = payload;
        state.error = null;
    },
    getLonLatError(state, payload){
        state.loading = false;
        state.LongLat = null;
        state.error = payload;
    },
    toggleOpenCard(state, isOpen) {
      state.isOpenCard = isOpen;
    },
  };
  
  const actions = {
    getData({ commit }, LongLat) {
      return new Promise((resolve, reject) => {
          commit('getDataStart');
          WeatherService.getData(LongLat?.lon, LongLat?.lat).then(res => {
              commit('getDataSuccess', res.data);
              resolve(res.data);
          }).catch(err => {
              commit('getDataError', err)
              reject(err);
          })
      })
  },
    getLonLat({ commit }, city) {
        return new Promise((resolve, reject) => {
            commit('getLonLatStart');
            WeatherService.getCityLonLat(city).then(res => {
                commit('getLonLatSuccess', res);
                console.log(res);
                resolve(res);
            })
            .catch(err => {
                commit('getLonLatError', err)
                reject(err);
            })
        })
    },
    toggleCard({ commit }, isOpen) {
      commit('toggleOpenCard', isOpen);
    },
  };
  
  export default {
    state,
    mutations,
    actions,
  };
  