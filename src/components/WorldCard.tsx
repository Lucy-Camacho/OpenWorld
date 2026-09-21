import type { World } from "../types";

type WorldCardProps = {
  world: World;
  onOpen: (worldId: string) => void;
};

// Shows one world as a card.
function WorldCard({ world, onOpen }: WorldCardProps) {
  return (
    <button className="card" type="button" onClick={() => onOpen(world.id)}>
      <h3 className="card-title">{world.name}</h3>
      <p className="card-summary">{world.summary}</p>
      <p className="card-meta">
        {world.articleCount} {world.articleCount === 1 ? "article" : "articles"}
      </p>
    </button>
  );
}

export default WorldCard;
