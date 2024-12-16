<script setup lang="ts">
defineProps({
  title: '',
  author: '',
  text: ''
})
</script>

<template>
<div class="item">
  <h2>{{title}}</h2>
  <p>{{text}}</p>
  <span>{{author}}</span>
</div>
</template>

<style scoped>
.item{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #eaeaea;
  padding: 20px;
  height: 130px;
  border-radius: 20px;
  width: 800px;
  box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1);  /* Мягкая тень снизу */
      /* Глубокая тень для объёмности */

  h2{
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
  p{
    font-size: 16px;
    text-align: center;
  }
  span{
    font-style: italic;
    font-size: 12px;
    text-align: end;
  }
}
</style>