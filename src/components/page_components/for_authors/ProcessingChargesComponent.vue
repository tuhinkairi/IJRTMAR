<template>
  <div>
    <section class="speciality-area">
    <div style="display: flex;justify-content: space-around;">
      <div style="width: 200px;" class="left-side-container mr-2"
      >
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
      <div class="container" style="max-width: 1000px !important; margin: 0">
        <div class="row justify-content-between">
          <div class="container charges">
            <h3 class="pt-4">Article Processing Charges :</h3>
            <p>
              Open-access publication, so it is freely available online. The
              cost on publishing online editions, and to ensure the
              continuous appearance of the journal, the core committee has
              decided to charge a minimal fee from the authors after the
              acceptance of manuscript as follows;
            </p>
            <div>
              <h6>Case Report/Original Article/Review Article Fee:</h6>
            </div>
            <div class="pt-2">
              <h6>For Indian authors:</h6>
              <ul>
                <li>
                  <p>
                    <b>Without DOI : </b><b class="text-danger">1000 INR</b>
                    <span style="color: #22bbf0; font-weight: bold;"> + 18% GST</span>
                  </p>
                </li>
                <li>
                  <p>
                    <b>With DOI : </b><b class="text-danger">1200 INR</b>
                    <span style="color: #22bbf0; font-weight: bold;"> + 18% GST</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="pt-2">
              <h6>For other than Indian authors:</h6>
              <ul>
                <li>
                  <p>
                    <b>With DOI : </b><b class="text-danger">$ 50 USD</b>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <p>
                Authors of any country can convert USD to their respective
                currency using the google currency calculator.
              </p>
            </div>
            <div class="pt-2">
              <h6>Article-processing charges are required for</h6>
              <ul>
                <li>
                  <p>Journal Hosting System</p>
                </li>
                <li>
                  <p>Editorial management System</p>
                </li>
                <li>
                  <p>In-house copyediting and linguistic support</p>
                </li>
                <li>
                  <p>Pagination & typesetting</p>
                </li>
                <li>
                  <p>
                    Archiving, where appropriate, in an internationally
                    recognized, open access repositories.
                  </p>
                </li>
              </ul>
            </div>
            <div class="pt-2">
              <h6>Note:</h6>
              <p>
                1. After making payment the proof of payment should be
                produced.
              </p>
              <p>
                2. The manuscript fee is non-refundable, and if the author
                wishes to withdraw the manuscript after paying the charges,
                the fees, in that case, would not be refunded.
              </p>
              <p>
                3. Detailed information about how to transfer the manuscript
                fee will be sent on request.
              </p>
              <p>
                If you face any problems or difficulties please contact us
                for further guidance. Send us a copy of the receipt as proof
                of the transfer of the money. Once the required transaction
                is confirmed by our bank, we will intimate you promptly.
              </p>
            </div>
            <div class="pt-2">
              <h6>Waivers Policy</h6>
              <p>
                Publication of an article in the journal is not contingent
                upon the author's ability to pay the charges. Neither is
                acceptance to pay the handling fee a guarantee that the
                paper will be accepted for publication. Authors that may not
                be able to pay can request the editorial office to reduce
                the fee to an amount as per editorial office norms. We only
                accept payment of handling fee/processing charges after the
                manuscript has been accepted for publication.
              </p>
            </div>
            <div class="pt-2">
              <h6>Qualifying for a Waiver</h6>
              <p>
                To help support researchers in low-income economies
                according to World Bank, the Journal provides an automatic
                50% waiver of any Article Processing Charges for manuscripts
                where all authors listed affiliation is in one of these
                countries.
              </p>
              <p>
                Additionally, the Journal will provide a 50% reduction in
                any APCs when the author(s) of an article does not have the
                funding required to cover these charges and can provide one
                of the following to demonstrate this:
              </p>
              <p>
                Signed letter from author(s) suitable institutional
                representative, such as institutional Head of Department,
                with verifiable institutional email address confirming
                payment will be made from author’s personal funds (all
                authors must provide a letter to this effect)
              </p>
              <p>
                Signed letter from retired or independent author(s)
                indicating their lack of institutional association and
                confirming payment will be made from personal funds (all
                authors on paper must be retired or independent and confirm
                this)
              </p>
              <p>
                Signed letter from the author(s) institution(s) confirming
                budget constraints, indicating their funding body does not
                cover publication charges or indicating the institutional
                budgets are severely impacted. This must be signed by the
                Institutional Head of Department with verifiable
                institutional email address clearly stating the budget
                constraints (all authors must provide a letter to this
                effect)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 200px;" class="right-side-container ml-2"
      >
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
  methods:{
    getManuScript: function (getUrl) {
      window.open(getUrl, "_blank");
    },
    getCopyRightForm: function (getForm) {
      window.open(getForm, "_blank");
    },
  }
};
</script>

<style scoped>
h3 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 15px;
  font-size: 24px;
}

.chargesList {
  margin-left: -20px;
}

.chargesTable {
  padding-bottom: 20px;
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
</style>
