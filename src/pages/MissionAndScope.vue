<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="Aim And Scope" parentPage="About" />
        <MissionComponentVue/>
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import Footer from '@/components/layout/Footer'
import MissionComponentVue from '../components/page_components/about_components/MissionComponent.vue'
export default {
    name : "Blogs",
    components : {
        MenuStyle1,
        PageHeader,
        MissionComponentVue,
        Footer
    }

}
</script>

<style scoped>



</style>