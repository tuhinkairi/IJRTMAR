<template>
    <div>
      <MenuStyle1 />
      <PageHeader pageTitle="Editorial management system (Guidance)" parentPage="For Authors" />
      <GuidanceForEmsIjire/>
      <Footer />
    </div>
  </template>
  
  <script>
  import MenuStyle1 from "@/components/layout/MenuStyle1";
  import PageHeader from "@/components/layout/PageHeader";
  import Footer from "@/components/layout/Footer";
  import GuidanceForEmsIjire from "../components/page_components/for_authors/GuidanceForEmsIjire.vue";
  export default {
    name: "Blogs",
    components: {
      MenuStyle1,
      PageHeader,
      GuidanceForEmsIjire,
      Footer,
    },
  };
  </script>
  
  <style>
  </style>
