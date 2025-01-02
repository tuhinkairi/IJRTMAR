<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="Peer Review Policy" parentPage="About" />
        <PeerReviewComponentVue/>
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import Footer from '@/components/layout/Footer'
import PeerReviewComponentVue from '../components/page_components/about_components/PeerReviewComponent.vue'
export default {
    name : "Blogs",
    components : {
        MenuStyle1,
        PageHeader,
        PeerReviewComponentVue,
        Footer
    }

}
</script>

<style>

</style>