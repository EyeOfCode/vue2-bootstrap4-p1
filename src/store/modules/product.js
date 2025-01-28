import Vue from 'vue';

export default {
  namespaced: true,

  state: {
    products: [],
    carts: [],
    error: null,
  },

  mutations: {
    setProducts(state, productData) {
      state.products = productData;
    },
    setCarts(state, cartData) {
      state.carts = cartData;
    },
    setError(state, error) {
      state.error = error;
    },
  },

  actions: {
    async getProducts({ commit }) {
      try {
        commit('setError', null);

        const response = await Vue.prototype.$baseApi.get('/data.json');
        commit('setProducts', response.data);

        return response.data;
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    },

    async getCarts({ commit }) {
      try {
        commit('setError', null);

        const response = await Vue.prototype.$baseApi.get('/checkout.json');
        commit('setCarts', response.data);

        return response.data;
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    },

    async checkoutCart({ commit }, carts) {
      try {
        commit('setError', null);

        const response = await Vue.prototype.$baseApi.put(
          '/checkout.json',
          carts
        );
        commit('setCarts', response.data);

        return response.data;
      } catch (error) {
        commit('setError', error.message);
        throw error;
      }
    },
  },

  getters: {
    productData: (state) => state.products,
    errorMessage: (state) => state.error,
  },
};
