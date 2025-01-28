<template>
  <div>
    <h4 class="d-flex justify-content-center">Item List</h4>
    <div>
      <div v-for="product in products" :key="product.id">
        <p v-if="product.name">{{ product.id }}. {{ product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    products: [
      {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          default: '',
        },
      },
    ],
  },
};
</script>
