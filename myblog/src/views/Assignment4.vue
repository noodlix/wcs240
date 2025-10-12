<template>
  <div class="assignment">
    <transition name="fade-slide">
      <section class="header" v-show="showHeader">
        <h1>Digital Narrative</h1>
      </section>
    </transition>

    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/6xQT1gNcluQ?si=rk84rVlpzHflEPCh" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

        <div class="text-block fade-slide" id="short">
      <p>
My digital narrative explores “Man vs. Self”, and showcases different ways in which having an eating disorder affected my life back when I had it and it was at its worst. In the video there are scenes of hair falling out which is a very sensitive topic to me, as I wear hair extensions in real life because of hair loss that occurred in my first year, and I wanted to be vulnerable and not have them in for the duration of the video and filming. Another cool side effect of living with a disorder is falling out with friends, missing functions to avoid food, constant body-checking and comparing myself to others, my body to others’ which is shown by scrolling on twitter looking at thinspo - thin inspiration (banned on most social media) and fitspo - fit/gym inspiration.
The video starts off on a cliche, with a phone alarm buzzing at 9am, the screen is shot from above, beginning the day. My roommate walks out of the room waving bye, and there is a medium shot of my eyes following her passing by, waiting to be left alone. When the door closes behind the roommate, music starts to escalate. I start off my disordered routine, fast cuts, going to the toilet to purge, taking my clothes off to not have them affect my weigh in, and it is important that I am alone in the room not only because I am getting naked but also because I can not show that there is anything wrong with me to other people which is a recurring theme in the DN. For most scenes because of a sensitive topic that I chose I was ashamed to ask my peers to help shoot, so I employed a phone case suction pad which sometimes slipped but I loved the effect of instability conveyed through rotating and falling camera movement, so I call it not a bug but a feature. A close of the number on the scales, it flickering, camera focuses on it showing its importance.
Only after weighing myself can I start my day off actually, still disappointed by the number, which was the most important thing during that period of my life, dictating if I will be happy and allowed to have fun that day or restricting myself and focusing on food and nothing else. After brushing my teeth and washing my face and combing my hair and focusing on the crazy amount of hair that fell off with a stupid diet plan with nutritional value fit for a toddler that I followed most of the binge-free days I start body-checking, analysing my body in the mirror, fingers tracing skin, pinching rolls, imagining what I would look like without the fat ruining my body.
After the beat drop pause and a ding I start to assemble breakfast, measuring out a 1% fat claiming to be high protein kefir which used to be bought consistently in my freshman year, chia seeds for their high fiber laxative effect, and an apple, counting calories.
I show struggle to put on my leggings as they became small because of my weight gain, continue to body check in the mirror as I could never pass on any reflecting surface without at least glancing at my body, making sure to put the part in the song “become a big ape” as I exhale from sucking in my stomach. I obsess over my collarbones one last time and its time to go, put my shoes on and run to burn calories, no other purpose.
In the store I showed all the drink options and the only criteria for me was not what I was craving, the taste of the drink, or their price, it was the caloric value, and I always went with coke zero. I used a “hazy” filter to show what my eye focused on.
Next scene is me trying to study with all the food noise, with the calories of the food right after. I open the fridge to eat my leftovers and then think of thinspo to repel myself and command myself to close the fridge.
I fail to put on my nice dress, mortified, thinking “Is the dress too small or my body to big?” and find comfort again in comparing myself to strangers on the internet, doing anything to avoid stuffing my face as a friend texts me to have lunch and I imagine all the food there that I will have to resist and decline the invitation, lying about already having eaten, missing out on a nice catch up with a friend, socially isolating myself to keep my intake low. The scene of visualising food is in black and white to not mistake it foor being real events.
I assemble a zero-calorie coffee and go to “class” where a classmate offers me a cookie, there is a CU of her hands which shows my extreme interest in her food and she offers me one, and a normal person would decline but I needed to act as normal as possible and waste the cookie washing it under the drain, for reasons that will be apparent later. Just saying no could potentially result in her asking me why and I was ashamed to talk about dieting or food in general.
Next is me walking with a boy I am romantically interested in, but have my eating disorder block any relationship opportunities because of my fear of food. Just thinking of the food I would have to eat on the date has me declining the offer and rushing to my room, not forgetting to body check in the elevator mirror. I quickly discard the candies, but pick one up from the trash and eat it, then get mad at myself for it and ruin them by pouring dishwashing soap on them and spraying hairspray to not eat any more.
Still the candy results in a binge, as I sit down in the kitchen surrounded by food, regretting my life decisions.
Next we find out it is my birthday from girls inviting me out to drink which I also decline due to calories in alcohol, and in the end scene I am all alone on my birthday binging by myself.

      </p>
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
