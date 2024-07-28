<template>
    <div class="course-details-page">
      <h1>{{ course.title }}</h1>
      <p>{{ course.description }}</p>
      <!-- Añade más detalles del curso según sea necesario -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        course: {},
      };
    },
    created() {
      const courseId = this.$route.params.id;
      // Aquí podrías hacer una llamada a una API para obtener los detalles del curso
      this.course = this.getCourseDetails(courseId);
    },
    methods: {
      getCourseDetails(courseId) {
        const courses = [
          { id: 1, title: 'Curso de Programación', description: 'Aprende los fundamentos de la programación.' },
          { id: 2, title: 'Herramientas Tecnológicas', description: 'Domina las herramientas tecnológicas más utilizadas.' },
          { id: 3, title: 'Ingeniería Básica', description: 'Conocimientos básicos en ingeniería.' },
          // Añade más cursos según sea necesario
        ];
        return courses.find(course => course.id === parseInt(courseId));
      }
    }
  }
  </script>
  
  <style scoped>
  .course-details-page {
    padding: 20px;
  }
  </style>
  