<script setup lang="ts">

import Header from "~/components/layout/Header.vue";
</script>

<template>
<Header/>
  <slot></slot>
  <footer style="margin-top: 100px">Это подвал страницы</footer>
</template>

<style scoped>

</style>