import PageHeader from "./PageHeader";
import type { Campaign } from "../types";

type CampaignPageProps = {
  campaign: Campaign;
  onBack: () => void;
};

// Shows one campaign. The session list comes later from the storage layer.
function CampaignPage({ campaign, onBack }: CampaignPageProps) {
  const worlds =
    campaign.worldNames.length > 0
      ? campaign.worldNames.join(", ")
      : "No worlds";

  return (
    <div className="app">
      <PageHeader
        title={campaign.name}
        meta={`${campaign.sessionCount} ${
          campaign.sessionCount === 1 ? "session" : "sessions"
        } · ${worlds}`}
        onBack={onBack}
      />

      <main className="app-main">
        <p className="card-summary">{campaign.summary}</p>
        <p className="empty-message">
          The session list is not available yet.
        </p>
      </main>
    </div>
  );
}

export default CampaignPage;
