<template>
  <div class="card shadow-sm mb-4">
    <div class="card-body">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateName() {
      this.$emit('updateName', event.target.value);
    },
  },
};
</script>
