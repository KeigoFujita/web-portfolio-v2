<script setup>
import { computed } from 'vue';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const primaryColor = computed(() => (props.active ? '#2281f9' : 'white'));
const secondaryColor = computed(() => (props.active ? '#0053cd' : '#757575'));
</script>
<template>
  <svg
    viewBox="0 0 48 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_38_343)">
      <path
        d="M47.0319 24.1171L25.7721 2.85728L23.7121 0.797241L7.70821 16.8011L0.390015 24.1171C0.0244754 24.4845 -0.180725 24.9817 -0.180725 25.5C-0.180725 26.0183 0.0244754 26.5155 0.390015 26.8829L15.011 41.5039L23.7121 50.2028L39.7137 34.1989L39.963 33.9519L47.0319 26.8939C47.2151 26.7121 47.3605 26.4958 47.4597 26.2575C47.5589 26.0192 47.61 25.7636 47.61 25.5055C47.61 25.2474 47.5589 24.9918 47.4597 24.7535C47.3605 24.5152 47.2151 24.2989 47.0319 24.1171ZM23.7121 32.805L16.4071 25.5L23.7121 18.195L31.0148 25.5L23.7121 32.805Z"
        :fill="primaryColor"
      />
      <path
        d="M23.7121 18.1951C21.4147 15.8982 20.1196 12.7855 20.1096 9.53686C20.0997 6.28822 21.3758 3.16767 23.6591 0.856812L7.67511 16.8342L16.374 25.5331L23.7121 18.1951Z"
        :fill="secondaryColor"
      />
      <path
        d="M31.0347 25.4802L23.7121 32.805C26.0182 35.1117 27.3137 38.2399 27.3137 41.5017C27.3137 44.7634 26.0182 47.8916 23.7121 50.1984L39.7402 34.1791L31.0347 25.4802Z"
        :fill="secondaryColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_38_343">
        <rect
          width="47.22"
          height="50"
          :fill="primaryColor"
          transform="translate(0.390015 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
