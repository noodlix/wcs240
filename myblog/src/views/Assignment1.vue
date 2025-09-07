
<template> 
  <div class="contacts">
    <transition name="fade-slide">
      <section class="header" v-show="showHeader">
        <h1>Hurts – Beautiful Ones</h1>
        <p>Blogpost on a music video</p>
      </section>
    </transition>

    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/LmVAaID4H7w" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

    <div class="text-block fade-slide">
      <p>
        Hurts, duo – a British pop rock group with members Adam Anderson and Theo Hutchcraft, 
        gained massive success in Eastern Europe and the post-Soviet space, consistently charting in the early 2010s. 
        The band has shown support for the LGBTQ community through publicly speaking out about homophobia 
        and transphobia on Twitter, giving concerts that support the “АНТИСПИД” charity against AIDS, 
        and featuring a Ukrainian Drag Queen ZhuZhu in their music video “Wings”.
      </p>
    </div>

    <!-- <div class="img-wrapper">
     1 <img src="/meopic.JPG" alt="Hurts Band" class="styled-img" />
    </div> -->

        <div class="text-block fade-slide">
            The music video celebrates individuality and gender fluidity, and as the group put themselves, “The video to Beautiful Ones is one of provocative poignancy.”


    </div>

    <!-- <div class="img-wrapper">
    2  <img src="/meopic.JPG" alt="Hurts Band" class="styled-img" />
    </div> -->


            <div class="text-block fade-slide">
                The music video stars the singer Theo Hutchcraft in the role of a drag queen and in the first frame we see three men being hit by a car. The word drag, as some people speculate, originated from DRess As a Girl, which commonly happened all across the world from Japanese to English theater as women were banned on stage and adolescent boys with feminine features dressed in gowns and wigs and stage makeup played romantic interests of the male protagonists. 

    </div>

    <!-- <div class="img-wrapper">
    3  <img src="/meopic.JPG" alt="Hurts Band" class="styled-img" />
    </div> -->

    <!-- <div class="img-wrapper">
    4  <img src="/meopic.JPG" alt="Hurts Band" class="styled-img" />
    </div> -->


    <div class="text-block fade-slide">
        The colors in the music videos first scene are dark and moody, with red lights portraying danger, signifying promiscuity and club culture, as the red light district symbolize prostitution.
    </div>

    <!-- <div class="img-wrapper">
    5  <img src="/meopic.JPG" alt="Hurts Band" class="styled-img" />
    </div> -->

    
    <div class="text-block fade-slide">
        
    </div>

    
    <!-- <div class="img-wrapper">
    5  <img src="/meopic.JPG" alt="Hurts Band" class="styled-img" />
    </div> -->

    
    <div class="text-block fade-slide">
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

.contacts {
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

/* video responsive */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin: 2rem auto;
  max-width: 800px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(255, 105, 180, 0.2);
}
.video-container iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0; top: 0;
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

/* image */
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
}

/* transitions */
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
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}


</style>
