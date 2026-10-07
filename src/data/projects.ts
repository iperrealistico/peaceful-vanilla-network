export type ProjectStatus = "live" | "coming-soon";
export type ProjectId = "club" | "hytale" | "chat" | "space" | "fortrust";

export interface OrbitProject {
  id: ProjectId;
  name: string;
  domainLabel: string;
  tagline?: string;
  destinationNote?: string;
  description: string;
  status: ProjectStatus;
  icon: string;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  initialAngle: number;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export const networkCore = {
  name: "Peaceful Vanilla Network",
  tagline: "Community, fun, privacy and connection.",
  icon: "assets/logos/peaceful-vanilla-network-icon-768.webp",
  description:
    "Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",
  principles: ["Community-first", "Fun-driven", "Privacy-aware", "Small business, not big corp"],
  proof: [
    { label: "Since", value: "2019" },
    { label: "Players", value: "110K+" },
    { label: "Backups", value: "28TB" },
    { label: "Projects", value: "5" }
  ]
} as const;

export const orbitProjects: OrbitProject[] = [
  {
    id: "club",
    name: "Peaceful Vanilla Club",
    domainLabel: "peacefulvanilla.club",
    description:
      "A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",
    status: "live",
    icon: "assets/logos/peaceful-vanilla-club-logo.png",
    color: "#ff9500",
    orbitRadius: 33,
    orbitSpeed: 0.00012,
    initialAngle: -2.72,
    primaryCta: {
      label: "Visit Club",
      href: "https://www.peacefulvanilla.club/"
    }
  },
  {
    id: "hytale",
    name: "Peaceful Vanilla Club: Hytale",
    domainLabel: "hytale.peacefulvanilla.club",
    description:
      "A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",
    status: "live",
    icon: "assets/logos/peaceful-vanilla-club-hytale-icon.jpg",
    color: "#ff7a00",
    orbitRadius: 46,
    orbitSpeed: 0.000082,
    initialAngle: -1.48,
    primaryCta: {
      label: "Visit Hytale",
      href: "https://hytale.peacefulvanilla.club/"
    }
  },
  {
    id: "chat",
    name: "Peaceful Vanilla Chat",
    domainLabel: "peacefulvanilla.chat",
    description:
      "A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",
    status: "coming-soon",
    icon: "assets/logos/peaceful-vanilla-chat-icon-256.png",
    color: "#507cbe",
    orbitRadius: 37,
    orbitSpeed: 0.000095,
    initialAngle: -0.42
  },
  {
    id: "space",
    name: "Peaceful Vanilla Space",
    domainLabel: "peacefulvanilla.space",
    description:
      "An upcoming social platform for profiles, community hubs, and social surfaces straight from the old web.",
    status: "coming-soon",
    icon: "assets/generated/peaceful-vanilla-space-icon.png",
    color: "#ffc26b",
    orbitRadius: 41,
    orbitSpeed: 0.000075,
    initialAngle: 2.38
  },
  {
    id: "fortrust",
    name: "Fortrust",
    domainLabel: "Fortrust by Peaceful Vanilla",
    description:
      "An independent Peaceful Vanilla experiment kept intentionally separate, so different ideas can be experimented freely without blurring the core network identity. A separate game? A server? Both? It's testing grounds.",
    status: "coming-soon",
    icon: "assets/fortrust/fortrust-icon.png",
    color: "#d0c0b8",
    orbitRadius: 29,
    orbitSpeed: 0.000105,
    initialAngle: 0.92
  }
];
