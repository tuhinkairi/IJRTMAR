<template>
  <div>
    <div class="page-header">
      <div class="
          about-banner-shape-left
          wow
          animate__animated animate__fadeInLeft
        ">
        <img src="../../assets/Images/square.png" class="wow animate__animated animate__pulse animate__infinite"
          alt="habu" />
      </div>
      <div class="
          about-banner-shape-right
          wow
          animate__animated animate__fadeInRight animate__delay-1s
        ">
        <img src="../../assets/Images/Circle.png" class="wow animate__animated animate__pulse animate__infinite"
          alt="habu" />
      </div>
      <div class="container">
        <div class="page-header-text wow animate__animated animate__fadeInDown">
          <h1 class="page-title">{{ pageTitle }}</h1>
          <span>{{ parentPage }}</span>
          <span class="span-divider font-weight-bold">|</span>
          <span class="font-weight-bold">{{ pageTitle }}</span>
          <div class="page-banner-shape-title">
            <img src="@/assets/Images/dotTwoNew.png" class="wow animate__animated animate__fadeInUp animate__delay-1s"
              alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["pageTitle", "parentPage"],
};
</script>

<style scoped></style>
