<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="Publication Ethics Policy" parentPage="About" />
        <PublicationComponentVue/>
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import PublicationComponentVue from '../components/page_components/about_components/PublicationComponent.vue'
import Footer from '@/components/layout/Footer'
export default {
    name : "Blogs",
    components : {
        MenuStyle1,
        PageHeader,
        PublicationComponentVue,
        Footer
    }

}
</script>

<style>

</style>