<!-- IndexPage.vue -->
<template>
    <MainLayout>
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
    </MainLayout>
</template>

<script>
import MainLayout from "../components/Layouts/MainLayout.vue"
import IntroSection from "../components/IndexPage/IntroSection.vue"
import SkillsSection from "../components/IndexPage/SkillsSection.vue"
import ProjectsSection from "../components/IndexPage/ProjectsSection.vue"
import CertificationsSection from "../components/IndexPage/CertificationsSection.vue"
import EducationSection from "../components/IndexPage/EducationSection.vue"

export default {
    components: {
        MainLayout,
        IntroSection,
        SkillsSection,
        ProjectsSection,
        CertificationsSection,
        EducationSection
    }
}
</script>