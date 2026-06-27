export interface CollageFrame {
  src: string;
  alt: string;
  /** "tall" = cols 2 & 4 top row; "square" = everything else */
  variant: "tall" | "square";
}

export interface CollageColumn {
  /** Columns 1, 3, 5 sit lower; 2 and 4 sit higher */
  stagger: "high" | "low";
  frames: [CollageFrame, CollageFrame];
}

/**
 * 10-frame collage — Figma layout:
 * Row 1: frame6 | frame1 | frame3 | frame4 | frame7
 * Row 2: frame7* | frame2 | frame8* | frame5 | frame6*
 */
export const aboutCollageColumns: CollageColumn[] = [
  {
    stagger: "low",
    frames: [
      {
        src: "/images/frame6.png",
        alt: "Woman reviewing purchases on her phone",
        variant: "square",
      },
      {
        src: "/images/frame7.png",
        alt: "Professional working on a tablet",
        variant: "square",
      },
    ],
  },
  {
    stagger: "high",
    frames: [
      {
        src: "/images/frame1.png",
        alt: "Person shopping with fresh produce",
        variant: "tall",
      },
      {
        src: "/images/frame2.png",
        alt: "Man reviewing finances on his phone",
        variant: "square",
      },
    ],
  },
  {
    stagger: "low",
    frames: [
      {
        src: "/images/frame3.png",
        alt: "Person managing payments on a tablet",
        variant: "square",
      },
      {
        src: "/images/frame8.png",
        alt: "Person shopping with fresh produce",
        variant: "square",
      },
    ],
  },
  {
    stagger: "high",
    frames: [
      {
        src: "/images/frame4.png",
        alt: "Colleagues collaborating at a laptop",
        variant: "tall",
      },
      {
        src: "/images/frame5.png",
        alt: "Happy clients reviewing investments",
        variant: "square",
      },
    ],
  },
  {
    stagger: "low",
    frames: [
      {
        src: "/images/frame7.png",
        alt: "Professional working on a tablet",
        variant: "square",
      },
      {
        src: "/images/frame6.png",
        alt: "Woman reviewing purchases on her phone",
        variant: "square",
      },
    ],
  },
];

const teamPhotos = [
  "/images/team1.png",
  "/images/team2.png",
  "/images/team3.png",
];

export interface TeamMember {
  name: string;
  role: string;
}

export const teamMembers: TeamMember[] = [
  { name: "John Doe", role: "CEO & Product Lead" },
  { name: "Doe Johnson", role: "CTO & Engineering Lead" },
  { name: "Jonny Doe", role: "Head of Operations & Compliance" },
  { name: "Jonathon Doe", role: "VP Tech" },
  { name: "Jonathon Doe", role: "VP Tech" },
  { name: "Jonathon Doe", role: "VP Tech" },
  { name: "Jonny Doe", role: "Head of Operations & Compliance" },
  { name: "Jonny Doe", role: "Head of Operations & Compliance" },
];

export function getTeamPhoto(index: number) {
  return teamPhotos[index % teamPhotos.length];
}
