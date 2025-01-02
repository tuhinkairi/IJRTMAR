<template>
  <div>
    <section class="contact-area">
      <div class="container">
        <div
          class="
            section-heading
            text-center
            mx-auto
            wow
            animate__animated animate__slideInUp
          "
        >
          <h2>Feel Free To Contact Us</h2>
          <!-- <p>We have people of multiple kind in the house. Together we can provide high quality work to satisfy
                    you.</p> -->
        </div>
        <!-- Location -->
        <!-- <div class="location-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.9970179245997!2d90.37933665546187!3d23.764471837688824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c755f321f80b%3A0x5b87cdb2ee46b9a1!2sPresidential%20Plaza%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1605596229502!5m2!1sen!2sbd"
                     height="601" style="border:0; width: 100%;" allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
            </div> -->
        <!-- Address -->
        <div class="address-container wow animate__animated animate__fadeIn">
          <div class="row">
            <div class="col-sm-4 col-6 d-flex align-items-center">
              <div class="address-box mx-auto">
                <img class="mx-auto" src="@/assets/svgs/map.png" alt="map" />
                <!-- <p class="text-white">
                  Fifth Dimension research Publication (P) Ltd.
                  No: 38D5F, Rajaji
                  nagar, Ariyalur-621713.<br />Tamilnadu, India.<br />
                </p> -->
                <p class="text-white">Fifth Dimension research Publication (P) Ltd.</p>
                <p class="text-white">No: 38D5F, Rajaji nagar, Ariyalur-621713.</p>
                <p class="text-white">Tamilnadu, India.</p>
              </div>
            </div>
            <div class="col-sm-4 col-6 d-flex align-items-center">
              <div class="address-box mx-auto">
                <img
                  class="mx-auto"
                  src="@/assets/svgs/chatting.png"
                  alt="map"
                />
                <a href="#">+91 9840521421</a>
                <!-- <a href="tel:+1232533654">+1 2325 33654</a> -->
              </div>
            </div>
            <div class="col-sm-4 col-6 mx-auto d-flex align-items-center">
              <div class="address-box mx-auto">
                <img
                  class="mx-auto"
                  src="@/assets/svgs/message.png"
                  alt="map"
                />
                <a href="#">editorincheif@ijrtmr.com</a>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from "./ContactForm";

export default {
  name: "AddressBox",
  components: {
    ContactForm,
  },
};
</script>

<style>
section.contact-area {
  background-image: url("~@/assets/svgs/map-bg.png");
}
/* .address-box{
    width:250px ;
} */
.address-container {
  background: #22bbf0;
}
p{
  text-align: left;
}
.text-white{
  text-align: left;
}
</style>
