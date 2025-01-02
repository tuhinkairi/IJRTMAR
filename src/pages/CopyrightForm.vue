<template>
    <div>
        <MenuStyle1 />
        <PageHeader pageTitle="Copyright Form" parentPage="For Authors" />
        <Footer />
    </div>
  
</template>

<script>
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import Footer from '@/components/layout/Footer'
export default {
    name : "Blogs",
    components : {
        MenuStyle1,
        PageHeader,
        Footer
    }

}
</script>

<style>

</style>