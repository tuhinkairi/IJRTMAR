<template>
  <div style="position: relative;">
    <section class="speciality-area">
      <div style="display: flex;justify-content: space-around;">

        <div style="width: 200px;" class="left-side-container mr-2">
          <p class="blink mb-5"> <a href="http://editorial.fdrpjournals.org/login?journal=3" style="color: #fff;">Submit
              Research Paper</a> </p>
          <div class="shadow-effect mb-5">
            <h6>Downloads :</h6>
            <p style="cursor: pointer;"
              @click="getManuScript('https://fdrpjournals.s3.ap-south-1.amazonaws.com/main/2/manuscripttemplate/IJRTMR-Manuscript-Template.docx')">

              Manuscript Template
            </p>
            <p style="cursor: pointer;"
              @click="getCopyRightForm('https://fdrpjournals.s3.ap-south-1.amazonaws.com/main/2/copyrightform/IJRTMR_Registration+%26Copyright-Form.pdf')">
              Copyright Form
            </p>
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/isn.jpg" height="90" width="200" />
          </div>
          <div class="shadow-effect mb-5">
            <img alt="image" src="../../../assets/Images/cc.jpg" height="90" width="180" />
            <p>All research Article published on this website are licensed under Creative Commons Attribution-ShareAlike
              4.0
              International License, and all rights belong to their respective authors/researchers.
            </p>
          </div>
          <div>
            <IndexingSideDesign />
          </div>
        </div>
        <div class="container" style="max-width: 1000px !important; margin: 0"  >
          <div class="child-custom-container">

            <div class="sub-child-custom-container">
              <div class="row justify-content-center">
                <div class="row justify-content-center">
                  <div class="col-lg-5 col-md-12 col-sm-12 m-2 editorialBox p-4">
                    <h6>Patron/Editor-in-chief :</h6>
                    <p><b>Name:</b> Dr. S. Sivaganesan</p>
                    <p>
                      <b>Designation:</b> Professor& Head Department of Electrical &
                      Electronics Engineering.
                    </p>
                    <p>
                      <b>Address:</b> Holymary Institute of Technology &
                      Science.Hyderabad-501301.India
                    </p>
                    <p>
                      <b>E-Mail:</b> editorinchief@ijrtmr.com,<br />
                      sivaganesan@hmgi.ac.in
                    </p>
                  </div>
                  <div class="col-lg-5 col-md-12 col-sm-12 m-2 editorialBox p-4">
                    <h6>Managing Editor:</h6>
                    <p><b>Name:</b> Dr. Vetriveeran Rajamani</p>
                    <p>
                      <b>Designation:</b>Assistant Professor Department of Electronics
                      & Communication Engineering,
                    </p>
                    <p>
                      <b>Address:</b>Nalla Malla Reddy Engineering College.
                      Hyderabad-500088.India.
                    </p>
                    <p><b>E-Mail:</b>rajamani.ece@nmrec.edu.in</p>
                  </div>
                </div>
                <div class="row editorialBox m-2 p-4" v-for="(data, index) in membersList" :key="index">
                  <div class="col-lg-3 col-md-12 col-sm-12 p-3 editorialImage">
                    <img class="handelImageSize" :src="data.member_image_url" alt="img" />
                  </div>
                  <div class="col p-3">
                    <h6>{{ data.member_role }}</h6>
                    <p><b>Name:</b>{{ data.member_name }}</p>
                    <p><b>Designation:</b> {{ data.member_designation }}</p>
                    <p><b>Address:</b> {{ data.member_address }}</p>
                    <p><b>E-mail:</b> {{ data.member_email }}</p>
                    <p><b>Research Area:</b>{{ data.member_researcharea }}</p>
                    <p><b>Profile Link: </b>{{ data.member_website }}</p>
                    <p><b>Country:</b> {{ data.member_country }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div style="width: 200px;" class="right-side-container ml-2">
            <div class="mb-5">
              <router-link to="/editorial-board">
                <p class="blink">Join As A reviewer</p>
              </router-link>
            </div>
            <div class="shadow-effect mb-5">
              <img alt="image" src="../../../assets/Images/tur.jpg" height="90" width="180" />
              <p>Plagiarism is checked by the leading plagiarism checker</p>
            </div>
            <div class="shadow-effect mb-5">
              <img alt="image" src="../../../assets/Images/doi.jpg" height="90" width="180" />
              <p>CrossRef DOI is assigned to research Article published in our journal.
                IJIRE DOI prefix is10.59256/ijire
              </p>
            </div>
            <div class="shadow-effect mb-5">
              <h4>For Authors</h4>
              <router-link to="topics">
                <p>Topics</p>
              </router-link>
              <router-link to="call-for-papers">
                <p>Call For Papers</p>
              </router-link>
              <router-link to="instruction-for-author">
                <p>Instruction For Authors</p>
              </router-link>
              <p><a href="http://editorial.fdrpjournals.org/login?journal=3" style="color:rgb(100, 117, 137)">Manuscript
                  Submission</a></p>
              <router-link to="guidance-for-ems">
                <p>Guidance For EMS</p>
              </router-link>
              <router-link to="article-processing-charges">
                <p style="text-align: left;">Article Processing Charges</p>
              </router-link>
              <router-link to="downloads">
                <p>Downloads</p>
              </router-link>
              <router-link to="paper-status">
                <p>Paper Status</p>
              </router-link>
            </div>
            <div class="shadow-effect">
              <h4>Policies</h4>
              <router-link to="ethics">
                <p>Ethics And Policies</p>
              </router-link>
              <router-link to="peer-review-policy">
                <p>Peer Review Policy</p>
              </router-link>
              <router-link to="publication-ethics-policy">
                <p>Publication Ethics Policy</p>
              </router-link>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import IndexingSideDesign from '@/components/common/IndexingSideDesign.vue'

export default {
  components: {
    IndexingSideDesign
  },
  data() {
    return {
      membersList: [],
    };
  },
  methods: {
    getManuScript: function (getUrl) {
      window.open(getUrl, "_blank");
    },
    getCopyRightForm: function (getForm) {
      window.open(getForm, "_blank");
    },
    getMemberData() {
      this.api.postData("editorialBoard").then(
        (res) => {
          this.membersList = res.data.membersList;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
  mounted() {
    this.getMemberData();
  },
};
</script>
<style scoped>
.editorialBox {
  /* border: 2px solid #EEEDE7; */
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 85%;
}
.editorialImage img {
  width: 100%; /* Makes the image responsive */
  height: 100%; /* Maintains aspect ratio */
  max-height: 320px; /* Set a maximum height for all images */
  object-fit: cover; /* Ensures consistent cropping without distortion */
  border-radius: 8px; /* Optional: Adds rounded corners for aesthetics */
}
p {
  text-align: left;
  margin-bottom: 5px;
}

@media screen and (max-width: 380px) {
  .email {
    font-size: 13px;
  }
}

.inr-content {
  color: #22BBF0;
  font-weight: bold;
}

.shadow-effect {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 8px;
  border-radius: 5px;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.blink {
  animation: blink 0.5s infinite;
  background-color: #22BBF0;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  padding: 5px;
}

.editorialBox {
  /* border: 2px solid #EEEDE7; */
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 85%;
}
@media screen and (max-width: 1000px) {
  .left-side-container{
    display: none;
  }
  .right-side-container{
    display: none;
  }
}

.handelImageSize {
  width: auto;
}

@media (max-width: 540px) {
  .handelImageSize {
    width: 200px !important;
    height: auto;
    display: block;
    margin: auto;
  }
}
</style>