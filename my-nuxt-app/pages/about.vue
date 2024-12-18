<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import 'aos'
// Управляем показом контента и загрузкой изображения
const showContent = ref(false);
const showContent2 = ref(false);
const imageLoaded = ref(false);
const isAnimated = ref(false);
const listRef = ref(null);
const items = ref([
  "Что вас ждёт у нас?",
  "Традиционная коллекция: Более 50 000 книг, включая редкие издания, энциклопедии и архивные материалы.",
  "Место для творчества: Уютные залы для чтения, обсуждений и даже проведения лекций.",
  "Современные технологии: Электронные книги, аудиокниги и цифровые ресурсы для учебы и развлечений.",
  "Клубы и мероприятия: Участие в литературных клубах, мастер-классах и встречах с авторами.",
]);
const setupObserver = () => {
  // Создаем новый IntersectionObserver
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Когда элемент видим, активируем анимацию
          if (entry.isIntersecting) {
            isAnimated.value = true;
          } else {
            // Когда элемент выходит из области видимости, сбрасываем анимацию
            isAnimated.value = false;
          }
        });
      },
      {
        threshold: 0.5, // Когда 50% элемента видны
      }
  );

  // Наблюдаем за блоком с ul
  if (listRef.value) {
    observer.observe(listRef.value);
  }
};
// Показ контента через 300 мс
onMounted(() => {
  setupObserver();
  nextTick(() => {
    setTimeout(() => {
      showContent.value = true;
    }, 300);
    setTimeout(() => {
      showContent2.value = true;
    }, 500);
  });
});

// Когда изображение загружается, отмечаем его как загруженное
const onImageLoad = () => {
  imageLoaded.value = true;
};
</script>

<template>
<div class="main">
<h1>О нас</h1>
  <transition name="fade">
    <div class="block1" v-if="showContent">
      <p>
        Добро пожаловать в библиотеку <b>"Эпоха Знаний"</b> — пространство, где каждый может найти что-то вдохновляющее, образовательное и увлекательное.
        Мы стремимся объединить культурное наследие прошлого с современными технологиями, чтобы создать уникальное место для всех, кто ценит литературу.
      </p>
      <img
          class="animated-image"
          :class="{ 'animated-image-loaded': imageLoaded }"
          src="~public/img/img1.jpg"
          alt="Книга"
          @load="onImageLoad"
      >
    </div>
  </transition>
  <div class="block2" v-if="showContent">
    <!-- Первый блок -->
    <transition name="left">
      <div  class="block2__title">
        <h2>Наша библиотека</h2>
        <p>
          Библиотека "Эпоха Знаний" была основана в 1975 году с целью сохранить культурное наследие
          и обеспечить доступ к знаниям для всех. Сегодня это не просто здание с книжными полками —
          это живой центр культуры и обучения.
        </p>
      </div>
    </transition>

    <!-- Второй блок -->

      <ul ref="list">
        <li
            v-for="(item, index) in items"
            :key="index"
            :data-aos="item.aosType" data-aos-duration="1000" data-aos-delay="200"
        >
          {{ item }}
        </li>
      </ul>

    <!-- Третий блок -->
    <transition name="left">
      <ul>
        <li>Интересные факты о библиотеке:</li>
        <li>В нашем архиве хранится первое издание романа, которому уже более 100 лет.</li>
        <li>Читальный зал на третьем этаже был восстановлен из руин после пожара в 1990 году.</li>
        <li>Ежегодно мы проводим более 30 мероприятий, включая детские чтения и выставки книг.</li>
      </ul>
    </transition>
  </div>
</div>
</template>

<style scoped>
h1{
  font-size: 44px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 80px;
}
.block1{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  p{
    font-size: 30px;
    text-align: center;
  }
  img{
    max-width: 100%;
    object-fit: contain;
  }
}
.block2{
  margin-top: 80px;
  .block2__title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    h2{
      font-size: 40px;
    }
    p{
      font-size: 24px;
      text-align: center;
    }
  }
  ul{
    overflow: hidden;
    li{
      font-size: 24px;
    }
  }
}
.fade-enter-active {
  animation: fadeBounce 1s ease-out;
}

@keyframes fadeBounce {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/* Стили для изображения */
.animated-image {
  max-width: 100%;
  height: auto;
  margin-top: 15px;
  opacity: 0; /* Скрыто по умолчанию */
  transition: opacity 0.5s ease-in;
}

/* Изображение становится видимым */
.animated-image-loaded {
  opacity: 1;
}
li {
  opacity: 0;
  transform: translateX(100%);
  animation: slide-in 0.5s ease forwards;
}

.animate-slide-in {
  opacity: 1;
  transform: translateX(0);
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>