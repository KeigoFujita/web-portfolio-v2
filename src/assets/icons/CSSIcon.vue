<script setup>
import { computed } from 'vue';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const primaryColor = computed(() => (props.active ? '#1373b4' : 'white'));
const secondaryColor = computed(() => (props.active ? 'white' : '#171717'));
</script>
<template>
  <svg
    viewBox="0 0 44 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_36_76)">
      <path
        d="M3.82586 45.2621L0.170044 0.583862L43.83 0.673647L39.9644 45.2621L22.1648 50.4161L3.82586 45.2621Z"
        :fill="primaryColor"
      />
      <path
        d="M22.1648 46.1012V4.83896L40.1443 4.89882L36.9381 41.8162L22.1648 46.1012Z"
        :fill="primaryColor"
      />
      <path
        d="M35.6793 10.113H8.02109L8.77035 15.5064H21.8951L8.9802 21.0502L9.72911 26.264H28.7575L28.0681 33.5454L21.6254 34.8041L15.7824 33.306L15.3327 29.1706H9.96889L10.6879 37.7709L22.1947 40.9771L33.2224 37.4713L34.6308 20.6604H22.9736L35.679 15.3867L35.6793 10.113Z"
        :fill="secondaryColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_36_76">
        <rect
          width="43.66"
          height="50"
          :fill="primaryColor"
          transform="translate(0.170044 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
