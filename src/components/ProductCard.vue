<template>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <p>No: {{ no }}</p>
      <p>Item ID: {{ id }}</p>
      <div class="form-group">
        <label for="itemName">Item Name</label>
        <input
          type="text"
          class="form-control"
          id="itemName"
          placeholder="Enter name"
          @input="updateName($event)"
          :value="name"
        />
      </div>
      <div class="d-flex justify-content-end" v-if="deleteItem">
        <button class="btn btn-danger" @click="deleteItem(id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    no: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    deleteItem: {
      type: Function,
      default: null,
    },
  },
  methods: {
    updateName() {
      this.$emit('updateName', event.target.value);
    },
  },
};
</script>
