<template>
  <div>
    <section class="services-area">
      <div class="container">
        <div class="section-heading">
          <h1 class="author-title">For Authors</h1>
        </div>
        <div class="row"> 
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img alt="image"
                  src="../../../../assets/Images/authorOne.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/instruction-for-author" > <h1>Instruction of Authors</h1></router-link>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img alt="image"
                  src="../../../../assets/Images/authorTwo.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/article-processing-charges" ><h1>Article Processing Charges</h1></router-link>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img alt="image"
                  src="../../../../assets/Images/authorThree.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/guidance-for-ems" > <h1>Guidance for  Editorial Management System</h1></router-link>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img alt="image"
                  src="../../../../assets/Images/authorFour.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/archives" ><h1>Archives</h1></router-link>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img alt="image"
                  src="../../../../assets/Images/authorFive.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <router-link to="/paper-status" ><h1>Article Status</h1></router-link>
                
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 mx-auto wow animate__animated animate__slideInUp"
          >
            <div class="service-box">
              <div class="service-image">
                <img alt="image"
                  src="../../../../assets/Images/authorSix.png"
                  width="51"
                  height="51"
                />
              </div>
              <div class="service-text">
                <a href="http://editorial.fdrpjournals.org/login?journal=3"><h1>Online Article Submission</h1></a>
                <!-- <router-link to="/manuscript-submission"><h1>Submit your Article</h1></router-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Services3Column",
};
</script>

<style scoped>
.author-title{
  color: #22bbf0;
}
</style>
