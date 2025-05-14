<script setup>
import { computed } from 'vue';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const primaryColor = computed(() => (props.active ? '#2d3441' : 'white'));
const secondaryColor = computed(() => (props.active ? '#77c1d2' : 'white'));
</script>
<template>
  <svg
    viewBox="0 0 50 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M38.8888 13.9973L50 25.0944L38.8888 36.1912L27.7779 25.0944L38.8888 13.9973Z"
      :fill="secondaryColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.1112 13.9973L34.1458 37.0027H11.9237L0 25.0941L11.1112 13.9973Z"
      :fill="primaryColor"
    />
  </svg>
</template>
