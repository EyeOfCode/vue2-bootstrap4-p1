<template>
  <div>
    <div class="d-flex">
      <p class="font-weight-bold">Exercise 6</p>
      <p class="ml-2">Products (components & array data & deleted item)</p>
    </div>
    <div class="row mt-4">
      <div class="col-md-8 col-12">
        <div class="row mt-4">
          <div
            class="col-md-3 col-6"
            v-for="product in products"
            :key="product.id"
          >
            <ProductCard
              :id="product.id"
              :name="product.name"
              :no="product.no"
              @updateName="updateProductName(product.id, $event)"
              :deleteItem="deleteItem"
            />
          </div>
        </div>
        <div class="p-4 d-flex justify-content-center align-items-center">
          <button class="btn btn-primary" @click="addItem">Add Item</button>
        </div>
      </div>
      <div class="col-md-4 col-12">
        <ItemList :products="products" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Ex6',
  components: {
    ProductCard,
    ItemList,
  },
  data() {
    return {
      products: [
        { no: 1, id: 1, name: '' },
        { no: 2, id: 2, name: '' },
        { no: 3, id: 3, name: '' },
      ],
    };
  },
  methods: {
    addItem() {
      this.products.push({
        no: this.products.length + 1,
        id: this.products.length + 1,
        name: '',
      });
    },
    updateProductName(productId, newName) {
      const product = this.products.find((product) => product.id === productId);
      if (product) {
        product.name = newName;
      }
    },
    deleteItem(productId) {
      const newData = this.products.filter(
        (product) => product.id !== productId
      );
      this.products = newData.map((product, index) => ({
        ...product,
        no: index + 1,
      }));
    },
  },
};
</script>
