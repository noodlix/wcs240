<template>
  <div class="about">
    <transition name="fade-slide">
      <section class="header" v-show="showHeader">
        <h1>📚 Assignments</h1>
        <p>This page will include my assignments for the WCS 240 class</p>
      </section>
    </transition>

    <transition name="fade-slide">
      <section class="section" v-show="showAssignments">
        <div class="img-placeholder">Assignment 1</div>
        <div class="img-placeholder">Assignment 2</div>
        <div class="img-placeholder">Assignment 3</div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      showHeader: false,
      showAssignments: false,
      hearts: []
    };
  },
  methods: {
    launchHearts() {
      const id = Date.now();
      const left = Math.random() * 90;
      const duration = 3 + Math.random() * 2;
      const size = 16 + Math.random() * 20;
      this.hearts.push({
        id,
        style: {
          left: `${left}%`,
          animationDuration: `${duration}s`,
          fontSize: `${size}px`
        }
      });
      setTimeout(() => {
        this.hearts = this.hearts.filter(h => h.id !== id);
      }, duration * 1000);
    }
  },
  mounted() {
    setTimeout(() => (this.showHeader = true), 300);
    setTimeout(() => (this.showAssignments = true), 800);
    setInterval(this.launchHearts, 2000);
  }
};
</script>

<style scoped>
.about {
  font-family: "Poppins", sans-serif;
  /* background: linear-gradient(180deg, #fff0f65b, #ffe4ec85); */
  min-height: 100vh;
  padding: 2rem;
  line-height: 1.6;
  color: #333;
  text-align: center;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}
p {
  font-size: 1.2rem;
  color: #555;
  animation: fadeIn 3s ease;
}

h1 {
  font-size: 2.5rem;
  color: #ff6fa9;
  margin-bottom: 1rem;
  color: #ff6fa9;
  animation: fadeIn 1.2s ease;
  text-align: center;
  font-style: italic;
}

h2 {
  font-size: 2rem;
  margin: 2rem 0 1rem;
  color: #ff69b4;
}

.section {
  margin: 3rem 0;
  text-align: center;
}

.img-placeholder {
  margin: 1.5rem auto;
  width: 80%;
  max-width: 400px;
  height: 150px;
  border-radius: 15px;
  border: 2px dashed #ffb6c1;
  background-color: rgba(255, 192, 203, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff69b4;
  font-weight: bold;
  transition: transform 0.1s ease, box-shadow 0.3s ease;
}

.img-placeholder:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(255, 105, 180, 0.3);
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 1s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

</style>
