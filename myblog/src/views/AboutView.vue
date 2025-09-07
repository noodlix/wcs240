<template>
  <div class="about">
    <section class="hero fade-in">
      <h1>Hi, my name is <span class="highlight">Zhibek</span></h1>
      <p>I am a second year CS student at NU, I am from Almaty and this page is all about me</p>
      <!-- <div class="img-placeholder"><img src="myblog/public/meopic.JPG" alt=""></div> -->
      <!-- <div class="img-placeholder"><img src="https://drive.google.com/uc?export=view&id=1cHoDcZvQxF2yb-xdwdkXEGzYo3F8VJK6" alt="Me" class="hero-img" /></div> -->

    </section>

    <section class="section fade-in">
      <h1>My Hobbies</h1>
      <p>In my free time I do taekwondo, photography and hike.</p>
      <!-- <div class="img-placeholder"><img src="myblog/public/tkdpic.JPG" alt=""></div>
      <div class="img-placeholder"><img src="myblog/public/campic.JPG" alt=""></div>
      <div class="img-placeholder"><img src="myblog/public/hikpic.JPG" alt=""></div> -->
    </section>

  </div>
</template>

<script>
export default {
  name: "AboutPage",
  mounted() {
    const faders = document.querySelectorAll(".fade-in");
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, options);

    faders.forEach(fader => {
      observer.observe(fader);
    });
  }
};
</script>

<style scoped>
.about {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  padding: 2rem;
  line-height: 1.6;
  color: #333;
  width: 80vw;
  overflow-x: hidden;

}
.hero-img, .img-placeholder {
  width: 100%;          
  max-width: 700px;     
  height: 500px;        
  border-radius: 12px;  
  overflow: hidden;     
  position: relative;
  margin: 1rem auto; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.hero-img, .img-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;    
  object-position: center; 
  display: block;
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

.highlight {
  color: #ff1493;
  font-family: "Dancing Script";

}

.hero, .section {
  margin: 3rem 0;
  text-align: center;
}

.hero-img, .img-placeholder {
  margin: 1.5rem auto;
  width: 80%;
  height: 500px;
  border-radius: 15px;
  border: 2px dashed #ffb6c1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff69b4;
  font-weight: bold;
}

.fade-in {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s ease, transform 1s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
