<template>
  <div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/global/themeStore.ts";

const themeStore = useThemeStore();
themeStore.initializeTheme();
</script>
