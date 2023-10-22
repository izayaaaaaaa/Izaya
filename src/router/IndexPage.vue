
<template>
  <MainLayout>
    <IntroSection />
    <TechnicalSection />
  </MainLayout>
</template>

<script>
import MainLayout from "../components/Layouts/MainLayout.vue"
import IntroSection from "../components/IndexPage/IntroSection.vue"
import TechnicalSection from "../components/IndexPage/TechnicalSection.vue"

export default {
  components: {
    IntroSection,
    TechnicalSection,
    MainLayout
  }
}

</script>