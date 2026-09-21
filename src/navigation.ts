// The views of the app, and the data that each view needs.

export type View =
  | { kind: "home" }
  | { kind: "world"; worldId: string }
  | { kind: "campaign"; campaignId: string };

export const homeView: View = { kind: "home" };
