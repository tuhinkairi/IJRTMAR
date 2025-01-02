<template>
  <div>
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
      <div class="container" style="max-width: 1000px !important; margin: 0">
        <div class="row justify-content-between">
          <h3>Peer Review Policy:</h3>
          <div>
            <p>
              Reviewers are essential in academic international journal research
              publication. IJRTMR employs a double-blind peer review method,
              which means that the names of the reviewer(s) and author(s) are
              kept hidden from the reviewer(s) and vice versa throughout the
              review process. This implies that the name of the author(s) will
              not be revealed to the reviewer(s), and the author(s) will not be
              revealed to the reviewer (s). Peer review serves to validate
              research, create a technique for evaluating it, and expand
              networking opportunities within research communities. Despite its
              detractors, peer review remains the only generally recognized
              technique of study validation. All published articles will be
              subjected to a double-blind peer review procedure, which may take
              up to three weeks from the date of submission. We recommend that
              all authors refrain from submitting the same article to numerous
              journals. It would be ideal if you waited for the paper's review
              state.
            </p>
          </div>
          <div>
            <h6>
              IJRTMR is committed to prompt evaluation and publication of
              entirely accepted papers. To maintain a high-quality publication,
              all submissions undergo a rigorous review process. Characteristics
              of the peer review process are as follows:
            </h6>
            <div class="reviewList">
              <ul>
                <li>
                  <p>
                     Submission of the same paper to multiple publications
                    simultaneously is not permitted.
                  </p>
                </li>
                <li>
                  <p>
                     Manuscripts with material that is outside the purview will
                    not be reviewed.
                  </p>
                </li>
                <li>
                  <p>
                     International Journal Research Papers will be reviewed by
                    at least three or four specialists (reviewers) chosen by the
                    editorial staff, with one from India and the remainder from
                    elsewhere.
                  </p>
                </li>
                <li>
                  <p>
                     Additionally, Editors will be able to request extra
                    evaluations as required.
                  </p>
                </li>
                <li>
                  <p>
                     The authors will be notified when the Editors determine
                    that additional evaluation is needed. The journal's
                    Editors-in-Chief makes all publishing choices based on the
                    referees' reports (reviewer's report).
                  </p>
                </li>
                <li>
                  <p> The authors of rejected papers are quickly informed.</p>
                </li>
                <li>
                  <p>
                     All manuscripts received are handled as confidential
                    records.
                  </p>
                </li>
                <li>
                  <p>
                     Verify All papers submitted for publishing in IJRTMR
                    (International Journal of Recent Trends in Multidisciplinary
                    Research) for plagiarism using plagiarism tools. Manuscripts
                    discovered to be copied during the initial review phases are
                    outright refused and will not be considered for publishing
                    in the journal.
                  </p>
                </li>
                <li>
                  <p>
                     Suppose a manuscript is found to be plagiarized after
                    publication. In that case, the Editor-in-Chief will conduct
                    a preliminary investigation, possibly with the help of an
                    appropriate committee constituted for the purpose. If the
                    manuscript is found to be plagiarized beyond the acceptable
                    limits, the journal will contact the author's Institute /
                    College / University and Funding Agency, if any.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            IJRTMR Strictly Uses Following Double Blind Peer Review Process
          </h6>
          <div>
            <h5>Peer Review Process:</h5>
            <p>
              Submissions to the International Journal of Recent Trends in
              Multidisciplinary Research (IJRTMR) pass through a double-blind
              peer-review process. The criteria for publication in the
              International Journal of Recent Trends in Multidisciplinary
              Research (IJRTMR) are as follows:
            </p>
            <div class="reviewList">
              <ul>
                <li>
                  <p>
                     The paper reveals the findings of first-rate academic
                    research.
                  </p>
                </li>
                <li>
                  <p>
                     The stated findings have yet to be published elsewhere.
                  </p>
                </li>
                <li>
                  <p>
                     The study adheres to all applicable ethical and scientific
                    integrity requirements.
                  </p>
                </li>
                <li>
                  <p>
                     Experiments, statistics, and other analyses are carried
                    out to a high technical quality and are thoroughly reported.
                  </p>
                </li>
                <li>
                  <p>
                     The data is used to support the conclusions which are
                    presented correctly.
                  </p>
                </li>
                <li>
                  <p>
                     The paper is written in Standard English and presented
                    understandably. Once the manuscripts have passed quality
                    control, they are assigned to a member of the Editorial
                    Board (or an expert who is not a member) to conduct the
                    peer-review process and decide to accept, invite revision
                    of, or reject the article.
                  </p>
                </li>
              </ul>
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
h3,
h5,
h6 {
  font-family: "Rubik", sans-serif;
}
h6 {
  padding: 10px 0 10px 0;
}
h5 {
  padding-bottom: 10px;
  font-size: 18px;
}
h3 {
  padding-bottom: 20px;
  font-size: 24px;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
.reviewList {
  margin-left: -20px;
}
.reviewImage img {
  padding: 40px 80px 0 0;
  max-width: 107%;
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