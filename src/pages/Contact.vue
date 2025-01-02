<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Contact Us" parentPage="Home" />
    <AddressBox />
    <!-- <CustomProjects /> -->
    <Footer />
  </div>
</template>

<script>

import TopHeader from '@/components/layout/TopHeader'
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import AddressBox from '@/components/page_components/contact/AddressBox'
// import CustomProjects from '@/components/common/CustomProjects'
import Footer from '@/components/layout/Footer'

export default {
  name: "Contact",
  components: {
      TopHeader,
      MenuStyle1,
      PageHeader,
      AddressBox,
      // CustomProjects,
      Footer
  }
};

</script>

<style scoped>
</style>
