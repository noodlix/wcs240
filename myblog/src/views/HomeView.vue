<template>
  <div class="main">
    <transition name="fade-slide" appear>
      <div class="content">
        <h1 class="welcome">Welcome</h1>

        <p class="quote">
          <span class="typed">{{ typedQuote }}</span>
          <span class="caret"></span>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      fullQuote: '“The future belongs to those who believe in the beauty of their dreams.”',
      typedQuote: '',
      typeTimer: null,
      sparkles: [],
      sparkleTimer: null,
    }
  },
  mounted() {
    let i = 0
    const speed = 35
    this.typeTimer = setInterval(() => {
      if (i < this.fullQuote.length) {
        this.typedQuote += this.fullQuote[i++]
      } else {
        clearInterval(this.typeTimer)
      }
    }, speed)

    this.sparkleTimer = setInterval(this.launchSparkles, 1500)
  },
  beforeUnmount() {
    clearInterval(this.typeTimer)
    clearInterval(this.sparkleTimer)
  },
  methods: {
    launchSparkles() {
      const id = Date.now() + Math.random()
      const left = Math.random() * 100
      const duration = 4 + Math.random() * 3
      const size = 14 + Math.random() * 12
      this.sparkles.push({
        id,
        style: {
          left: `${left}%`,
          fontSize: `${size}px`,
          animationDuration: `${duration}s`,
        },
      })
      setTimeout(() => {
        this.sparkles = this.sparkles.filter((s) => s.id !== id)
      }, duration * 1000)
    },
  },
}
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  padding: 2rem;
}

.content {
  max-width: 800px;
  padding: 0 1rem;
}

.welcome {
  font-family: 'Dancing Script', cursive;
  font-size: 9rem;
  color: #ff6fa9;
  /* margin-bottom: 1rem; */
  animation: fadeIn 1.2s ease;
  text-align: center;
  font-style: italic;
}

.quote {
  font-size: 1.6rem;
  font-style: italic;
  color: #444;
  line-height: 1.7;
  margin-top: 0.5rem;
  display: inline-block;
  text-align: left;
  position: relative;
  width: 100vw;
}

.typed {
  white-space: pre-wrap;
  word-break: break-word;
}

.caret {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  margin-left: 4px;
  background: #ff69b4;
  vertical-align: -0.15em;
  animation: blink 0.8s step-end infinite;
}

.fade-slide-enter-active {
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

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes floatUp {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  50% {
    opacity: 0.85;
    transform: translateY(-50vh) scale(1.3);
  }
  100% {
    opacity: 0;
    transform: translateY(-100vh) scale(0.8);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 480px) {
  .welcome {
    font-size: 2.3rem;
  }
  .quote {
    font-size: 1.25rem;
  }
}
</style>
