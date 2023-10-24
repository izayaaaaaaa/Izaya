<!-- IndexPage.vue -->
<template>
  <MainLayout>
    <IntroSection />
    <SkillsSection />
    <ProjectsSection />
    <!-- Certifications Section -->
    <!-- Education Section -->
  </MainLayout>
</template>

<script>
import MainLayout from "../components/Layouts/MainLayout.vue"
import IntroSection from "../components/IndexPage/IntroSection.vue"
import SkillsSection from "../components/IndexPage/SkillsSection.vue"
import ProjectsSection from "../components/IndexPage/ProjectsSection.vue"

export default {
  components: {
    MainLayout,
    IntroSection,
    SkillsSection,
    ProjectsSection
  }
}
</script>