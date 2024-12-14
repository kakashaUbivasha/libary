<script setup>
// import Books from "~/components/books/Books.vue";
// import { ref, onMounted, computed } from 'vue';
// import { useBooks } from '~/composables/useBooks';
//
// const books = ref([]);
// const { fetchRandomBooks } = useBooks();
//
// // Загружаем книги при монтировании компонента
// const loadBooks = async () => {
//   books.value = await fetchRandomBooks();
// };
// onMounted(() => {
//   loadBooks();
// });
</script>

<template>
  <div class="">
    <h1>Цитаты</h1>
    <quotes/>
    <h1>Случайные книги</h1>
    <books/>
    <!-- Загрузочный индикатор -->
<!--    <div v-if="books.length === 0">-->
<!--      <p>Загрузка...</p>-->
<!--    </div>-->

    <!-- Отображение книг -->
<!--    <div v-else class="books">-->
<!--      <div v-for="book in books" :key="book.title" class="book">-->
<!--        <h2>{{ truncateAuthor(book.title) }}</h2>-->
<!--        <h3>{{ truncateAuthor(book.author)}}</h3>-->
<!--        <img v-if="book.coverUrl" :src="book.coverUrl" alt="Book Cover" loading="lazy"/>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
/* Стиль для заголовка */
h1 {
  text-align: center;
}
</style>
