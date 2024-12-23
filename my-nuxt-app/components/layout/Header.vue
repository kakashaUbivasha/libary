<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/">LibraryApp</NuxtLink>
    </div>

    <nav class="nav-menu">
      <NuxtLink to="/catalog">Каталог</NuxtLink>
      <NuxtLink to="/about">О нас</NuxtLink>
      <div class="search-bar">
        <transition-group name="search-input" tag="div">
          <div v-if="isSearched" class="input__block" key="search">
            <button @click="closeInput">X</button>
            <input v-model="searchQuery" type="text" placeholder="Поиск книг..." />
          </div>
        </transition-group>
        <button @click="onSearch">🔍</button>
      </div>
      <NuxtLink to="/my-reservations">Мои бронирования</NuxtLink>
      <NuxtLink to="/random/book">Случайная книга</NuxtLink>
    </nav>

    <div class="auth-section">
      <template v-if="isAuthenticated">
        <div class="profile-menu" @click="toggleDropdown">
          <img src="/img/products-2.jpg" alt="Profile" />
          <ul v-if="isDropdownOpen" class="dropdown">
            <li><NuxtLink to="/profile">Мой профиль</NuxtLink></li>
            <li><button @click="logout">Выйти</button></li>
          </ul>
        </div>
      </template>
      <template v-else>
        <div class="">
          <button class="auth-buttons" @click="login"><NuxtLink to="/auth/login">Войти</NuxtLink></button>
          <button class="auth-buttons" @click="register"><NuxtLink to="/auth/register">Зарегистрироваться</NuxtLink></button>
        </div>
      </template>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Header",
  setup() {
    const searchQuery = ref("");
    const isAuthenticated = ref(false); // Переключите на true, чтобы проверить авторизацию
    const isDropdownOpen = ref(false);
    let isSearched = ref(false);
    const closeInput = () =>{
      isSearched.value = false;
    }
    const onSearch = () => {
      isSearched.value = true
      if (searchQuery.value.trim()) {
        navigateTo(`search/${searchQuery.value}`)
      }
    };

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const login = () => {
      console.log("Переход на страницу входа");
    };

    const register = () => {
      console.log("Переход на страницу регистрации");
    };

    const logout = () => {
      isAuthenticated.value = false;
      console.log("Пользователь вышел из системы");
    };
    return {
      searchQuery,
      isAuthenticated,
      isDropdownOpen,
      onSearch,
      toggleDropdown,
      login,
      register,
      logout,
      isSearched,
      closeInput
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #F0F4F8;
  border-bottom: 1px solid #ddd;
  margin-bottom: 100px;
  z-index: 3;
  margin-top: 10px;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #4A68AD ;
}
.nav-menu{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.nav-menu a {
  margin: 0 15px;
  text-decoration: none;
  color: #4A68AD ;
}

.nav-menu a:hover {
  color: #5A78BD ;
}
.search-bar{
  display: flex;
  gap: 10px;
  .input__block{
    display: flex;
    gap: 10px;
    input {
      padding: 5px 10px;
      font-size: 16px;
    }
  }
}

.search-bar button {
  padding: 5px 10px;
  margin-left: 5px;
  background-color: #6A5ACD      ;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 15px;
}

.search-bar button:hover {
  background-color: #7B68EE      ;
}
.search-bar button:active {
  background-color: #5D4AD0  ;
}
.auth-section {
  display: flex;
  align-items: center;
}

.auth-buttons {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #6A5ACD;
  color: white !important;
  border: none;
  cursor: pointer;
}

.auth-buttons:hover {
  background-color: #7B68EE;
}

.profile-menu {
  position: relative;
}

.profile-menu img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.profile-menu .dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
}

.profile-menu .dropdown li {
  padding: 10px 20px;
  color: $link;
}

.profile-menu .dropdown li:hover {
  background-color: #f5f5f5;
}
.search-input-enter-active, .search-input-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.search-input-enter, .search-input-leave-to {
  opacity: 0;
  transform: translateX(-100%); /* Блок скрыт за пределами экрана */
}

.search-input-enter-to, .search-input-leave {
  opacity: 1;
  transform: translateX(0); /* Блок становится видимым */
}
</style>
