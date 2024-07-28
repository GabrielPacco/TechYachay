<template>
  <div class="homepage">
    <div class="header">
      <img src="@/assets/logo_white.png" alt="Logo" class="logo">
      <div class="title-container">
        <h1>{{ $t('home.title') }}</h1>
      </div>
    </div>
    <div class="about-section">
      <div class="about-content">
        <h2>{{ $t('about.title') }}</h2>
        <p>{{ $t('about.description') }}</p>
      </div>
    </div>
    <div class="plans-section">
      <h2>{{ $t('plans.title') }}</h2>
      <div class="plans-container">
        <div class="plan">
          <h3>Basic</h3>
          <p>S/119/mes</p>
          <ul>
            <li>Contenido profesional y actualizado</li>
            <li>Certificados digitales</li>
            <li>Acceso a eventos exclusivos</li>
          </ul>
          <button>Suscríbete a Basic</button>
        </div>
        <div class="plan">
          <h3>Expert</h3>
          <p>S/67/mes</p>
          <ul>
            <li>Contenido profesional y actualizado</li>
            <li>Certificados digitales</li>
            <li>Acceso a eventos exclusivos</li>
            <li>Acceso a English Academy</li>
          </ul>
          <button>Suscríbete a Expert</button>
        </div>
        <div class="plan">
          <h3>Expert Duo</h3>
          <p>S/92/mes</p>
          <ul>
            <li>Contenido profesional y actualizado</li>
            <li>Certificados digitales</li>
            <li>Acceso a eventos exclusivos</li>
            <li>Acceso a English Academy</li>
            <li>Certificados físicos</li>
          </ul>
          <button>Suscríbete a Expert Duo</button>
        </div>
      </div>
    </div>
    <div class="contact-section">
      <h2>{{ $t('contact.title') }}</h2>
      <p>{{ $t('contact.description') }}</p>
      <p>Email: contacto@elearning.com</p>
    </div>
    <footer>
      <p>&copy; 2024 eLearning Platform. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style scoped>
.homepage {
  text-align: center;
  color: white;
}

.header {
  position: relative;
  height: 100vh;
  background: url('@/assets/portada.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title-container {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.title-container h1 {
  color: white;
  font-size: 2em;
}

.logo {
  width: 600px; /* Ajusta el tamaño aquí */
  height: auto;
  margin-bottom: 20px; /* Ajusta el espacio entre el logo y el título */
}

.about-section {
  position: relative;
  padding: 50px;
  background: url('@/assets/portada2.jpg') no-repeat center center/cover;
  color: white;
  display: flex;
  justify-content: flex-end;
}

.about-content {
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 10px;
  text-align: left;
  margin-right: 50px;
}

.about-content h2 {
  font-size: 2em;
  font-family: 'Georgia', serif;
}

.about-content p {
  font-size: 1.2em;
  font-family: 'Arial', sans-serif;
}

.plans-section {
  padding: 50px;
  background-color: #222;
  color: white;
}

.plans-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.plan {
  background-color: #444;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

.plan h3 {
  color: #4CAF50;
}

.plan p {
  font-size: 1.5em;
  color: #fff;
}

.plan ul {
  list-style-type: none;
  padding: 0;
}

.plan ul li {
  padding: 5px 0;
  color: #bbb;
}

.plan button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}

.plan button:hover {
  background-color: #45a049;
}

.contact-section {
  padding: 50px;
  background-color: #333;
  color: white;
}

footer {
  padding: 20px;
  background-color: #111;
  color: white;
  text-align: center;
}
</style>
