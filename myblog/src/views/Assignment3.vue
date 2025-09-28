<template>
  <div class="assignment">
    <transition name="fade-slide">
      <section class="header" v-show="showHeader">
        <h1>Love</h1>
        <p>by: Akzhunis, Zhibek, Dilnaz, Alizhan</p>
      </section>
    </transition>

    <div class="video-container">
      <iframe src="https://youtu.be/rbTu8dH2KRM?si=w8BhfXAkuHm568IE" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

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
    setTimeout(() => (this.showSocials = true), 1000);
    setInterval(this.launchHearts, 2000);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap");

#short{
  width: 600px;
}

#short2{
  width: 600px;
}
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
.bkgrd{
  /* background-color: rgba(255, 255, 255, 0.651); */
  border-radius: 15px;
}

.norow{
  padding-top: 40px;
  padding-bottom: 40px;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin: 2rem auto;
  max-width: 800px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(255, 105, 180, 0.2);
}
.img-row {
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* space between the images */
  margin: 2rem auto;
  max-width: 100vw;
  max-height: 600px;
}

.img-wrapper {
  flex: 1;               /* each takes equal width */
  display: flex;         /* center image inside */
  align-items: stretch;  /* make wrappers the same height */
}

.styled-img {
  width: 100%;
  height: 100%;          /* force equal height */
  /* object-fit: cover;     crop to keep proportions */
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(255, 105, 180, 0.2);
  transition: transform 0.3s ease;
}


.styled-img:hover {
  transform: scale(1.05);
}


.video-container iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 15px;
}

/* special text block */
.text-block {
  background: rgba(255, 240, 246, 0.8);
  border: 2px dashed #ffb6c1;
  border-radius: 15px;
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 700px;
  font-size: 1rem;
  color: #333;
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.1);
}

.img-wrapper {
  margin: 2rem auto;
  max-width: 500px;
}

.styled-img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 6px 15px rgba(255, 105, 180, 0.2);
  transition: transform 0.3s ease;
}

.styled-img:hover {
  transform: scale(1.05);
  width: 100%;              
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
</style>
