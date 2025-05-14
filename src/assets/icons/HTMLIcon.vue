<script setup>
import { computed } from 'vue';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const primaryColor = computed(() => (props.active ? '#e44c23' : 'white'));
const secondaryColor = computed(() => (props.active ? 'white' : '#171717'));
</script>
<template>
  <svg
    viewBox="0 0 44 51"
    :fill="primaryColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_36_54)">
      <path
        d="M3.8258 45.2625L0.169983 0.583527L43.83 0.673311L39.9643 45.2625L22.1648 50.4165L3.8258 45.2625Z"
        :fill="primaryColor"
      />
      <path
        d="M22.1648 46.1015V4.83862L40.1443 4.89848L36.9381 41.8162L22.1648 46.1015Z"
        :fill="primaryColor"
      />
      <path
        d="M35.2001 15.1469L35.7092 9.69296H8.05096L9.57906 26.414H28.6673L27.9187 33.5458L21.8056 35.1936L15.6027 33.3958L15.2732 29.1407H9.78891L10.5382 37.8308L21.8053 40.9771L33.1622 37.8308L34.6903 20.8703H14.6436L14.0743 15.1469H35.2001Z"
        :fill="secondaryColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_36_54">
        <rect
          width="43.66"
          height="50"
          :fill="primaryColor"
          transform="translate(0.169983 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
