import CampaignCard from "./CampaignCard";
import Section from "./Section";
import WorldCard from "./WorldCard";
import type { Campaign, World } from "../types";

type HomePageProps = {
  worlds: World[];
  campaigns: Campaign[];
};

// The main page of the app. It lists the worlds and the campaigns.
// TODO: Connect buttons to Tauri commands
function HomePage({ worlds, campaigns }: HomePageProps) {
  function handleOpenWorld(worldId: string) {
    console.log("Open the world:", worldId);
  }

  function handleOpenCampaign(campaignId: string) {
    console.log("Open the campaign:", campaignId);
  }

  function handleNewWorld() {
    console.log("Make a new world.");
  }

  function handleNewCampaign() {
    console.log("Make a new campaign.");
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">OpenWorld</h1>
      </header>

      <main className="app-main">
        <Section
          title="Worlds"
          actionLabel="New world"
          onAction={handleNewWorld}
          isEmpty={worlds.length === 0}
          emptyMessage="You have no worlds yet. Make your first world."
        >
          {worlds.map((world) => (
            <WorldCard key={world.id} world={world} onOpen={handleOpenWorld} />
          ))}
        </Section>

        <Section
          title="Campaigns"
          actionLabel="New campaign"
          onAction={handleNewCampaign}
          isEmpty={campaigns.length === 0}
          emptyMessage="You have no campaigns yet. Make your first campaign."
        >
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              onOpen={handleOpenCampaign}
            />
          ))}
        </Section>
      </main>
    </div>
  );
}

export default HomePage;
