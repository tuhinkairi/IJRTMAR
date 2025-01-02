<template>
    <div>
      <MenuStyle1 />
      <PageHeader pageTitle="Paper Status" parentPage="For Authors" />
      <PaperStatusComponent />
      <Footer />
    </div>
  </template>
  
  <script>
  import MenuStyle1 from "@/components/layout/MenuStyle1";
  import PageHeader from "@/components/layout/PageHeader";
  import Footer from "@/components/layout/Footer";
  import PaperStatusComponent from "../components/page_components/for_authors/PaperStatusComponent.vue";
  export default {
    name: "Blogs",
    components: {
      MenuStyle1,
      PageHeader,
      PaperStatusComponent,
      Footer,
    },
  };
  </script>
  
  <style>
  </style>