<!-- AboutPage.vue -->
<template>
  <div class="about">
    <div class="about-content">
      <p class="greeting">Hi,</p>
      <p class="name">i'm <span style="color: var(--izaya)">izaya</span>.</p>
      <p class="description">
        I am a computer science student based in Metro Manila.<br>
        My interests lie in <span style="color: var(--webdev)">web development</span>, <span style="color: var(--purple)">blockchain</span>, and <span style="color: var(--cybersec)">cybersecurity</span>.<br>
        I wish to develop a <u>blockchain-based social networking site</u> for my thesis.
      </p>
    </div>
  </div>

  <div class="sticky-skills-bar-container">
    <h3 style="margin-bottom: 20; color: var(--red)">Skills</h3>
    <StickySkillsBar v-for="skill in skills" :key="skill.text" :text="skill.text" :textColor="skill.textColor" />
  </div>

  <SocialMediaIcons :icons="socialIcons" />
</template>

<script>
  import StickySkillsBar from "./StickySkillsBar.vue"; 
  import SocialMediaIcons from "./SocialMediaIcons.vue";

  export default {
    name: 'AboutPage',
    components: {
      StickySkillsBar,
      SocialMediaIcons
    },
    data() {
      return {
        skills: [
          { text: 'mongodb', textColor: 'var(--mongodb)' },
          { text: 'express', textColor: 'var(--express)' },
          { text: 'react', textColor: 'var(--react)' },
          { text: 'node', textColor: 'var(--node)' },
          { text: 'ui/ux', textColor: 'var(--purple)'},
          { text: 'linux', textColor: 'var(--linux)'}
        ],

        socialIcons: [
          { src: require('../assets/email-icon.png'), alt: 'email', link: 'mailto:fammacadangdang@mymail.mapua.edu.ph' },
          { src: require('../assets/github-icon.png'), alt: 'github', link: 'https://github.com/izayaaaaaaa' },
          { src: require('../assets/linkedin-icon.png'), alt: 'linkedin', link: 'https://www.linkedin.com/in/francyn-abcd-macadangdang-3b67821a9/' },
        ]
      };
    }
  };
</script>

<style>
  .about {
    /* makes sure the stick-skills thing is on the bottom-right */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box; 

    text-align: left;
    font-family: 'Inika', sans-serif;
  }

  .about-content {
    padding: 300px 150px; /* top-bottom margin makes sure the content is centered */
  }

  .sticky-skills-bar-container {
    /* makes sure the stick-skills thing is on the bottom-right */
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* align items to the right side */

    padding: 183px 150px;
  }

  /* default size for mobile */
  .greeting {
    font-size: 16px;
  }

  .name {
    font-size: 36px; 
    margin: 0;
  }

  .description {
    font-size: 18px;
  }

  /* media query for desktop size */
  @media screen and (min-width: 768px) {
    .greeting {
      font-size: 18px; 
    }

    .name {
      font-size: 48px; 
    }

    .description {
      font-size: 20px;
    }
  }
</style>