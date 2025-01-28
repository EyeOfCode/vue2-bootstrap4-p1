<template>
  <div>
    <div class="text-center">
      <h2>Checkout</h2>
    </div>
    <div>
      <a href="#" @click.prevent="goBack">Back to shopping cart</a>
    </div>
    <div class="row my-4">
      <div class="col-md-8 col-12 offset-md-2">
        <table class="table">
          <tr class="table-info">
            <th>No.</th>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>&nbsp;</th>
          </tr>
          <tr v-for="(cart, index) in carts" :key="'cart-' + index">
            <td>{{ index + 1 }}.</td>
            <td class="text-left">
              <img
                :src="cart.imgUrl"
                :alt="cart.name"
                width="60"
                class="rounded border border-secondary mr-2"
              />
              {{ cart.name }}
            </td>
            <td>{{ formatPrice(cart.price) }}</td>
            <td>{{ cart.qty }}</td>
            <td>{{ formatPrice(cart.price * cart.qty) }}</td>
          </tr>
          <tr>
            <td colspan="4" class="text-right">
              <b>Total</b>
            </td>
            <td>
              <b>{{ formatPrice(total) }}</b>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPriceUS } from '@/utils/formatPrice';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Checkout',
  data() {
    return {
      carts: [],
      total: 0,
    };
  },
  computed: {
    ...mapGetters('product', ['errorMessage']),
  },
  created() {
    this.fetchCarts();
  },
  methods: {
    ...mapActions('product', ['getCarts']),

    async fetchCarts() {
      try {
        const cartData = await this.getCarts();
        if (cartData) {
          this.carts = cartData;
          this.total = cartData.reduce(
            (acc, cur) => acc + cur.price * cur.qty,
            0
          );
        }
      } catch (error) {
        await this.$swal('Error!!', this.errorMessage, 'error');
      }
    },

    formatPrice(value) {
      return formatPriceUS(value);
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
