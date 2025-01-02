<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="Blogs" parentPage="About" />
        <BlogsComponentVue/>
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import BlogsComponentVue from '../components/page_components/about_components/BlogsComponent.vue'
import Footer from '@/components/layout/Footer'
export default {
    name : "Blogs",
    components : {
        MenuStyle1,
        PageHeader,
        BlogsComponentVue,
        Footer
    }

}
</script>

<style>

</style>