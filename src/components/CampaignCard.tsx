import type { Campaign } from "../types";

type CampaignCardProps = {
  campaign: Campaign;
  onOpen: (campaignId: string) => void;
};

// Shows one campaign as a card.
function CampaignCard({ campaign, onOpen }: CampaignCardProps) {
  return (
    <button className="card" type="button" onClick={() => onOpen(campaign.id)}>
      <h3 className="card-title">{campaign.name}</h3>
      <p className="card-summary">{campaign.summary}</p>
      <p className="card-meta">
        {campaign.sessionCount}{" "}
        {campaign.sessionCount === 1 ? "session" : "sessions"}
        {" · "}
        {campaign.worldNames.join(", ")}
      </p>
    </button>
  );
}

export default CampaignCard;
