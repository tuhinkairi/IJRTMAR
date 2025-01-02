<template>
  <div>
    <section class="banner">
      <VueSlickCarousel v-bind="settings" class="home-slider">
        <template #prevArrow>
          <button class="slick-prev slick-arrow">
            <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
          </button>
        </template>
        <div class="home-slider-content">
          <div class="banner-floating-text ijireHeading">
            <h1 class="wow animate__animated animate__fadeInDown animate__delay-1s side-content">
              IJRTMR
            </h1>
          </div>
          <div class="container position-relative">

            <div class="row justify-content-between">
              <div class="col-lg-12 col-md-12">
                <div class="banner-text wow animate__animated animate__fadeInDown">
                  <h1 class="heading-title">International Journal of Recent Trends in Multidisciplinary Research
                  </h1>
                  <p class="banner-sub-content "><span class="essn-content">e-ISSN:2583-0368</span>, Follows UGC-CARE
                    Guidelines
                  </p>
                  <p class="banner-sub-content sub-bold-content">
                    An International Scholarly Open Access Journal, Peer-reviewed, Refereed Journal
                  </p>
                  <p class="banner-sub-content">High Impact factor, Bi-Monthly, Multidisciplinary Journal
                  </p>
                  <p class="banner-sub-content">CrossRef DOI (Digital Object Identifier) allotted to all published
                    papers.
                    Indexed by Google Scholar, Elsevier-Mendeley and many other research databases
                  </p>
                  <div class="row justify-content-center">
                    <div class="banner-button">
                      <a href="http://editorial.fdrpjournals.org/login?journal=3"
                        class="wow animate__animated animate__flipInX animate__delay-1s large-blue-button text-center">SUBMIT YOUR
                        Article</a>
                    </div>
                    <div class="banner-button">
                      <a href="http://editorial.fdrpjournals.org/login?journal=3"
                        class="wow animate__animated animate__flipInX animate__delay-1s large-blue-button">
                        Author Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>

      <div class="shape-01 banner-ellipse">
        <img src="../../../../assets/Images/Circle.png" class="wow animate__animated animate__pulse animate__infinite"
          alt="Habu" />
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "BannerStyle1",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1000,
      },
    };
  },
};
</script>

<style>
@media screen and (max-width: 991.5px) {
  .banner-image {
    background-image: url("~@/assets/banner/home_banner.png");
    height: 74%;
    background-position-x: 68%;
    background-size: cover;
  }
}

.banner-text h1 {
  margin-left: 30px;
}

.banner-text p {
  margin-left: 30px;
}

.large-blue-button {
  margin-left: 30px;
}

.banner-text h1 {
  color: rgb(34, 54, 69);
}

.large-blue-button {
  background-color: #22bbf0;
  border-radius: 15px;
}

.menu-header.menu_header_dark {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 9999999;
  background: #72a9db;
  height: 90px;
  padding: 0;
  -webkit-animation: scroll-header-animation 0.5s linear;
  animation: scroll-header-animation 0.5s linear;
}

.sub-bold-content {
  font-weight: bold;

}

.essn-content {
  color: #72a9db;
  font-weight: bold;
  font-style: italic
}

.banner-sub-content {
  margin: 0 !important;
  padding: 12px 0;
  text-align: center !important;
}

.large-blue-button {
  background-color: #72a9db;
  border-radius: 15px;
}

.banner-text h1 {
  margin-left: 30px;
  text-align: center;
}

.banner-text p {
  margin-left: 30px;
}

.large-blue-button {
  margin-left: 30px;
}

.banner-button {
  display: flex;
  justify-content: center;
  padding: 16px 0;
}
</style>
