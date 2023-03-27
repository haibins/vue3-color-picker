<template>
  <Color v-model="color"></Color>

</template>

<script setup lang="ts">
import { ref } from "vue";
import Color from "./main.vue";

const color = ref("#cdcdcd");

</script>

<style>
body {
  padding: 200px;
}
</style>
