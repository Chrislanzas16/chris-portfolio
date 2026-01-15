export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Netflix Clone",
    description:
      "A Netflix-style streaming app built with React, Vite, and Firebase. Features user authentication, movie browsing UI, dynamic content rendering using TMDB API, responsive design, and protected routes. Built to practice real-world app structure.",
    tags: ["React", "Firebase", "Tailwind"],
    link: "https://chris-movie-app.vercel.app/",
    image: "/NetflixClone.png",
    github: "https://github.com/Chrislanzas16/Netflix-Clone.git",
  },
  {
    title: "Ultraverse",
    description:
      "This internship consisted of converting a static website into a dynamic application using various Node.js libraries such as Axios, Owl Carousel, and Animate on Scroll. Maintained version control with repository branches and pull requests on GitHub.",
    tags: ["React", "JavaScript", "Node.js", "Git"],
    link: "https://chris-internship.vercel.app/",
    image: "/Ultraverse.png",
    github: "https://github.com/Chrislanzas16/chris-internship.git",
  },
  {
    title: "Summarist",
    description:
      "Subscription-based book streaming platform built with Next.js, Firebase, and Stripe. Features secure authentication, responsive UI, and an integrated audio player for listening to books in the browser.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "https://virtual-internship-v2-zeta.vercel.app/",
    image: "/Summarist.png",
    github: "https://github.com/Chrislanzas16/Virtual-Internship-v2.git",
  },
  {
    title: "Live Crypto Tracker",
    description:
      "A real-time cryptocurrency tracking dashboard that pulls live market data from a public API. Users can view price changes, market trends, and key stats with a responsive, modern UI.",
    tags: ["React", "API", "TypeScript", "Real-Time Data"],
    link: "https://crypto-project-psi-blue.vercel.app/",
    image: "/CryptoTracker.png",
    github: "https://github.com/Chrislanzas16/crypto-project",
  },
];
