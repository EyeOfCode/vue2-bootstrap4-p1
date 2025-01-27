<template>
  <div>
    <h1>Exercise 1</h1>
    <div class="row mt-4">
      <div class="col d-flex justify-content-center">
        <button
          class="btn btn-outline-primary text-capitalize"
          @click="changeState('dogs')"
        >
          dogs
        </button>
      </div>
      <div class="col d-flex justify-content-center">
        <button
          class="btn btn-outline-success text-capitalize"
          @click="changeState('cats')"
        >
          cats
        </button>
      </div>
      <div class="col d-flex justify-content-center">
        <button
          class="btn btn-outline-secondary text-capitalize"
          @click="changeState('birds')"
        >
          birds
        </button>
      </div>
      <div class="col d-flex justify-content-center">
        <button
          class="btn btn-outline-danger text-capitalize"
          @click="changeState('rabbits')"
        >
          rabbits
        </button>
      </div>
    </div>
    <div class="mt-4" v-if="state">
      <div
        v-if="state === 'dogs'"
        class="w-100 d-flex justify-content-center align-items-center"
      >
        <card-image
          image-url="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          :footer-text="state"
        />
      </div>
      <div
        v-else-if="state === 'cats'"
        class="w-100 d-flex justify-content-center align-items-center"
      >
        <card-image
          image-url="https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          :footer-text="state"
        />
      </div>
      <div
        v-else-if="state === 'birds'"
        class="w-100 d-flex justify-content-center align-items-center"
      >
        <card-image
          image-url="https://images.unsplash.com/photo-1480044965905-02098d419e96?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          :footer-text="state"
        />
      </div>
      <div
        v-else
        class="w-100 d-flex justify-content-center align-items-center"
      >
        <card-image
          image-url="https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmFiYml0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          :footer-text="state"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardImage from '@/components/CardImage.vue';

export default {
  components: {
    'card-image': CardImage,
  },
  data() {
    return {
      state: '',
    };
  },
  methods: {
    changeState(newState) {
      this.state = newState;
    },
  },
};
</script>
