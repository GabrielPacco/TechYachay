<template>
    <div class="modal-overlay">
      <div class="modal">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>{{ $t('register.title') }}</h2>
        <form @submit.prevent="register">
          <input type="text" placeholder="Username" v-model="username" required />
          <input type="password" placeholder="Password" v-model="password" required />
          <input type="email" placeholder="Email" v-model="email" required />
          <button type="submit">{{ $t('register.registerButton') }}</button>
        </form>
        <p>{{ $t('register.haveAccount') }} <a href="#" @click="$emit('show-login')">{{ $t('register.loginLink') }}</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        email: '',
      };
    },
    methods: {
      register() {
        // Aquí puedes añadir la lógica de registro
        alert('Registrado exitosamente!');
        this.$emit('close');
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
  