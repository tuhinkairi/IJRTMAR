<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="Arcticle Processing Charges" parentPage="For Authors" />
        <ProcessingChargesComponentVue/>
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import ProcessingChargesComponentVue from '../components/page_components/for_authors/ProcessingChargesComponent.vue'
import Footer from '@/components/layout/Footer'
export default {
    name : "Blogs",
    components : {
        MenuStyle1,
        PageHeader,
        ProcessingChargesComponentVue,
        Footer
    }

}
</script>

<style>

</style>