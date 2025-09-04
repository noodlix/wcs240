<template>
  <div class="contacts">
    <transition name="fade-slide">
      <section class="header" v-show="showHeader">
        <h1>📬 Contact Me</h1>
        <p>Let’s connect and share ideas</p>
      </section>
    </transition>

    <transition name="fade-slide">
      <section class="socials" v-show="showSocials">
        <h1>Find me on</h1>
        <div class="social-links">
          <a href="https://www.instagram.com/noodlix?igsh=MWwyYTYzbWc4c2EzMw==" target="_blank" rel="noopener noreferrer" class="link-placeholder">Instagram</a>
          <a href="https://web.telegram.org/k/#@noodlix" target="_blank" rel="noopener noreferrer" class="link-placeholder">Telegram</a>
          <a href="https://github.com/noodlix" target="_blank" rel="noopener noreferrer" class="link-placeholder">GitHub</a>
        </div>
      </section>
    </transition>

    <div v-for="n in hearts" :key="n.id" class="heart" :style="n.style">💖</div>
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

.contacts {
  font-family: "Quicksand", sans-serif;
  /* background: linear-gradient(180deg, #fff0f6, #ffe4ec); */
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
  color: #ff6fa9;
  animation: fadeIn 1.2s ease;
  text-align: center;
  font-style: italic;
}

p {
  font-size: 1.2rem;
  color: #555;
  animation: fadeIn 3s ease;
}

h2 {
  font-size: 2rem;
  margin: 2rem 0 1rem;
  color: #ff69b4;
}
.header{
    margin-bottom: 4rem;
}
.link-placeholder {
  display: inline-block;
  color: #ff6fa9;
  font-weight: 600;
  padding: 0.5rem 0.9rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  text-decoration: none;    
}

.link-placeholder:visited {
  color: #ff6fa9;      
}

.link-placeholder:hover {
  color: #fff;
  background-color: #ff6fa9;
}


.social-links {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
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
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.heart {
  position: absolute;
  bottom: 0;
  animation-name: floatUp;
  animation-timing-function: ease-in-out;
  color: #ff69b4;
  pointer-events: none;
}

@keyframes floatUp {
  0% { opacity: 0.6; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-100vh) scale(0.8); }
}
</style>
