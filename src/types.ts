// Placeholder types for the user interface.
// Replaced by the rust backend later

export type World = {
  id: string;
  name: string;
  summary: string;
  articleCount: number;
  campaignNames: string[];
};

export type Campaign = {
  id: string;
  name: string;
  summary: string;
  sessionCount: number;
  worldNames: string[];
};
