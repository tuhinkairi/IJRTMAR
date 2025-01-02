<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="Instruction For Author" parentPage="For Authors" />
        <InstructionForAuthorComponentVue/>
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import InstructionForAuthorComponentVue  from '../components/page_components/for_authors/InstructionForAuthorComponent.vue'
import Footer from '@/components/layout/Footer'
export default {
    name : "Blogs",
    components : {
        MenuStyle1,
        PageHeader,
        InstructionForAuthorComponentVue,
        Footer
    }

}
</script>

<style>

</style>