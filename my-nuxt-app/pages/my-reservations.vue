<template>
  <div class="main">
    <h1>Мои бронирования</h1>
    <div v-if="!items.length" class="">
      <span>Упс, похоже список пуст! Давайте найдём вам книги!</span>
    </div>
    <custom-table
        :items="bookings"
        :headers="headers"
        @cancel="handleCancel"
    />
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   middleware: 'auth',
// });
import CustomTable from "~/components/all/CustomTable.vue";
const items = ref([1])
const bookings = ref([
  { id: 1, title: "Книга 1", author: "Автор 1", reservedDate: "2024-12-01", returnDate: "2024-12-15" },
  { id: 2, title: "Книга 2", author: "Автор 2", reservedDate: "2024-12-05", returnDate: "2024-12-20" },
  { id: 3, title: "Книга 2", author: "Автор 2", reservedDate: "2024-12-05", returnDate: "2024-12-20" },
  { id: 4, title: "Книга 2", author: "Автор 2", reservedDate: "2024-12-05", returnDate: "2024-12-20" },
  { id: 5, title: "Книга 2", author: "Автор 2", reservedDate: "2024-12-05", returnDate: "2024-12-20" },
  { id: 6, title: "Книга 2", author: "Автор 2", reservedDate: "2024-12-05", returnDate: "2024-12-20" },
  { id: 7, title: "Книга 2", author: "Автор 2", reservedDate: "2024-12-05", returnDate: "2024-12-20" },
  { id: 8, title: "Книга 2", author: "Автор 2", reservedDate: "2024-12-05", returnDate: "2024-12-20" },
  { id: 9, title: "Книга 2", author: "Автор 2", reservedDate: "2024-12-05", returnDate: "2024-12-20" },
]);

const headers = [
  { text: "Название книги", align: "start", value: "title" },
  { text: "Автор", value: "author" },
  { text: "Дата бронирования", value: "reservedDate" },
  { text: "Дата возврата", value: "returnDate" },
  { text: "Действия", value: "actions", sortable: false },
];
const handleCancel = (item: any) => {
  const index = bookings.value.findIndex((booking) => booking.id === item.id);
  if (index !== -1) {
    bookings.value.splice(index, 1);
    alert(`Бронирование книги "${item.title}" отменено!`);
  }
};
</script>

<style lang="scss" scoped>

</style>