<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="Topics" parentPage="For Authors" />
        <TopicsComponentVue/>
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import TopicsComponentVue from '../components/page_components/for_authors/TopicsComponent.vue'
import Footer from '@/components/layout/Footer'
export default {
    name : "Blogs",
    components : {
        MenuStyle1,
        PageHeader,
        TopicsComponentVue,
        Footer
    }

}
</script>

<style>

</style>