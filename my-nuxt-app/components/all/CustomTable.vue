<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
            v-model="search"
            label="Поиск"
            prepend-icon="mdi-magnify"
            clearable
        />
      </v-col>
    </v-row>

    <v-data-table
        :headers="headers"
        :items="paginatedItems"
        class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn @click="cancelBooking(item)" color="red" small>
          Отменить
        </v-btn>
      </template>

      <template v-slot:bottom>
        <v-row justify="space-between" align="center">
          <v-col>
            <v-select
                v-model="itemsPerPage"
                :items="itemsPerPageOptions"
                label="Элементов на странице"
                dense
                outlined
                style="max-width: 150px;"
            />
          </v-col>
          <v-col>
            <v-pagination
                v-model="currentPage"
                :length="pageCount"
                color="primary"
            />
          </v-col>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from "vue";

// Получаем пропсы
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  headers: {
    type: Array,
    required: true,
    default: () => [],
  },
});

// Локальные переменные
const search = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(5);
const itemsPerPageOptions = [5, 10, 15, 20];

// Количество страниц для пагинации
const pageCount = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value));

// Фильтрация по поисковому запросу
const filteredItems = computed(() => {
  return props.items.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(search.value.toLowerCase())
  );
});

// Разбиение на страницы
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredItems.value.slice(start, end);
});

// Метод отмены бронирования
const cancelBooking = (item: any) => {
  emit("cancel", item); // Генерируем событие для родительского компонента
};
</script>

<style scoped>
.v-data-table {
  margin-top: 20px;
}

.v-btn {
  white-space: nowrap;
}
</style>
