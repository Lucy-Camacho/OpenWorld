import type { Campaign, World } from "./types";

// Example data for the placeholder main page.
// Replace this data with Tauri IPC calls to the storage layer.

export const placeholderWorlds: World[] = [
  {
    id: "a1b2c3",
    name: "Exaltia",
    summary: "A high fantasy world where the gods meddle in mortal affairs.",
    articleCount: 42,
    campaignNames: ["Dawn of Chaos"]
  },
  {
    id: "d4e5f6",
    name: "Faerun",
    summary: "You know this one.",
    articleCount: 7,
    campaignNames: ["Reverence of the Divine, Neverwinter Guardforce"]
  },
  {
    id: "g7h8i9",
    name: "Vell",
    summary: "A blank canvas.",
    articleCount: 0,
    campaignNames: []
  },
];

export const placeholderCampaigns: Campaign[] = [
  {
    id: "c1a2m3",
    name: "Dawn of Chaos",
    summary: "Four heroes must prevent the weave from disappearing",
    sessionCount: 3,
    worldNames: ["Exaltia"],
  },
  {
    id: "c4a5m6",
    name: "Neverwinter Guardforce",
    summary: "A ragtag group of misfits enroll in the Neverwinter Greycloaks",
    sessionCount: 11,
    worldNames: ["Faerun"],
  },
  {
    id: "f3d5c2",
    name: "Reverence of the Divine",
    summary: "Four strangers whose fates intertwines must face the gods",
    sessionCount: 11,
    worldNames: ["Faerun"],
  },
];
