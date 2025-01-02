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
          <h3>Publication Ethics Policy:</h3>
          <div>
            <p class="statement">
              (The comments that follow are founded on Elsevier guidelines as
              well as COPE's Best Practice Guidelines for Journal Editors.)
            </p>
            <p>
              We at IJRTMR strongly believe in following these guidelines to
              maintain the fair practice. We are committed to fair practice of
              international journal research publication. Success in this regard
              can be achieved if the following participants will practice
              ethics:
            </p>
            <h6>Journal publishing ethics rules:</h6>
            <p>
              The International Journal of Recent Trends in Multidisciplinary
              Research is committed to ensuring ethics in the publication and
              quality of articles. The International Journal Of Recent Trends In
              Multidisciplinary Research follows the Code of Conduct as defined
              by the Committee of Publication Ethics
              (COPE).https://publicationethics.org/files/u2/New_Code.pdf.
            </p>
            <p>
              These ethics include the editor following specific rules on
              relations with readers, authors, and reviewers and procedures for
              handling complaints. Conformance to standards of ethical behavior
              is therefore expected of all parties involved: Authors, Editors,
              Reviewers, and the Publisher. In particular,
            </p>
            <hr />
          </div>
          <div>
            <h5>Authors :</h5>
            <p>
              Authors should present an objective discussion of the significance
              of international journal research work as well as sufficient
              details and references.
            </p>
            <p>
              Authors should maintain accurate records of data associated with
              their submitted manuscript and supply or provide access to these
              data, on reasonable request. Authors guarantee that all data used
              in the article are real and authentic. Where appropriate and where
              allowed by employer, funding body and others who might have an
              interest, authors should deposit data in a suitable repository or
              storage location, for sharing and further use by others.
            </p>
            <p>
              Fraudulent or knowingly inaccurate statements constitute unethical
              behavior and are unacceptable.
            </p>
            <p>
              The authors should ensure that their work is entirely original,
              and if the work and/or words of others have been used, this fact
              has been appropriately acknowledged. Plagiarism in all its forms
              constitutes unethical publishing behavior and is unacceptable.
              Submitting the same manuscript to more than one journal
              concurrently constitutes unethical publishing behavior and is
              unacceptable. Authors should not submit articles describing
              essentially the same re-search to more than one international
              journal research paper.
            </p>
            <p>
              Authors should acknowledge the financial support and help/guidance
              of others if appropriate.
            </p>
            <p>Authors should provide the disclaimer if appropriate.</p>
            <p>
              All co-authors should significantly contribute to the research.
              The corresponding author should ensure that there is a full
              consensus of all co-authors in approving the final version of the
              paper and its submission for publication.
            </p>
            <p>
              Authors are obliged to participate in the peer review process.
            </p>
            <p>
              Authors should promptly notify the editor if a significant error
              in their international journal publication is identified, and
              cooperate with the editor to publish an erratum, addendum,
              corrigendum notice, or to retract the paper, where it is deemed
              necessary.
            </p>
          </div>
          <div>
            <h5>Editors:</h5>
            <p>
              Editors have complete responsibility and authority to
              accept/reject a manuscript.
            </p>
            <p>
              Editors should evaluate manuscripts exclusively on the basis of
              their academic merit. Editors act in a balanced, objective and
              fair way while carrying out their expected duties, without
              discrimination on grounds of gender, sexual orientation, religious
              or political beliefs, ethnic or geographical origin of the
              authors.
            </p>
            <p>Editors accept the paper when reasonably certain.</p>
            <p>
              Editors must not use unpublished information in the editor's own
              international journal research paper without the express written
              consent of the author.
            </p>
            <p>Editors preserve anonymity of reviewers.</p>
            <p>
              When errors are found, editors promote publication of correction
              or retraction.
            </p>
            <p>
              Editors should take reasonable responsive measures when ethical
              complaints have been presented concerning a submitted manuscript
              or published article.
            </p>
          </div>
          <div>
            <h5>Reviewers:</h5>
            <p>
              Any manuscripts received for review must be treated as
              confidential documents. Privileged information or ideas obtained
              through peer review must be kept confidential and not used for
              personal advantage.
            </p>
            <p>
              Reports should be conducted objectively, and observations should
              be formulated clearly with supporting arguments, so that authors
              can use them for improving the paper. Any relevant published work
              which is not yet cited should be pointed out.
            </p>
            <p>
              Any selected referee who feels unqualified to review the research
              reported in a manuscript or knows that its prompt review will be
              impossible should notify the editor and excuse himself from the
              review process.
            </p>
            <p>
              Reviewers should not consider manuscripts in which they have
              conflicts of interest resulting from competitive, collaborative,
              or other relationships or connections with any of the authors,
              companies, or institutions connected to the papers.
            </p>
          </div>
          <div>
            <h5>Publisher:</h5>
            <div class="publicationList">
              <ul>
                <li>
                  <p>Publisher monitors and safeguards publishing ethics.</p>
                </li>
                <li><p>Publisher communicates journal policies.</p></li>
                <li>
                  <p>Publisher respects privacy of all parties involved.</p>
                </li>
                <li><p>Publisher foster editorial independence.</p></li>
                <li>
                  <p>
                    Publisher maintains the integrity of the academic record.
                  </p>
                </li>
                <li>
                  <p>
                    Publisher protects intellectual property and copyrights.
                  </p>
                </li>
                <li>
                  <p>
                    Publisher publishes corrections, clarifications, and
                    retractions.
                  </p>
                </li>
                <li>
                  <p>
                    Publisher constantly improves the quality of the journal.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 200px; " class="right-side-container ml-2">
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

<style>
h3 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 10px;
  font-size: 24px;
}
h5 {
  font-family: "Rubik", sans-serif;
  padding: 10px 0 10px 0;
  font-size: 18px;
}
p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}
.statement {
  color: green;
  font-size: 14px;
}
.publicationList {
  margin-left: -20px;
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