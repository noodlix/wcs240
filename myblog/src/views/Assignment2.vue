<template>
  <div class="assignment">
    <transition name="fade-slide">
      <section class="header" v-show="showHeader">
        <h1>Infographic</h1>
            <div class="img-wrapper">
      <img src="/photography.png" alt="Hurts Band" class="styled-img" />
    </div>
      </section>
    </transition>


</div>
</template>

<script>
export default {
  name: "ContactsPage",
  data() {
    return {
      showHeader: false,
      showSocials: false,
      hearts: []
    };
  },
  methods: {

  },
  mounted() {
    setTimeout(() => (this.showHeader = true), 300);
    setTimeout(() => (this.showSocials = true), 1000);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap");

.assignment {
  font-family: "Quicksand", sans-serif;
  min-height: 100vh;
  padding: 2rem;
  line-height: 1.6;
  color: #333;
  text-align: center;
  position: relative;
  width: 100%;
  overflow-x: hidden;
}

h1 {
  font-size: 2.5rem;
  color: #ff6fa9;
  margin-bottom: 1rem;
  font-style: italic;
  animation: fadeIn 1.2s ease;
}

p {
  font-size: 1.1rem;
  color: #444;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styled-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* keeps aspect ratio while fitting */
  display: block;
}
.img-wrapper {
  flex: 1;
  display: flex;
  align-items: stretch;
  margin: 2rem auto;
  max-width: 500px;
}

.styled-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

</style>
