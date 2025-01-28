<template>
  <div>
    <div class="d-flex">
      <p class="font-weight-bold">Exercise 8</p>
      <p class="ml-2">Shopping Cart</p>
    </div>
    <div>
      <div class="row">
        <div class="col-md-8 col-12">
          <div class="row">
            <div
              v-for="product in products"
              :key="product.name"
              class="col-md-4 col-6 my-2"
            >
              <ProductList
                :image-url="product.imgUrl"
                btn-name="Add to cart"
                :title="product.name"
                @actionBtn="addToCart(product)"
              >
                <template v-slot:card-body>
                  <h5 class="card-title align-items-center">
                    {{ product.name }}
                    <span
                      v-if="product.status === 'hot'"
                      class="badge badge-danger"
                    >
                      Hot
                    </span>
                    <span
                      v-if="product.status === 'new'"
                      class="badge badge-success"
                    >
                      New
                    </span>
                  </h5>
                  <div class="card-text text-small">
                    {{ product.description }}
                  </div>
                  <div class="pt-3">
                    <h4 class="text-danger">
                      {{ formatPrice(product.price) }}
                    </h4>
                  </div>
                </template>
              </ProductList>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <h4 class="my-4 text-center">ตระกร้าสินค้า</h4>
          <div v-if="carts.length">
            <div
              v-for="(cart, index) in carts"
              :key="'cart-' + index"
              class="my-2"
            >
              <CartItem
                :cart="cart"
                :qty="cart.qty"
                @qty="changeQty(index, $event)"
                @remove="deleteCart(index)"
              />
            </div>
            <div class="text-right my-4">
              <h5>Total: {{ formatPrice(total) }}</h5>
            </div>
            <div v-if="total > 0">
              <button class="btn btn-success btn-block" @click="checkout">
                Checkout
              </button>
            </div>
          </div>
          <div v-else class="my-2 text-center">ตะกร้าสินค้ายังว่างอยู่</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
import ProductList from '@/components/ProductList.vue';
import { formatPriceUS } from '@/utils/formatPrice';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Ex8',
  components: {
    ProductList,
    CartItem,
  },
  data() {
    return {
      products: [],
      carts: [],
      total: 0,
    };
  },
  computed: {
    ...mapGetters('product', ['errorMessage']),
  },
  created() {
    this.fetchProducts();
    this.fetchCarts();
  },
  methods: {
    ...mapActions('product', ['getProducts', 'checkoutCart', 'getCarts']),

    async fetchProducts() {
      try {
        const productData = await this.getProducts();
        if (productData) {
          this.products = productData.products;
        }
      } catch (error) {
        await this.$swal('Error!!', this.errorMessage, 'error');
      }
    },

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

    addToCart(product) {
      this.carts.push({ ...product, qty: '1' });
      this.total += product.price;
    },

    changeQty(itemIndex, qty) {
      this.carts[itemIndex].qty = qty;
      this.total = this.carts.reduce(
        (acc, cur) => acc + cur.price * cur.qty,
        0
      );
    },

    deleteCart(index) {
      this.total -= this.carts[index].price;
      this.carts.splice(index, 1);
    },

    async checkout() {
      try {
        await this.checkoutCart(this.carts);
        this.$router.push({ name: 'Checkout' });
      } catch (error) {
        await this.$swal('Error!!', this.errorMessage, 'error');
      }
    },

    formatPrice(value) {
      return formatPriceUS(value);
    },
  },
};
</script>
