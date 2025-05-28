<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Skill',
  },
  icon: {
    type: Object,
    required: true,
  },
  gradient: {
    type: String,
    default:
      'linear-gradient(45deg, #7cb7ee, #41729f, #063663, #0b5da9, #7cb7ee, #41729f, #063663, #0b5da9)',
  },
  baseHex: {
    type: String,
    default: '#e44c23',
  },
});

const isHovered = ref(false);

const onMouseEnter = () => {
  isHovered.value = true;
};

const onMouseLeave = () => {
  isHovered.value = false;
};

function generateGradient(baseHex) {
  // Convert HEX to HSL
  const hexToHSL = (H) => {
    let r = 0,
      g = 0,
      b = 0;
    if (H.length === 4) {
      r = parseInt(H[1] + H[1], 16);
      g = parseInt(H[2] + H[2], 16);
      b = parseInt(H[3] + H[3], 16);
    } else {
      r = parseInt(H[1] + H[2], 16);
      g = parseInt(H[3] + H[4], 16);
      b = parseInt(H[5] + H[6], 16);
    }

    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max == min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
  };

  // Convert HSL to HEX
  const hslToHex = (h, s, l) => {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) [r, g, b] = [c, x, 0];
    else if (60 <= h && h < 120) [r, g, b] = [x, c, 0];
    else if (120 <= h && h < 180) [r, g, b] = [0, c, x];
    else if (180 <= h && h < 240) [r, g, b] = [0, x, c];
    else if (240 <= h && h < 300) [r, g, b] = [x, 0, c];
    else if (300 <= h && h < 360) [r, g, b] = [c, 0, x];

    r = Math.round((r + m) * 255)
      .toString(16)
      .padStart(2, '0');
    g = Math.round((g + m) * 255)
      .toString(16)
      .padStart(2, '0');
    b = Math.round((b + m) * 255)
      .toString(16)
      .padStart(2, '0');

    return `#${r}${g}${b}`;
  };

  const baseHSL = hexToHSL(baseHex);

  const variants = [
    hslToHex(baseHSL.h, baseHSL.s, Math.min(baseHSL.l + 20, 100)), // lighter
    hslToHex((baseHSL.h + 20) % 360, baseHSL.s, baseHSL.l), // slight hue shift
    hslToHex(baseHSL.h, baseHSL.s, Math.max(baseHSL.l - 20, 0)), // darker
    hslToHex((baseHSL.h - 20 + 360) % 360, baseHSL.s, baseHSL.l), // other hue shift
  ];

  return `linear-gradient(45deg, ${[...variants, ...variants].join(', ')})`;
}
</script>
<template>
  <div
    class="relative skill-card bg-transparent transition hover:scale-90 group"
    :style="{
      '--bg-gradient': generateGradient(props.baseHex),
      '--text-color': props.baseHex,
    }"
  >
    <div
      class="group w-full aspect-square bg-[#171717] bg-opacity-[79%] group-hover:bg-opacity-[100%] group-hover:border-none transition rounded border-2 flex flex-col items-center justify-center"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <component
        :is="props.icon"
        :active="isHovered"
        class="h-6 md:h-10 mb-2 group-hover:text-[var(--text-color)] group-hover:drop-shadow-[0_0_25px_var(--text-color)] group-hover:transition group-hover:duration-100"
      />
      <span
        class="sm:font-semibold text-neutral-300 text-xs sm:text-sm select-none group-hover:text-[var(--text-color)]"
      >
        {{ props.title }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.skill-card:hover:before,
.skill-card:hover:after {
  content: '';
  position: absolute;
  left: -3px;
  top: -3px;

  border-radius: calc(var(--radius) /* 0.25rem = 4px */ - 2px);
  background: var(--bg-gradient);
  background-size: 400%;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  z-index: -1;
  animation: steam 10s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 250% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.skill-card:after {
  filter: blur(40px);
}
</style>
