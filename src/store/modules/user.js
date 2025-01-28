import Vue from 'vue';

export default {
  namespaced: true,

  state: {
    user: null,
    error: null,
  },

  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
    setError(state, error) {
      state.error = error;
    },
  },

  actions: {
    async getUser({ commit }) {
      try {
        commit('setError', null);

        const response = await Vue.prototype.$baseApi.get('/userFormData.json');
        commit('setUser', response.data);

        return response.data;
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    },

    async updateUser({ commit }, userData) {
      try {
        commit('setError', null);

        const response = await Vue.prototype.$baseApi.put(
          '/userFormData.json',
          userData
        );
        commit('setUser', response.data);

        return response.data;
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    },
  },

  getters: {
    userData: (state) => state.user,
    errorMessage: (state) => state.error,
  },
};
