import { useState } from "react";
import CampaignPage from "./components/CampaignPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import WorldPage from "./components/WorldPage";
import { homeView, type View } from "./navigation";
import { placeholderCampaigns, placeholderWorlds } from "./placeholderData";
import "./App.css";

// The root component. It keeps the current view and shows the correct page.
function App() {
  const [view, setView] = useState<View>(homeView);

  function showHome() {
    setView(homeView);
  }

  if (view.kind === "world") {
    const world = placeholderWorlds.find((item) => item.id === view.worldId);
    if (!world) {
      return (
        <NotFoundPage message="Could not find this world." onBack={showHome} />
      );
    }
    return <WorldPage world={world} onBack={showHome} />;
  }

  if (view.kind === "campaign") {
    const campaign = placeholderCampaigns.find(
      (item) => item.id === view.campaignId,
    );
    if (!campaign) {
      return (
        <NotFoundPage
          message="Could not find this campaign."
          onBack={showHome}
        />
      );
    }
    return <CampaignPage campaign={campaign} onBack={showHome} />;
  }

  return (
    <HomePage
      worlds={placeholderWorlds}
      campaigns={placeholderCampaigns}
      onOpenWorld={(worldId) => setView({ kind: "world", worldId })}
      onOpenCampaign={(campaignId) => setView({ kind: "campaign", campaignId })}
    />
  );
}

export default App;
