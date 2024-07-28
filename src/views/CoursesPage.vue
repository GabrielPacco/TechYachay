<template>
  <div class="courses-page">
    <div class="categories">
      <h2>{{ $t('courses.categories.title') }}</h2>
      <ul>
        <li @click="setCategory('engineering')">{{ $t('courses.categories.engineering') }}</li>
        <li @click="setCategory('programming')">{{ $t('courses.categories.programming') }}</li>
        <li @click="setCategory('mathematics')">{{ $t('courses.categories.mathematics') }}</li>
        <li @click="setCategory('bioinformatics')">{{ $t('courses.categories.bioinformatics') }}</li>
      </ul>
    </div>
    <div class="course-details">
      <div class="courses-grid">
        <h2>{{ $t(`courses.${selectedCategory}.intro.title`) }}</h2>
        <p>{{ $t(`courses.${selectedCategory}.intro.description`) }}</p>
        <div class="course" v-for="(course, index) in getCourses(selectedCategory, 'intro')" :key="`intro-${index}`">
          <img :src="course.image" :alt="course.title" />
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
          <button>{{ $t('courses.viewDetails') }}</button>
        </div>
      </div>
      <div class="courses-grid">
        <h2>{{ $t(`courses.${selectedCategory}.advanced.title`) }}</h2>
        <p>{{ $t(`courses.${selectedCategory}.advanced.description`) }}</p>
        <div class="course" v-for="(course, index) in getCourses(selectedCategory, 'advanced')" :key="`advanced-${index}`">
          <img :src="course.image" :alt="course.title" />
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
          <button>{{ $t('courses.viewDetails') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'engineering',
      courses: {
        engineering: {
          intro: [
            { image: require('@/assets/circuitos.jpg') },
            { image: require('@/assets/termodinamica.jpg') }
          ],
          advanced: [
            { image: require('@/assets/scrum.jpg') },
            { image: require('@/assets/arquitectura.jpg') }
          ],
        },
        programming: {
          intro: [
            { image: require('@/assets/python.jpg') },
            { image: require('@/assets/javascript.jpg') }
          ],
          advanced: [
            { image: require('@/assets/react.jpg') },
            { image: require('@/assets/machinelearning.jpg') }
          ],
        },
        mathematics: {
          intro: [
            { image: require('@/assets/algebra.jpg') },
            { image: require('@/assets/calculo.jpg') }
          ],
          advanced: [
            { image: require('@/assets/teoria.jpg') },
            { image: require('@/assets/analisis.jpg') }
          ],
        },
        bioinformatics: {
          intro: [
            { image: require('@/assets/genomica.jpg') },
            { image: require('@/assets/proteomica.jpg') }
          ],
          advanced: [
            { image: require('@/assets/estructural.jpg') },
            { image: require('@/assets/sistemas.jpg') }
          ],
        },
      }
    };
  },
  methods: {
    setCategory(category) {
      this.selectedCategory = category;
    },
    getCourses(category, level) {
      const courses = this.courses[category][level];
      return courses.map((course, index) => ({
        ...course,
        title: this.$t(`courses.${category}.${level}.courses[${index}].title`),
        description: this.$t(`courses.${category}.${level}.courses[${index}].description`)
      }));
    }
  }
};
</script>

<style scoped>
.courses-page {
  display: flex;
}

.categories {
  width: 20%;
  background-color: #333;
  color: white;
  padding: 10px;
}

.categories ul {
  list-style-type: none;
  padding: 0;
}

.categories ul li {
  padding: 10px;
  cursor: pointer;
}

.categories ul li:hover {
  background-color: #555;
}

.course-details {
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.course {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.course img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.levels {
  margin-top: 20px;
}

.levels button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.levels button:hover {
  background-color: #0056b3;
}
</style>
