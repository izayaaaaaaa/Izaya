<!-- IndexPage/CertificationsSection.vue -->
<!-- TODO:
        1. (style) adjust the fonts, sizes, and spacing such that it's closer to the design
-->
<template>
    <div class="section-wrapper">
        <SectionLayout title="Certifications">
            <div class="font-courier">
                <ul class="flex flex-col gap-y-[15px]">
                    <li v-for="(key, index) in data" :key="index" class="flex">
                        <div class="w-[70%]">
                            <h3 class="font-bold">{{ key.title }}</h3>
                            <p class="font-normal text-xs">{{ key.description }}</p>
                        </div>
                        <div class="w-[30%] text-right">
                            <span class="font-normal">{{ key.date }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </SectionLayout>
    </div>
</template>

<script>
import SectionLayout from "../Layouts/SectionLayout.vue"
import certificationsData from '../../data/certifications.json';

export default {
    components: {
        SectionLayout
    },
    data() {
        return { 
            data: certificationsData,
        };
    },
};
</script>