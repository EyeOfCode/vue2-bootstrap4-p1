<template>
  <div>
    <div class="d-flex">
      <p class="font-weight-bold">Exercise 4</p>
      <p class="ml-2">Photos (components, ref)</p>
    </div>
    <div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="text" class="form-control" id="age" v-model="age" />
        </div>
        <div class="form-group">
          <label for="imageUrl">Image Url</label>
          <input
            type="text"
            class="form-control"
            id="imageUrl"
            v-model="imageUrl"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="my-4" v-if="submitted">
      <UserPreview :formData="formData" />
    </div>
  </div>
</template>

<script>
import UserPreview from '@/components/UserPreview.vue';
import { ref } from 'vue';

export default {
  name: 'Ex4',
  components: {
    UserPreview,
  },
  setup() {
    const formData = ref({});

    const name = ref('');
    const age = ref('');
    const imageUrl = ref('');
    const submitted = ref(false);

    const handleSubmit = () => {
      submitted.value = true;
      formData.value = {
        name: name.value,
        age: age.value,
        imageUrl: imageUrl.value,
      };
    };

    return {
      formData,
      name,
      age,
      imageUrl,
      submitted,
      handleSubmit,
    };
  },
};
</script>
