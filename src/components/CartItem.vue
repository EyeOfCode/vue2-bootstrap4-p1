<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-4">
          <img class="w-100" :src="cart.imgUrl" :alt="cart.name" />
        </div>
        <div class="col-8">
          <div>{{ cart.name }}</div>
          <div class="text-danger">{{ formatPrice(cart.price) }}</div>
          <div class="mt-3">
            <input
              type="number"
              class="form-control"
              :value="qty"
              min="1"
              step="1"
              @input="$emit('qty', $event.target.value)"
            />
          </div>
          <div class="mt-2">
            <button class="btn btn-danger" @click="$emit('remove')">ลบ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatPriceUS } from '@/utils/formatPrice';

export default {
  name: 'CartItem',
  props: {
    cart: {
      type: Object,
      required: true,
    },
    qty: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    formatPrice(value) {
      return formatPriceUS(value);
    },
  },
};
</script>
