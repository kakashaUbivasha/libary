<script setup>
import { ref, onMounted, computed } from 'vue';
import { useBooks } from '~/composables/useBooks.js';

const books = ref([]);
const { fetchRandomBooks } = useBooks();

// Загружаем книги при монтировании компонента
const loadBooks = async () => {
  books.value = await fetchRandomBooks();
};
onMounted(() => {
  loadBooks();
});
</script>

<template>
  <div v-if="books.length === 0">
    <p>Загрузка...</p>
  </div>
  <div v-else>
    <div class="books">
      <div v-for="book in books" :key="book.title">
        <books-item
            :title="book.title"
            :author="book.author"
            :image-src="book.coverUrl"
        />
      </div>
    </div>
    <div class="button-container">
      <NuxtLink class="btn">Загрузить ещё</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.books {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  align-self: center;
  align-items: center;
  align-content: center;
  justify-self: center;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: center; /* Выравнивание по горизонтали */
  margin-top: 20px; /* Отступ сверху */
}

p {
  text-align: center;
  font-size: 18px;
  color: #555;
}

.btn {
  cursor: pointer;
  background: #6A5ACD;
  text-transform: uppercase;
  font-size: 24px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
}
.btn:hover {
  background: #7B68EE;
}
</style>