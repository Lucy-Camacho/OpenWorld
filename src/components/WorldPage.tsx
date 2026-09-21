import PageHeader from "./PageHeader";
import type { World } from "../types";

type WorldPageProps = {
  world: World;
  onBack: () => void;
};

// Shows one world. The article list comes later from the storage layer.
function WorldPage({ world, onBack }: WorldPageProps) {
  const campaigns =
    world.campaignNames.length > 0
      ? world.campaignNames.join(", ")
      : "No campaigns";

  return (
    <div className="app">
      <PageHeader
        title={world.name}
        meta={`${world.articleCount} ${
          world.articleCount === 1 ? "article" : "articles"
        } · ${campaigns}`}
        onBack={onBack}
      />

      <main className="app-main">
        <p className="card-summary">{world.summary}</p>
        <p className="empty-message">
          The article list is not available yet.
        </p>
      </main>
    </div>
  );
}

export default WorldPage;
