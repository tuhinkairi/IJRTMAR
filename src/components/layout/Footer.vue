<template>
  <div>
    <section class="footer-area">
      <div class="container position-relative">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <h2>Contact Us</h2>
            <p>
              +91 98405 21421 <br /><i>editorincheif@ijrtmr.com</i> <br />Fifth
              Dimension research Publication (P) Ltd. <br />No: 38D5F, Rajaji
              nagar, Ariyalur-621713.<br />Tamilnadu, India.
            </p>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <h2>Quick Links</h2>
            <ul>
              <div class="row">
                <div class="col">
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/ethics">About Us</router-link></li>
                  <li><router-link to="/archives">Archives</router-link></li>
                  
                </div>
                <div class="col">
                  <li><router-link to="/topics">For Authors</router-link></li>
                  <!-- <li><router-link to="/blogs">Blogs</router-link></li> -->
                  <li><router-link to="/FAQs">FAQs</router-link></li>
                  <li>
                    <router-link to="/contact-us">Contact Us</router-link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-9">
            <h2>Submission Guideliness</h2>
            <ul>
              <li><router-link to="/editorial-board">Editorial Management System</router-link></li>
              <li><router-link to="/paper-status">Status of your Article</router-link></li>
              <li><router-link to="/article-processing-charges">Pay Fee</router-link></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-12">
            <h2>Policies</h2>
            <ul>
              <li><router-link to="/ethics">Ethics And Policies</router-link></li>
              <li><router-link to="/peer-review-policy">Peer Review Policy</router-link></li>
              <li><router-link to="/publication-ethics-policy">Publication Ethics Policy</router-link></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-8 col-sm-12 col-12">
            <h2>Our Newsletter</h2>
            <p>
              Subscribe to our mailing list to get the up dates to your email
              inbox
            </p>
            <form action="/">
              <input type="email" placeholder="E-mail" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <a class="go-to-top goToTopIcon" href="#"
            ><font-awesome-icon :icon="['fas', 'chevron-up']"
          /></a>
        </div>
      </div>
    </section>
    <div class="container text-center copyright">
      <p>
        &copy; {{ currentYear }} Fifth Dimension Research Publication. Made with
        <i class="bi bi-heart-fill" style="color: #ff0000"></i> in India by
        <a href="https://www.flaptics.io/" target="_blank">Flaptics</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
section.footer-area h2 {
  color: #22bbf0;
}
section.footer-area input[type="submit"] {
  background: #22bbf0;
}
.goToTopIcon {
  background-color: #22bbf0;
}
</style>
