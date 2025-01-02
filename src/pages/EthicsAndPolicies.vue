<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="Ethics And Policies" parentPage="About" />
        <EthicsComponentVue/>
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import EthicsComponentVue from '../components/page_components/about_components/EthicsComponent.vue'
import Footer from '@/components/layout/Footer'
export default {
    name : "EthicsAndPolicies",
    components : {
        MenuStyle1,
        PageHeader,
        EthicsComponentVue,
        Footer
    }

}
</script>

<style>

</style>