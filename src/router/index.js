import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../components/GeneralViews/NotFoundPage.vue";
import ArchivesComponent from "@/pages/ArchivesComponent.vue";
import Home1 from "@/pages/Home1.vue";
import Contact from "@/pages/Contact.vue";
import Ethics from "@/pages/EthicsAndPolicies.vue";
import Blogs from "@/pages/Blogs.vue";
import MissionAndScope from "@/pages/MissionAndScope.vue";
import EditorialBoard from "@/pages/EditorialBoard.vue";
import PeerReviewPolicy from "@/pages/PeerReviewPolicy.vue";
import PublicationEthicsPolicy from "@/pages/PublicationEthicsPolicy.vue";
import IndexingAndAbstacting from "@/pages/IndexingAndAbstracting.vue";
import FAQs from "@/pages/FAQs.vue";
import Topics from "@/pages/Topics.vue";
import CallForPapers from "@/pages/CallForPaper.vue";
import InstructionForAuthor from "@/pages/InstructionForAuthor.vue";
import ManuscriptSubmission from "@/pages/ManuscriptSubmission.vue";
import GuidanceForEms from "@/pages/GuidanceForEms.vue";
import ArticleProcessingCharges from "@/pages/ProcessingCharges.vue";
import ImpactFactorComponent from "@/pages/ImpactFactorComponent.vue";
import DownloadComponent from "@/pages/DownloadComponent.vue";
import CopyrightForm from "@/pages/CopyrightForm.vue";
import PaperStatus from "../pages/PaperStatus.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
  routes: [
    {
      component: Home1,
      path: "/",
      name: "Home1",
    },
    {
      component: ArchivesComponent,
      path: "/archives",
      name: "ArchivesComponent",
    },
    {
      path: "/archives/paperlist",
      name: "PaperList",
      component: ArchivesComponent,
    },
    {
      path: "/archives/paper-details",
      name: "PaperDetails",
      component: ArchivesComponent,
    },
    {
      component: Contact,
      path: "/contact-us",
      name: "Contact Us",
    },
    {
      component: Ethics,
      path: "/ethics",
      name: "Ethics",
    },
    {
      component: Blogs,
      path: "/blogs",
      name: "Blogs",
    },
    {
      component: MissionAndScope,
      path: "/aim-and-scope",
      name: "Mission And Scope",
    },
    {
      component: EditorialBoard,
      path: "/editorial-board",
      name: "Editorial Board",
    },
    {
      component: PeerReviewPolicy,
      path: "/peer-review-policy",
      name: "Peer Review Policy",
    },
    {
      component: PublicationEthicsPolicy,
      path: "/publication-ethics-policy",
      name: "Publication Ethics Policy",
    },
    {
      component: IndexingAndAbstacting,
      path: "/indexing-and-abstracting",
      name: "Indexing And Abstacting",
    },
    {
      component: FAQs,
      path: "/FAQs",
      name: "FAQs",
    },
    {
      component: Topics,
      path: "/topics",
      name: "Topics",
    },
    {
      component: CallForPapers,
      path: "/call-for-papers",
      name: "Call For rPapers",
    },
    {
      component: InstructionForAuthor,
      path: "/instruction-for-author",
      name: "Instruction For Author",
    },
    {
      component: ManuscriptSubmission,
      path: "/manuscript-submission",
      name: "Manuscript Submission",
    },
    {
      component: GuidanceForEms,
      path: "/guidance-for-ems",
      name: "GuidanceForEms",
    },
    {
      component: ArticleProcessingCharges,
      path: "/article-processing-charges",
      name: "Article Processing Charges",
    },
    {
      component: DownloadComponent,
      path: "/downloads",
      name: "DownloadComponent",
    },
    {
      component: ImpactFactorComponent,
      path: "/impact-Factor",
      name: "ImpactFactorComponent",
    },
    {
      component: CopyrightForm,
      path: "/copyright-form",
      name: "Copyright Form",
    },
    {
      component: PaperStatus,
      path: "/paper-status",
      name: "PaperStatus",
    },
    {
      component: NotFound,
      path: "/:catchAll(.*)",
      name: "NotFound",
    },
  ],
  mode: "history",
  linkExactActiveClass: "current-menu-item",
});

export default router;
