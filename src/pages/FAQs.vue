<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="FAQs" parentPage="About" />
        <FaqComponentVue/>
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import FaqComponentVue from '../components/page_components/about_components/FaqComponent.vue'
import Footer from '@/components/layout/Footer'
export default {
    name : "Blogs",
    components : {
        MenuStyle1,
        PageHeader,
        FaqComponentVue,
        Footer
    }

}
</script>

<style>

</style>