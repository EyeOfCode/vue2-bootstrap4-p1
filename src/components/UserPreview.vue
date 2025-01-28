<template>
  <div
    class="d-flex justify-content-center align-items-center background-content"
  >
    <div class="my-2 text-center">
      <h2>User Component</h2>
      <div class="my-2">
        <p class="m-0">Name: {{ formData.name }}</p>
        <p class="m-0 mb-2">Age: {{ formData.age }}</p>
        <img
          class="w-100 p-4"
          v-if="formData.imageUrl"
          :src="formData.imageUrl"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPreview',
  props: {
    formData: {
      name: {
        type: String,
        default: '',
      },
      age: {
        type: String,
        default: '',
      },
      imageUrl: {
        type: String,
        default: '',
      },
    },
  },
};
</script>

<style scoped>
.background-content {
  background: rgb(238, 238, 238);
}
</style>
