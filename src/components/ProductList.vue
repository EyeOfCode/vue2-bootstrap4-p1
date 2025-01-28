<template>
  <div class="card">
    <div class="card-header p-0" v-if="imageUrl">
      <img class="card-img-top" :src="imageUrl" :alt="title || 'image-alt'" />
    </div>
    <div class="card-body">
      <slot name="card-body" />
    </div>
    <div class="card-footer" v-if="showButton">
      <button class="btn btn-primary w-100" @click="handleClick">
        {{ btnName }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    title: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    btnName: {
      type: String,
      default: '',
    },
  },
  computed: {
    showButton() {
      return this.btnName && this.$listeners.actionBtn;
    },
  },
  methods: {
    handleClick() {
      if (this.$listeners.actionBtn) {
        this.$emit('actionBtn');
      }
    },
  },
};
</script>

<style scoped>
.card-header {
  background: none;
  border: none;
}
.card-footer {
  background: none;
  border: none;
}
</style>
