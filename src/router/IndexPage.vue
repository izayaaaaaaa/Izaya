<!-- IndexPage.vue -->
<!-- TODO:
        1. create the education section
-->
<template>
    <MainLayout>
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
    </MainLayout>
</template>

<script>
import MainLayout from "../components/Layouts/MainLayout.vue"
import IntroSection from "../components/IndexPage/IntroSection.vue"
import SkillsSection from "../components/IndexPage/SkillsSection.vue"
import ProjectsSection from "../components/IndexPage/ProjectsSection.vue"
import CertificationsSection from "../components/IndexPage/CertificationsSection.vue"

export default {
    components: {
        MainLayout,
        IntroSection,
        SkillsSection,
        ProjectsSection,
        CertificationsSection
    }
}
</script>