<script setup>
import { computed } from 'vue';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const primaryColor = computed(() => (props.active ? '#04bcdc' : 'white'));
</script>
<template>
  <svg
    viewBox="0 0 50 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_56_321)">
      <path
        d="M25 10.5C18.3334 10.5 14.1666 13.8334 12.5 20.5C15 17.1666 17.9166 15.9166 21.25 16.75C23.1518 17.2254 24.5111 18.6053 26.0158 20.1324C28.467 22.6205 31.3037 25.5 37.5 25.5C44.1666 25.5 48.3334 22.1666 50 15.5C47.5 18.8334 44.5834 20.0834 41.25 19.25C39.3482 18.7746 37.9889 17.3947 36.4842 15.8676C34.033 13.3795 31.1963 10.5 25 10.5ZM12.5 25.5C5.8334 25.5 1.6666 28.8334 0 35.5C2.5 32.1666 5.4166 30.9166 8.75 31.75C10.6518 32.2254 12.0111 33.6053 13.5158 35.1324C15.967 37.6205 18.8037 40.5 25 40.5C31.6666 40.5 35.8334 37.1666 37.5 30.5C35 33.8334 32.0834 35.0834 28.75 34.25C26.8482 33.7746 25.4889 32.3947 23.9842 30.8676C21.533 28.3795 18.6963 25.5 12.5 25.5Z"
        :fill="primaryColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_56_321">
        <rect
          width="50"
          height="30.08"
          :fill="primaryColor"
          transform="translate(0 10.46)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
