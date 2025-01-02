<template>
    <div>
      <MenuStyle1 />
      <PageHeader pageTitle="Downloads" parentPage="For Authors" />
      <Downloads/>
      <Footer />
    </div>
  </template>
  
  <script>
  import MenuStyle1 from "@/components/layout/MenuStyle1";
  import PageHeader from "@/components/layout/PageHeader";
  import Footer from "@/components/layout/Footer";
  import Downloads from "../components/page_components/for_authors/Downloads.vue";
  export default {
    name: "Blogs",
    components: {
      MenuStyle1,
      PageHeader,
      Downloads,
      Footer,
    },
  };
  </script>
  
  <style>
  </style>