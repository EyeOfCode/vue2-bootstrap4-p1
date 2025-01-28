<template>
  <div>
    <h4 class="d-flex justify-content-center">Item List</h4>
    <div>
      <div v-for="product in products" :key="product.no">
        <p v-if="product.name">{{ product.no }}. {{ product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    products: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.every((item) => {
          return (
            typeof item.id === 'number' &&
            typeof item.no === 'number' &&
            'name' in item
          );
        });
      },
      default: () => [],
    },
  },
};
</script>
