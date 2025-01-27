<template>
  <div>
    <div class="d-flex">
      <p class="font-weight-bold">Exercise 3</p>
      <p class="ml-2">Photo (components, props)</p>
    </div>
    <div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="formData.name"
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="text"
            class="form-control"
            id="age"
            v-model="formData.age"
          />
        </div>
        <div class="form-group">
          <label for="imageUrl">Image Url</label>
          <input
            type="text"
            class="form-control"
            id="imageUrl"
            v-model="formData.imageUrl"
          />
        </div>
      </form>
    </div>
    <div class="my-4">
      <UserPreview :formData="formData" />
    </div>
  </div>
</template>

<script>
import UserPreview from '@/components/UserPreview.vue';

export default {
  name: 'Ex3',
  components: {
    UserPreview,
  },
  data() {
    return {
      formData: {
        name: '',
        age: '',
        imageUrl: '',
      },
    };
  },
};
</script>
