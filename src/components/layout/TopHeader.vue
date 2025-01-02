<template>
  <div>
    <div class="top-header d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-between" style="align-items: center">
          <div class="col-xl-4 col-lg-5 col-md-6 col-12">
            <div class="top-header-contact">
              <a href="tel:+91 98405 21421">
                <font-awesome-icon :icon="['fas', 'phone-alt']" />+91 98405
                21421
              </a>
            </div>
            <div class="top-header-contact pl-2">
              <a href="mailto:info@example.com">
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                />editorincheif@ijrtmr.com
              </a>
            </div>
          </div>
          <div
            class="
              col-xl-4 col-lg-3 col-md-4 col-sm-0
              text-right
              top-header-social
            "
          >
            <a
              href="https://portal.issn.org/resource/ISSN/2583-0368"
              target="_blank"
            >
              <div>
                <p class="top-header-contact"><b>ISSN NO: </b>2583-0368</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style scoped>
.top-header-contact {
  margin-right: 0px;
}
.top-header-social {
  padding-top: 2px;
}
.top-header-contact svg {
  color: #22bbf0;
}
</style>
