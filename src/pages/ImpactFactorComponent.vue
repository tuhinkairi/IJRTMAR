<template>
    <div>
      <MenuStyle1 />
      <PageHeader pageTitle="Impact Factor" parentPage="For Authors" />
      <impact-factor/>
      <Footer />
    </div>
  </template>
  
  <script>
  import MenuStyle1 from "@/components/layout/MenuStyle1";
  import PageHeader from "@/components/layout/PageHeader";
  import Footer from "@/components/layout/Footer";
import ImpactFactor from "../components/page_components/about_components/ImpactFactor.vue"
  export default {
    name: "Blogs",
    components: {
      MenuStyle1,
      PageHeader,
      ImpactFactor,
      Footer,
    },
  };
  </script>
  
  <style>
  </style>