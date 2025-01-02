<template>
  <section class="speciality-area">
    <div style="display: flex;justify-content: space-around;">
      <div style="width: 200px;" class="left-side-container mr-2">
        <p class="blink mb-5">
          <a
            href="http://editorial.fdrpjournals.org/login?journal=3"
            style="color: #fff;"
            >Submit Research Paper</a
          >
        </p>
        <div class="shadow-effect mb-5">
          <h6>Downloads :</h6>
          <p
            style="cursor: pointer;"
            @click="
              getManuScript(
                'https://fdrpjournals.s3.ap-south-1.amazonaws.com/main/2/manuscripttemplate/IJRTMR-Manuscript-Template.docx'
              )
            "
          >
            Manuscript Template
          </p>
          <p
            style="cursor: pointer;"
            @click="
              getCopyRightForm(
                'https://fdrpjournals.s3.ap-south-1.amazonaws.com/main/2/copyrightform/IJRTMR_Registration+%26Copyright-Form.pdf'
              )
            "
          >
            Copyright Form
          </p>
        </div>
        <div class="shadow-effect mb-5">
          <img alt="image" src="../../../assets/Images/isn.jpg" height="90" width="200" />
        </div>
        <div class="shadow-effect mb-5">
          <img alt="image" src="../../../assets/Images/cc.jpg" height="90" width="180" />
          <p>
            All research Article published on this website are licensed under
            Creative Commons Attribution-ShareAlike 4.0 International License,
            and all rights belong to their respective authors/researchers.
          </p>
        </div>
        <div>
          <IndexingSideDesign />
        </div>
      </div>
      <div class="container" style="max-width: 1000px !important; margin: 0">
        <div class="row">
          <div class="row">
            <div class="col-lg-12 col-md-12 mt-2">
              <div
                class="archive-data-container"
                v-if="!listVisible && !paperPage"
              >
                <div class="" v-for="year in years" :key="year">
                  <h6>{{ year }}</h6>
                  <div
                    class="row"
                    v-for="(data, index) in archives[year]"
                    :key="data.index"
                  >
                    <div
                      class="col-lg-3 databox m-1 issueButton"
                      v-for="issue in data.slice().sort()"
                      :key="issue.index"
                      @click="viewIssueData(year, index, issue)"
                    >
                      <a
                        :href="
                          'archives/paperlist?year=' +
                            year +
                            '&volume=' +
                            index +
                            '&issue=' +
                            issue
                        "
                      >
                        <p>Volume {{ index }} Issue {{ issue }}</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PaperListComponent
              v-if="listVisible"
              :papersList="papersList"
              :cYear="cYear"
              :cVolume="cVolume"
              :cIssue="cIssue"
              :listVisible="listVisible"
              :paperPage="paperPage"
              @view-paper-details="handleViewPaperDetails"
            />
            <PaperDetailsComponent
              v-if="paperPage"
              :paperDetails="paperDetails"
              :paperPage="paperPage"
            />
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
          <p>
            CrossRef DOI is assigned to research Article published in our
            journal. IJIRE DOI prefix is10.59256/ijire
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
          <p>
            <a
              href="http://editorial.fdrpjournals.org/login?journal=3"
              style="color:rgb(100, 117, 137)"
              >Manuscript Submission</a
            >
          </p>
          <router-link to="guidance-for-ems">
            <p>Guidance For EMS</p>
          </router-link>
          <router-link to="article-processing-charges">
            <p>Article Processing Charges</p>
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
</template>

<script>
import PaperDetailsComponent from "./PaperDetailsContainer.vue";
import PaperListComponent from "./PaperListContainer.vue";
import IndexingSideDesign from "@/components/common/IndexingSideDesign.vue";

