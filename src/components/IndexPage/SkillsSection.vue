<template>
    <div class="section-wrapper">
        <SectionLayout title="Skills">
            <div class="flex gap-x-[27px]">
                <div class="">
                    <ul class="flex flex-col gap-y-[3px]">
                        <li v-for="(key, index) in Object.keys(data)" :key="index" class="font-bold uppercase text-[11px]">
                            {{ key }}
                        </li>
                    </ul>
                </div>
                <div class="">
                    <ul class="flex flex-col gap-y-[3px]">
                        <li v-for="(key, index) in Object.keys(data)" :key="index" class="text-xs font-normal">
                            {{ data[key].join(', ') }}
                        </li>
                    </ul>
                </div>
            </div>
        </SectionLayout>
    </div>
</template>

<script>
import SectionLayout from "../Layouts/SectionLayout.vue"
import skillsData from '../../data/skills.json';

export default {
    components: {
        SectionLayout
    },
    data() {
        return {
            data: skillsData,
        };
    },
}
</script>