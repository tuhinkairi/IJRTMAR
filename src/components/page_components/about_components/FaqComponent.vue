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
        <div class="justify-content-between">
          <h3>FREQUENTLY ASKED QUESTIONS :</h3>
          <div class="faqContainer">
            <p><b>Q-1: What is the ISSN of the journal? </b></p>
            <p>Ans : ISSN - 2583-0368</p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-2 : When it was started? | when first issue of the journal
                was published?
              </b>
            </p>
            <p>
              Ans : It was started in year 2021. IJRTMR is being published by
              5th Dimension Research Publication. First Issue: July-August 2021
            </p>
          </div>
          <div class="faqContainer">
            <p><b>Q-3 : Is it open access journal? </b></p>
            <p>Ans : Yes, it is an open access journal.</p>
          </div>
          <div class="faqContainer">
            <p><b>Q-4 : Is it peer reviewed journal? </b></p>
            <p>Ans : Yes, it is peer reviewed journal.</p>
          </div>
          <div class="faqContainer">
            <p><b>Q-5 : How much time you will take to resolve a query? </b></p>
            <p>Ans : It will be resolved within 24 hours.</p>
          </div>
          <div class="faqContainer">
            <p><b>Q-6 : What is the plagiarism policy? </b></p>
            <p>
              Ans : We do not accept papers that are having plagiarized
              contents. Good quality plagiarism software/ tool will be used to
              check similarity that would not be more than 30% including
              reference section. In the case of exclusion of references, it
              should be less than 5%.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-7 : Which software is referred for plagiarism/ similarity
                check?
              </b>
            </p>
            <p>Ans : Turnitin software/ithendicate/Plagiarism checker X</p>
          </div>
          <div class="faqContainer">
            <p><b>Q-8 : Can I send only abstract for review? </b></p>
            <p>
              Ans : No, you have to send full length paper for review process.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-9 : Is it compulsory to come for reading/presenting the paper
                in PPT?
              </b>
            </p>
            <p>
              Ans : No, there is no need to come here for reading/presenting
              your paper. Your paper is sufficient for all purposes. Send your
              paper for review process. Once your paper is accepted by the
              editorial board of committee of the journal, we will send you
              notification of your paper over the email along with further
              guidelines for the publication of your paper.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b>Q-10 : How much time will you take for review process? </b>
            </p>
            <p>
              Ans :It depends on reviewer response. It will take min 01 to 07
              days.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-11 : My paper has been published. Can make any changes now in
                the paper?
              </b>
            </p>
            <p>
              Ans : Author (s) can make rectification in the final paper but
              after the final submission to the journal, rectification is not
              possible.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-12 : What are the terms and conditions to withdraw my paper?
              </b>
            </p>
            <p>
              Ans : Terms and conditions are available in the ‘Ethics & Policy’
              page. Please check the journal website. If once the paper is
              published it is not possible to withdraw the paper.
            </p>
          </div>
          <div class="faqContainer">
            <p><b>Q-13 : Is any instructions/ Guidelines for authors? </b></p>
            <p>
              Ans :Yes, It is available in the ‘‘Ethics & Policy’ page. Please
              visit journal website.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b>Q-14 : What are the Terms & Conditions of the journal? </b>
            </p>
            <p>
              Ans : Please visit journal website. It is available in the
              ‘‘Ethics & Policy’ page
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b>Q-15 :Is any payment guideline available? </b>
            </p>
            <p>
              Ans : Journal does not take any kind of publication fee/acceptance
              fee/ review fee/handling fee/processing fee. It is free journal
            </p>
          </div>
          <div class="faqContainer">
            <p><b>Q-16 : Is any paper publication fee/ handling fee? </b></p>
            <p>
              Ans :No, it’s free, Journal does not take any kind of publication
              fee/acceptance fee/ review fee/handling fee/processing fee. It is
              free journal.
            </p>
          </div>
          <div class="faqContainer">
            <p>
              <b
                >Q-17 : My article has been published but there is some
                correction. What did I do? | My article has been published but I
                want some changes. Is it possible?
              </b>
            </p>
            <p>
              Ans : Author (s) can make rectification in the final paper but
              after the final submission to the journal, rectification is not
              possible.
            </p>
          </div>
          <div class="faqContainer">
            <p><b>Q-18 : Is the scam, fake, predatory, standalone? </b></p>
            <p>
              Ans : No, this journal is not a fake journal. It is 100% legal,
              registered and recognized journal. If you have proof of it then
              please write me. We will give verification and validation.
            </p>
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
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
h3 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 10px;
  font-size: 24px;
}
.faqContainer {
  padding-bottom: 10px;
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