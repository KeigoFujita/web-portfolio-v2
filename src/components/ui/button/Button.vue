<script setup>
import { Primitive } from "radix-vue";
import { buttonVariants } from ".";
import { cn } from "@/lib/utils";

const props = defineProps({
  loading: { type: Boolean, required: false, default: false },
  variant: { type: null, required: false },
  size: { type: null, required: false },
  class: { type: null, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false, default: "button" },
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <div
      v-if="loading"
      class="flex items-center space-x-4"
      :class="[variant === 'default' || (variant === undefined && 'reverse')]"
    >
      <div class="loader w-4 h-4 mr-2"></div>
      <slot />
    </div>

    <div v-if="!loading">
      <slot />
    </div>
  </Primitive>
</template>
