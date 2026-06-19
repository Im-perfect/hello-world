export type Mistake = {
  id: number;
  original: string;
  corrected: string;
  explanation: string;
  tags: string[];
  revisitStatus: "Needs revisit" | "Scheduled" | "Improving";
};

export const weeklyProgress = [
  { day: "Mon", minutes: 30 },
  { day: "Tue", minutes: 25 },
  { day: "Wed", minutes: 30 },
  { day: "Thu", minutes: 20 },
  { day: "Fri", minutes: 0 },
];

export const vocabulary = [
  { dutch: "afronden", english: "to finish / complete" },
  { dutch: "nog wat extra tijd", english: "a little more time" },
  { dutch: "vandaag", english: "today" },
  { dutch: "verwachten", english: "to expect" },
];

export const mistakes: Mistake[] = [
  {
    id: 1,
    original: "Ik denk ik heb meer tijd nodig.",
    corrected: "Ik denk dat ik meer tijd nodig heb.",
    explanation:
      "After “ik denk”, Dutch usually uses “dat”. In the subordinate clause, the verb order changes.",
    tags: ["dat-zin", "word order"],
    revisitStatus: "Needs revisit",
  },
  {
    id: 2,
    original: "Morgen ik stuur de update.",
    corrected: "Morgen stuur ik de update.",
    explanation:
      "When a sentence starts with a time word, the finite verb usually comes directly after it.",
    tags: ["inversion", "word order"],
    revisitStatus: "Scheduled",
  },
  {
    id: 3,
    original: "Ik ben eens met jou.",
    corrected: "Ik ben het met je eens.",
    explanation:
      "The fixed expression is “het met iemand eens zijn”. In work contexts, “je” often sounds natural and friendly.",
    tags: ["fixed expression", "professional tone"],
    revisitStatus: "Improving",
  },
];

export const progressStats = [
  { label: "Practiced this week", value: "1h 45m" },
  { label: "Phrases learned", value: "18" },
  { label: "Speaking sessions", value: "Coming soon" },
  { label: "Needs revisit", value: "5 items" },
];
