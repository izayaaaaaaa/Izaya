
<template>
  <MainLayout>
    <IntroSection />
    <SkillsSection />
    <ProjectsSection />
  </MainLayout>
</template>

<script>
import MainLayout from "../components/Layouts/MainLayout.vue"
import IntroSection from "../components/IndexPage/IntroSection.vue"
import SkillsSection from "../components/IndexPage/SkillsSection.vue"
import ProjectsSection from "../components/IndexPage/ProjectsSection.vue"

export default {
  components: {
    IntroSection,
    SkillsSection,
    MainLayout,
    ProjectsSection
  }
}

</script>