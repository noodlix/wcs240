<template>
  <div class="assignment">
    <transition name="fade-slide">
      <section class="header" v-show="showHeader">
        <h1>psa</h1>
      </section>
    </transition>

    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/iOrgXWTjg88?si=jPBt6VxwpqasaHIO" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>

        <div class="text-block fade-slide" id="short">
      <p>
        
We chose to explore the problem of financial illiteracy for this assignment. Many students receive stipends but do not know how to spend them wisely. To see the percentage of people who are not financially literate, we conducted a survey among students. We asked four short questions about their stipends and spending habits. Two-thirds of the respondents answered that they are financially illiterate. After getting these shocking results from our offline and online surveys, we understood the significance of the problem.
Our solution is to raise awareness about financial literacy courses. Nowadays, the majority of people simply do not know that there are such free courses on the internet. By taking these courses, people can learn how to spend money wisely, divide it into parts, and even save it. These courses can help many people who have different levels of financial knowledge.
Our advocacy for this video is “Start learning financial literacy today.” We wanted to motivate students to improve their financial habits by joining free online courses. The main issue here is a lack of awareness. Many people simply do not know that these courses exist. Therefore, such courses could be beneficial if included as a mandatory program in universities and high schools. We used one article written by Cedeno (2021) with a similar idea. The author taught many people through financial literacy courses, and the results were impressive: participants learned how to use their money properly and also improved their job and saving skills.
In our video, we used three rhetorical appeals (ethos, pathos, and logos) to make it more persuasive. Ethos is shown through credible sources and statistics that make the information trustworthy. Pathos is demonstrated by emotions in the story. Our main character makes poor financial decisions that lead to bad consequences, which makes the video more emotional. Logos is represented by arguments and data from the sources that support the importance of financial literacy courses.
When creating the PSA, we used several camera techniques. For example, we used a dolly effect to show the character’s realization of the importance of financial literacy. We filmed the video with a Nikon Z6 camera and edited it using Davinci Resolve.
The process of making the video consisted of several steps. First, we wrote a script, which made our work much easier. We started the shooting process with the scene where Nazym pays for something with her credit card. Then, we found one boy to act as the main character’s boyfriend, who asks her for money. Next, we filmed the surveillance scene, which was very funny because we asked a stranger to help us. After that, we shot some scenes about financial literacy courses. Lastly, we edited the video and added a voice-over.
We also faced a few challenges. The biggest one was the voice-over. It was difficult because we filmed almost everything in a cafe, and it was very loud there. We had to record the audio and adjust it during editing. The second problem was focusing the camera on the main character. It was hard to keep the image clear and stable.
Overall, this project helped me develop new skills. I learned how to edit videos in Davinci Resolve. At first, I thought it was difficult and it definitely is, but after some time, I got used to the program. We also learned how to choose the right music that fits each part of the video best.


      </p>
    </div>


                        <div class="text-block fade-slide" id="short">
      <p>
Next we find out it is my birthday from girls inviting me out to drink which I also decline due to calories in alcohol, and in the end scene I am all alone on my birthday binging by myself.

      </p>
    </div>


<div class="text-block fade-slide" id="short">
      <p>
Some of the challenges include not having an operator for intimate scenes, accidentally filming some dialogue in russian and some in english and making the decision to voice over the russian parts and used a voice changer on CapCut to make my voice sound lower.

      </p>
    </div>

<div class="text-block fade-slide" id="short">
      <p>
        All five modes of communication discussed in the James Paul Gee’s Language and Learning in the Digital age were used to enhance my digital Narrative. The linguistic mode is the lyrics of the song that correlate to what is happening in the video, the dialogue between the actors and the numbers which are prevalent in the video: the weight on the scales, caloric values of drinks and meals. The visual mode is used as different shots in the video tell the story, the hazy filter establishes what the audience’s eyes should focus on and the black and white filter tells the audience what I imagine would happen if I agree to go out with the boy in the video, eat lunch with a friend or go clubbing with girls on my birthday. The aural mode is used as a song plays in the background of the video, the energetic part starts when the roommate exits and the disordered thoughts take full control over me, the silent stops continued by “ding” sounds show when pivot points occur in the narrative, the music gets quieter when characters speak to let the audience hear them. The spatial mode is used as in the scenes of binging in the kitchen and binging on my birthday. I use negative space and sit as a small character as the camera pans out to create pressure and a negative mood, I sit surrounded by food, the organization of objects utilize it as well. The gestural mode is used as I put my hands on my eyes to show regret and sadness, in the scene when a boy is asking me out on a date I gesticulate and laugh to show that I like him and get nervous around him. My facial expressions in the morning get ready scene show disappointment and tiredness as I am not satisfied with what the scales showed me.
      </p>
    </div>

<div class="text-block fade-slide" id="short">
      <p>
The intended audience of the video is teenagers, mostly girls that had struggled or are still struggling with restrictive eating disorders who might feel like their problems are made up and it is their fault they have fallen out with everyone, who feel anxious or intimidated by situations that might involve food in social settings as they feel ashamed to eat too much or too little and attract any attention to themselves

      </p>
    </div>

<div class="text-block fade-slide" id="short">
      <p>
I had referenced the show “Insatiable” in the closing the refrigerator scene and the pouring dishwashing solution on top of the food scene.
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
