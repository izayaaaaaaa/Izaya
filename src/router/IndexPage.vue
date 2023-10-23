
<template>
  <MainLayout>
    <IntroSection />
    <SkillsSection />
  </MainLayout>
</template>

<script>
import MainLayout from "../components/Layouts/MainLayout.vue"
import IntroSection from "../components/IndexPage/IntroSection.vue"
import SkillsSection from "../components/IndexPage/SkillsSection.vue"

export default {
  components: {
    IntroSection,
    SkillsSection,
    MainLayout
  }
}

</script>