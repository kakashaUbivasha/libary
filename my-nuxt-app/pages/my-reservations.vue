<template>
  <div class="main">
    <h1 class="text-4xl text-center mb-10">Мои бронирования</h1>
    <custom-table
        :rows="items"
        :headers="headers"
        @delete-book="deleteBooks"
    />
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   middleware: 'auth',
// });
import {onMounted, ref} from 'vue'
import CustomTable from "~/components/all/CustomTable.vue";
let items = ref([])
const headers = ref(['Name', 'Age', 'Country']);
const apiEmitation = () =>{
  setTimeout(()=>{
    items.value = rows.value
  },3000)
}
let rows = ref([
  { Name: 'John', Age: 30, Country: 'USA',id:'1' },
  { Name: 'Anna', Age: 25, Country: 'Canada',id:'2' },
  { Name: 'Tom', Age: 35, Country: 'UK',id:'3' },
]);
const deleteBooks = (item: any) => {
  console.log("Удаление строки с ID:", item);
  console.log("До удаления:", rows.value);
  rows.value = rows.value.filter((booking) => booking.id !== item);
  console.log("После удаления:", rows.value);
  apiEmitation()
};
onMounted(()=>{
  apiEmitation()
})
</script>

<style lang="scss" scoped>

</style>