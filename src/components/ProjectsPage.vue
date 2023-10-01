<!-- ProjectsPage -->
<template>
  <div class="projects">
    <h2 class="projects-title" style="color: var(--navbartext)">Projects</h2>
    
    <div class="project-cards">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <h3 class="project-name">{{ project.name }}</h3>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </div>
  </div>
  <SocialMediaIcons :icons="socialIcons" />
</template>

<script>
import SocialMediaIcons from "./SocialMediaIcons.vue";

export default {
  name: 'ProjectsPage',
  components: {
    SocialMediaIcons
  },
  data() {
    return {
      socialIcons: [
        { src: require('../assets/email-icon.png'), alt: 'email', link: 'mailto:fammacadangdang@mymail.mapua.edu.ph' },
        { src: require('../assets/github-icon.png'), alt: 'github', link: 'https://github.com/izayaaaaaaa' },
        { src: require('../assets/linkedin-icon.png'), alt: 'linkedin', link: 'https://www.linkedin.com/in/francyn-abcd-macadangdang-3b67821a9/' },
      ],
      projects: [
        {
          name: 'LawPhil 2.0',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        },
        {
          name: 'QA / Automation',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        },
        {
          name: 'SNS Redesign',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        },
        // {
        //   name: 'Project 1',
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        // }
      ]
    };
  }
};
</script>

<style scoped>
  .projects {
    text-align: center;
  }

  .projects-title {
    font-size: 40px;
    font-family: 'Inika', sans-serif;
  }

  .project-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 795px;
    margin: 0 auto;
    overflow-y: auto;

    font-family: 'Inter', sans-serif;
  }

  .project-card {
    background-color: #373737;
    padding: 50px;
    margin-bottom: 20px;
    border-radius: 5px;
    max-width: 100%;
    text-align: left;
  }

  .project-name {
    font-size: 42px;
    margin: 0;
  }

  .project-description {
    font-size: 16px;
  }
</style>
