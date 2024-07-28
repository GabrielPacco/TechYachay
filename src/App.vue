<template>
  <div id="app">
    <nav>
      <router-link to="/">{{ $t('home.title') }}</router-link>
      <router-link to="/about">{{ $t('about.title') }}</router-link>
      <router-link to="/teacher">{{ $t('teacher.title') }}</router-link>
      <router-link to="/courses">{{ $t('courses.title') }}</router-link>
      <button @click="showLogin = true">{{ $t('access') }}</button>
    </nav>
    <LanguageSwitcher class="language-switcher" @change-language="changeLanguage" />
    <router-view />
    <LoginModal v-if="showLogin" @close="closeModals" @show-register="showRegisterModal" />
    <RegisterModal v-if="showRegister" @close="closeModals" @show-login="showLoginModal" />
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import LoginModal from '@/components/LoginModal.vue';
import RegisterModal from '@/components/RegisterModal.vue';

export default {
  components: { LanguageSwitcher, LoginModal, RegisterModal },
  data() {
    return {
      showLogin: false,
      showRegister: false,
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    closeModals() {
      this.showLogin = false;
      this.showRegister = false;
    },
    showLoginModal() {
      this.closeModals();
      this.showLogin = true;
    },
    showRegisterModal() {
      this.closeModals();
      this.showRegister = true;
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

nav button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5px;
}

nav button:hover {
  background-color: #45a049;
}

.language-switcher {
  position: absolute;
  top: 10px;
  right: 10px;
}

.language-switcher button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5px;
}

.language-switcher button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
