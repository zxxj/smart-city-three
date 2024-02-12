<script setup>
import { onMounted, ref } from 'vue';
import { renderer } from './utils/resize';

const containerRef = ref();

onMounted(() => {
  containerRef.value.appendChild(renderer.domElement);
});
</script>

<template>
  <div ref="containerRef"></div>
</template>

<style scoped></style>