export default {
  components: {
    IndexingSideDesign,
    PaperDetailsComponent,
    PaperListComponent,
  },
  data: function() {
    return {
      archives: {},
      years: [],
      papersList: [],
      listVisible: false,
      paperPage: false,
      cYear: "",
      cVolume: "",
      cIssue: "",
      paperDetails: {},
    };
  },
  methods: {
    getArchivesData: function() {
      this.api.postData("archiveYearListing").then(
        (res) => {
          console.log(res.data);
          this.archives = res.data.archives;
          this.sortData();
        },
        (err) => {
          console.log(err);
        }
      );
    },
    getManuScript: function(getUrl) {
      window.open(getUrl, "_blank");
    },
    getCopyRightForm: function(getForm) {
      window.open(getForm, "_blank");
    },
    getPapersList(year, volume, issue, callback) {
      this.api
      .postDataModulePagination("archivePaperListing", { year, volume, issue })
        .then(
          (res) => {
            const papersList = res.data.papersList;
            callback(papersList);
          },
          (err) => {
            console.log(err);
          }
        );
    },
    handleViewPaperDetails(paperId) {
      // Fetch paper details and show details view
      this.getPaperDetails(paperId, (paperDetails) => {
        const paperTitle = paperDetails.paper_title;
        const formattedTitle = this.formatTitle(paperTitle); // Format the title for URL
        this.paperPage = true; // Show PaperDetailsComponent
        this.listVisible = false; // Hide PaperListComponent
        this.paperDetails = paperDetails;
        this.$router.push({
          path: "/archives/paper-details",
          query: { paperid: paperId, papertitle: formattedTitle },
        });
      });
    },
    getPaperDetails(paperid, callback) {
      this.api
            .postDataModulePagination(
           
              "archivePaper", { paperid }
            )
        .then(
          (res) => {
            const paperDetails = res.data.paperdetails;
            if (callback) {
              callback(paperDetails); // Pass paperDetails to the callback
            }
          },
          (err) => {
            console.log(err);
          }
        );
    },
    formatTitle(title) {
      return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
    },
    sortedIssues: function(val) {
      return val.sort().reverse();
    },
    sortData: function() {
      this.years = Object.keys(this.archives)
        .sort()
        .reverse();
    },
    viewIssueData(year, volume, issue) {
      this.getPapersList(year, volume, issue, (papersList) => {
        this.cYear = year;
        this.cVolume = volume;
        this.cIssue = issue;
        this.pageTitle = `Volume ${volume},Issue ${issue}`;
        this.papersList = papersList;
        this.listVisible = true;
        this.$router.push({
          path: "/archives/paperlist",
          query: { year: year, volume: volume, issue: issue },
        });
      });
    },
    ViewIssueData(year, volume, issue) {
      this.getPapersList(year, volume, issue, (papersList) => {
        this.cYear = year;
        this.cVolume = volume;
        this.cIssue = issue;
        //console.log("Before making the pageTitle");
        let pageTitle = `${this.cYear} | Volume ${this.cVolume} - Issue ${this.cIssue}`;
        this.$emit("update-title", pageTitle);
        this.papersList = papersList;
      });
    },
    viewPaperDetails(paperid) {
      this.getPaperDetails(paperid, (paperDetails) => {
        const paperTitle = paperDetails.paper_title;
        const formattedTitle = this.formatTitle(paperTitle); // Format the title for URL
        this.paperPage = true;
        this.$router.push({
          path: "/archives/paper-details",
          query: { paperid: paperid, papertitle: formattedTitle },
        });
      });
    },
    ViewPaperDetails(paperid) {
      this.getPaperDetails(paperid, (paperDetails) => {
        this.paperDetails = paperDetails;
      });
    },
    downloadPDF: function(paperURL) {
      window.open(paperURL, "_blank");
    },
    googleSearch(url) {
      window.open(url, "_blank");
    },
    updateDocumentTitle() {
      if (this.paperPage) {
        document.title = this.paperDetails.paper_title || "Default Paper Title";
      } else if (this.listVisible) {
        document.title = `${this.cYear} | Volume ${this.cVolume} - Issue ${this.cIssue}`;
      } else {
        document.title = "Archives";
      }
      let newTitle = document.title;

      this.$emit("update-title", newTitle); // see this line
    },
  },
  watch: {
    $route: function() {
      if (this.$route.path === "/archives/paperlist") {
        // Ensure that we're displaying the PaperListComponent
        if (
          "year" in this.$route.query &&
          "volume" in this.$route.query &&
          "issue" in this.$route.query
        ) {
          //console.log("In route watch");
          this.listVisible = true;
          this.paperPage = false;
          this.ViewIssueData(
            this.$route.query.year,
            this.$route.query.volume,
            this.$route.query.issue
          );
        }
      } else if (this.$route.path === "/archives/paper-details") {
        if ("paperid" in this.$route.query) {
          this.paperPage = true;
          this.listVisible = false;
          this.ViewPaperDetails(this.$route.query.paperid);
        }
      } else {
        // Reset values when navigating away from the list
        this.listVisible = false;
        this.paperPage = false;
        this.cYear = null;
        this.cVolume = null;
        this.cIssue = null;
        this.getArchivesData();
        this.updateDocumentTitle();
      }
      this.updateDocumentTitle();
    },
    "paperDetails.paper_title": function() {
      this.updateDocumentTitle(); // Update title when paperDetails.paper_title changes
    },
    cYear() {
      this.updateDocumentTitle(); // Update title when cYear changes
    },
    cVolume() {
      this.updateDocumentTitle(); // Update title when cVolume changes
    },
    cIssue() {
      this.updateDocumentTitle(); // Update title when cIssue changes
    },
  },
  mounted: function() {
    if ("paperid" in this.$route.query) {
      this.paperPage = true;
      this.ViewPaperDetails(this.$route.query.paperid);
    } else if (
      "year" in this.$route.query &&
      "volume" in this.$route.query &&
      "issue" in this.$route.query
    ) {
      console.log("In mount");
      this.listVisible = true;
      this.ViewIssueData(
        this.$route.query.year,
        this.$route.query.volume,
        this.$route.query.issue
      );
    } else {
      this.listVisible = false;
      this.paperPage = false;
      this.getArchivesData();
    }

    this.updateDocumentTitle(); // Initial title update
  },
};
</script>

<style scoped>
.rowSize {
  width: 97%;
}

.issueButton {
  cursor: pointer;
}

.box {
  background: #0000ff;
  border-radius: 8px;
}

.box p {
  color: #fff;

  text-align: center;
  padding: 6px;
}

.btn-outline-primary {
  color: #22bbf0;
  border-color: #22bbf0;
}

.btn-outline-primary:hover {
  color: #fff;
  border-color: #22bbf0;
  background: #22bbf0;
}

.databox {
  background-color: #22bbf0;
  border-radius: 5px;
  cursor: pointer;
}

.databox p {
  color: #fff;
  padding: 10px;
}

.paperBox {
  /* border: 2px solid #EEEDE7; */

  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.paperHeading {
  display: flex;
  justify-content: center;
}

p {
  margin-bottom: 5px;
  text-align: left;
}

h5 {
  margin-bottom: 5px;
  margin-top: 5px;
}

h6 {
  margin-bottom: 5px;
  margin-top: 5px;
}

.abstract-details {
  white-space: pre-wrap;
}

@media screen and (max-width: 991px) {
  .btn-sm {
    font-size: 12px !important;
  }
}

@media screen and (max-width: 512px) {
  .btn-sm {
    font-size: 10px !important;
  }
}

.inr-content {
  color: #22bbf0;
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
  background-color: #22bbf0;
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
