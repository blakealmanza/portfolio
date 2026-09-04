import { BetterHaloCaseStudy } from "./case-studies/BetterHaloCaseStudy";
import { EmbeddedDashboardCaseStudy } from "./case-studies/EmbeddedDashboardCaseStudy";
import { GolfCaddieCaseStudy } from "./case-studies/GolfCaddieCaseStudy";
import { KimboLearningCaseStudy } from "./case-studies/KimboLearningCaseStudy";
import { WSBRICaseStudy } from "./case-studies/WSBRICaseStudy";

export function CaseStudyComposition({ slug }: { slug: string }) {
  switch (slug) {
    case "embedded-developer-workflow-dashboard": return <EmbeddedDashboardCaseStudy />;
    case "better-halo": return <BetterHaloCaseStudy />;
    case "wsbri": return <WSBRICaseStudy />;
    case "kimbo-learning": return <KimboLearningCaseStudy />;
    case "golf-caddie": return <GolfCaddieCaseStudy />;
    default: return null;
  }
}
