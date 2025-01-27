<template>
  <div class="card">
    <div class="card-body p-0">
      <img
        class="card-img-top"
        :src="imageUrl"
        :alt="footerText || 'image-alt'"
      />
    </div>
    <div class="card-footer text-center text-capitalize" v-if="footerText">
      {{ footerText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardImage',
  props: {
    imageUrl: {
      type: String,
      default: '',
      required: true,
    },
    footerText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.card-footer {
  background: none;
}
</style>
