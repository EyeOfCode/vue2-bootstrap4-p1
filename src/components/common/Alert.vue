<template>
  <div :class="['alert', `alert-${type}`, 'text-center', 'w-100']">
    <button type="button" class="close" data-dismiss="alert" @click="closeBox">
      &times;
    </button>
    <strong>Error:</strong> {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'danger',
    },
    msg: {
      type: String,
      default: '',
      required: true,
    },
    closeBox: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
