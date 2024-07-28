<template>
  <div class="modal-overlay">
    <div class="modal">
      <span class="close" @click="$emit('close')">&times;</span>
      <h2>{{ $t('login.title') }}</h2>
      <form @submit.prevent="login">
        <input type="text" placeholder="Username" v-model="username" required />
        <input type="password" placeholder="Password" v-model="password" required />
        <button type="submit">{{ $t('login.loginButton') }}</button>
      </form>
      <p>{{ $t('login.noAccount') }} <a href="#" @click="$emit('show-register')">{{ $t('login.registerLink') }}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Simulate a simple login and redirection
      this.$emit('close');
      this.$router.push('/courses');
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 10px;
}

a {
  color: #4CAF50;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
</style>
