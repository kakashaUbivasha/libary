<script setup>
import {ref} from "vue"
import Quote from "~/components/quotes/Quote.vue";
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))
const swiper = useSwiper(containerRef, {

  loop: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 20,
  slidesPerView: 5,
  direction: 'horizontal',
})
const datas = ref([
  { title: 'Анна Каренина', author: 'Лев Толстой', text: 'Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.' },
  { title: 'Преступление и наказание', author: 'Фёдор Достоевский', text: 'Если Бога нет, то всё позволено.' },
  { title: 'Маленький принц', author: 'Антуан де Сент-Экзюпери', text: 'Ты навсегда в ответе за тех, кого приручил.' },
  { title: '1984', author: 'Джордж Оруэлл', text: 'Свобода — это свобода сказать, что дважды два — четыре.' },
  { title: 'Гарри Поттер и философский камень', author: 'Дж. К. Роулинг', text: 'Не жалей о мёртвых, Гарри, жалей о живых, особенно о тех, кто живёт без любви.' },
  { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', text: 'Рукописи не горят.' },
  { title: 'Алхимик', author: 'Пауло Коэльо', text: 'Когда чего-нибудь сильно захочешь, вся Вселенная будет способствовать тому, чтобы желание твоё сбылось.' },
  { title: 'Гордость и предубеждение', author: 'Джейн Остин', text: 'Глупо бояться того, что может быть.' },
  { title: 'Братья Карамазовы', author: 'Фёдор Достоевский', text: 'Человек, любящий человечество, ненавидит людей.' },
  { title: 'Старик и море', author: 'Эрнест Хемингуэй', text: 'Человек не для того создан, чтобы терпеть поражение.' },
  { title: 'Три товарища', author: 'Эрих Мария Ремарк', text: 'Любовь начинается с улыбки, растет в объятиях и умирает в слезах.' },
  { title: 'Великий Гэтсби', author: 'Фрэнсис Скотт Фицджеральд', text: 'Ибо в своей глубокой душе он верил, что если сильно захотеть чего-то, то это обязательно сбудется.' },
  { title: 'О дивный новый мир', author: 'Олдос Хаксли', text: 'Счастье — это редко удовлетворённое желание.' },
  { title: '451 градус по Фаренгейту', author: 'Рэй Брэдбери', text: 'Мы должны быть чем-то отличны друг от друга, чтобы быть счастливыми.' },
  { title: 'Дюна', author: 'Фрэнк Герберт', text: 'Страх убивает разум.' },
  { title: 'Граф Монте-Кристо', author: 'Александр Дюма', text: 'В мире есть столько всего, что нельзя купить за деньги.' },
  { title: 'Война и мир', author: 'Лев Толстой', text: 'Пока не любишь, не знаешь ни счастья, ни горя.' },
  { title: 'Призрак оперы', author: 'Гастон Леру', text: 'Любовь к музыке — это любовь к душе.' },
  { title: 'Унесённые ветром', author: 'Маргарет Митчелл', text: 'Я подумаю об этом завтра.' },
  { title: 'Портрет Дориана Грея', author: 'Оскар Уайльд', text: 'Единственный способ избавиться от искушения — это поддаться ему.' }
]);

</script>

<template>
  <div class="quotes main">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide
            v-for="(slide, idx) in datas"
            :key="idx"
            style="background-color: #F0F4F8;"
        >
          <quote
          :author="slide.author"
          :text="slide.text"
          :title="slide.title"
          />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>
<style scoped>
.quotes {
  width: 100%;
  margin: auto;
  margin-bottom: 35px;
}


swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

quote {
  width: 100%;
  max-width: 300px;
}
</style>