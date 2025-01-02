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
            <img src="../../../assets/Images/isn.jpg" height="90" width="200" />
          </div>
          <div class="shadow-effect mb-5">
            <img src="../../../assets/Images/cc.jpg" height="90" width="180" />
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
            <h3>Instruction For Authors :</h3>
            <div>
              <p>
                Below are the required criteria for any article to be considered
                for publication in the International Journal of Recent Trends in
                Multidisciplinary Research. Please attach to these criteria to
                avoid rejection of the article by the editorial team.
              </p>
              <p>The article should be in Microsoft Word format only.</p>
              <div class="instructionAuthor">
                <ul>
                  <li>
                    <p>
                      Articles should be written in single-column format, using
                      Times New Roman font, 11-point font size. Keep the layout of
                      the text as simple as possible.
                    </p>
                  </li>
                  <li>
                    <p>
                      Equations and formulas should be readable, preferably
                      written using equation editing software (E.g., Math Type).
                      Authors have to provide the fonts used for creating the
                      equations/procedures.
                    </p>
                  </li>
                  <li>
                    <p>
                      All figures provided are of high resolution, preferably 300
                      dpi
                    </p>
                  </li>
                  <li>
                    <p>References should be in Times New Roman.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>Manuscript Preparation Guidelines</h5>
              <p>
                Articles submitted to the International Journal of Recent Trends
                In Multidisciplinary Research should conform to the guidelines
                below. Please review the author checklist supplied at the end of
                this document before submitting. The following list outlines the
                subjects that will be covered chronologically in the article:
              </p>
              <div class="instructionAuthor">
                <ul>
                  <li>
                    <p>Title</p>
                  </li>
                  <li>
                    <p>Abstract</p>
                  </li>
                  <li>
                    <p>Keywords</p>
                  </li>
                  <li>
                    <p>Introduction</p>
                  </li>
                  <li>
                    <p>
                      Concept headings (include statistical methodology, if any)
                    </p>
                  </li>
                  <li>
                    <p>Discussion</p>
                  </li>
                  <li>
                    <p>Conclusion</p>
                  </li>
                  <li>
                    <p>Acknowledgements (If any)</p>
                  </li>
                  <li>
                    <p>References</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>Electronic Formats</h5>
              <p>
                Authors must send their articles in MS Word (.doc) format. In case
                of any difficulty with the manuscript submission process or
                concern about the suitability of your files, please get in touch
                with us at
                <i>editorinchief@ijrtmr.com</i>
              </p>
            </div>
            <div>
              <h5>Article Title</h5>
              <p>
                The title should be quick and applicable to the article's content.
                In the title, avoid using abbreviations. Titles should be given in
                title case, meaning all words are capitalized except for
                prepositions, articles, and conjunctions. Italics should be used
                for all plant names.
              </p>
            </div>
            <div>
              <h5>Author Names & Affiliations</h5>
              <p>
                Provide first names or initials (if used), middle names or
                initials (if used), and surnames for all authors. Affiliation
                details should include—department, university or organization,
                city, state, and country for all authors. One of the authors
                should be designated as the corresponding author with an asterisk
                (*) against their name. Should Provide Only the corresponding
                author's email address in the article. It is the corresponding
                author's responsibility to ensure that the author list and the
                summary of the author's contributions to the study are accurate
                and complete.
              </p>
            </div>
            <div>
              <h5>Abstract & Keywords</h5>
              <p>
                The abstract introduces the topic and should be 300 words long or
                less. It should describe the methodologies utilized without
                delving into methodological detail and summarize the most relevant
                findings. Please do not include any sources in the abstract; if
                feasible, avoid using acronyms.
              </p>
              <p>
                For indexing reasons, authors should give 4-6 keywords. Keywords
                should be capitalized and separated by a comma. Avoid using
                generic and plural phrases and several notions (for example,
                'and,' 'of').
              </p>
            </div>
            <div>
              <h5>Headings</h5>
              <p>
                The headers and subheadings, beginning with "1. Introduction," are
                written in both uppercase and lowercase characters, bolded, and
                flush left aligned. From the Introduction through the
                Acknowledgements, each heading is given a sequential number
                starting with 1, 2, 3, etc. The numbering for subheadings is 1.1,
                1.2, etc. To further separate a subsection, the numbers 1.1.1,
                1.1.2, etc.
              </p>
              <p>
                The font size for the heading is 11 points in boldface, and
                subsections with 10 points and not bold. Do not underline any of
                the headings or add dashes, colons, etc. (10)
              </p>
            </div>
            <div>
              <p>
                All abbreviations should be specified in the text when they are
                first used, along with the abbreviation in parentheses. Magnetic
                Resonance Imaging, for example (MRI).
              </p>
            </div>
            <div>
              <h5>Units and Symbols</h5>
              <p>
                Symbols should be used when referring to alpha, beta, mu, etc.
                (Ex: α, β, µ, etc.). All units follow the International System of
                Units (SI units).
              </p>
            </div>
            <div>
              <h5>Figures: General guidelines</h5>
              <p>
                <b>Format and resolution of the figures: </b>
                High-quality TIFF, JPG, or EPS files are required from the
                authors. Must Produce Figures with a minimum resolution of 300
                ppi.
              </p>
              <p><b>File size:</b>The file sizes should be at most 20 MB.</p>
              <p>
                <b>File naming:</b>Figure files should be named with the author's
                serial number and last name included. Figure 1 should be titled
                "Figure 1. Marley" if the author's name is Bob Marley.
              </p>
              <p>
                <b>Citation:</b>All figures must be cited in the text, and authors
                should indicate where they should be inserted.
              </p>
              <p>
                <b>Figure captions:</b>These must be included in the text and
                provided sequentially at the end of the article. The captions
                should be short, having 10-15 words in sentence case style. E.g.,
                Figure 1. Percentage of detection rate vs. the number of nodes.
              </p>
              <p>
                <b>Permissions:</b>Authors should obtain permission from authors
                for copyright figures and tables before submitting them to the
                International Journal of Science and Technology.
              </p>
              <p>
                All figures will be distributed under the Creative Commons
                Attribution License, which allows them to be openly used, spread,
                and expanded upon with proper attribution. Please only send
                previously copyrighted data if you can disseminate them under CCAL
                sanction from the copyright owners.
              </p>
            </div>
            <div>
              <h5>Tables: General guidelines</h5>
              <p>
                Should include tables in the text file at the end of the article.
              </p>
              <p>
                All tables should have a concise title and be written as Table 1
                with a period (.).
              </p>
              <p><b>Eg. </b>Table 1. Stimulation settings.</p>
              <p>
                Footnotes can be used to explain abbreviations. Should avoided
                Tables extending beyond 1 page.
              </p>
            </div>
            <div>
              <h5>Acknowledgments:</h5>
              <p>
                Individuals who were added to the work but did not satisfy the
                writing requirements should be recognized alongside their efforts
                in the Acknowledgements. Writers must guarantee that everyone
                mentioned in the Acknowledgements accepts to be recognized.
              </p>
            </div>
            <div>
              <h5>References</h5>
              <p>
                The reference list should only contain works that have been
                published or approved. It is appropriate to mention meetings,
                conference sessions, abstracts, or articles that were submitted
                but have yet to be accepted.
              </p>
              <p>
                <b>In-text citations:</b>References cited in the text should be in
                Times New Roman.
              </p>
              <p>
                <b>Reference List: </b>The books cited in your text should be
                listed here. Your text should contain it at the conclusion. It
                ought to be put in order numerically by citation. These are some
                examples.
              </p>
            </div>
            <div>
              <h5>Overview of the Production Process:</h5>
              <p>
                After the work is accepted, the document will be edited and
                checked for lacking materials or inconsistencies. The production
                team will contact the writers to seek the missing material in
                their manuscript. This is the last chance for writers to make
                changes to the content. When the changed files are complete, they
                will be typeset to produce the first proofs. Writers will receive
                the first copies of their work to resolve any issues. During the
                proofreading procedure, writers are not permitted to make any
                changes. They must collaborate with the presentation staff to
                ensure the international journal paper issue is published on time.
              </p>
            </div>
            <div>
              <h5>Author Checklist before Submission</h5>
              <p>
                Are you ready to submit your article? We recommend you check these
                items before uploading the article on our website. In case of any
                difficulty in submitting your article, please get in touch with us
                at
                <b><i>editorinchief@ijrtmr.com.</i></b>
              </p>
              <div class="instructionAuthor">
                <ul>
                  <li>
                    <p>The manuscript adheres to guidelines.</p>
                  </li>
                  <li>
                    <p>All author affiliations provided.</p>
                  </li>
                  <li>
                    <p>The corresponding author’s email address is provided.</p>
                  </li>
                  <li>
                    <p>
                      The document includes calls out for each figure and table.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 200px;" class="left-side-container mr-2"
        >
          <div class="mb-5">
            <router-link to="/editorial-board">
              <p class="blink">Join As A reviewer</p>
            </router-link>
          </div>
          <div class="shadow-effect mb-5">
            <img src="../../../assets/Images/tur.jpg" height="90" width="180" />
            <p>Plagiarism is checked by the leading plagiarism checker</p>
          </div>
          <div class="shadow-effect mb-5">
            <img src="../../../assets/Images/doi.jpg" height="90" width="180" />
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
  padding-bottom: 20px;
  font-size: 24px;
}

h5 {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
}

p {
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  color: rgb(100, 117, 137);
  text-align: justify;
  text-justify: inter-word;
}

.instructionAuthor {
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