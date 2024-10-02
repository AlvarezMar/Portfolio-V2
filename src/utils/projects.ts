export interface Project {
  title: string;
  description: string;
  tecnologies: string[];
  imgUrl: string;
  repoUrl: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "YouDrive",
    description:
      "Collaborative application for managing vehicle rental information. This application allows users to post, modify vehicles, and manage rental processes.",
    tecnologies: ["NestJS", "Next.js", "Tailwind", "PostgreSQL", "TypeScript"],
    imgUrl:
      "https://res.cloudinary.com/dwhmcn88z/image/upload/v1724203034/youDrive_dw21hi.png",
    repoUrl: "https://github.com/maccari78/PM6-grupo3",
    url: "https://youdrive.vercel.app/",
  },
  {
    title: "Doña Diabla",
    description:
      "This restaurant project provides a platform for users to register, log in, schedule appointments, and delete them as needed.",
    tecnologies: ["React", "Redux", "JavaScript", "TypeScript", "Express"],
    imgUrl:
      "https://res.cloudinary.com/dwhmcn88z/image/upload/v1724203128/Do%C3%B1a_Diabla_v1_fkav1i.png",
    repoUrl: "https://github.com/AlvarezMar/Dona-Diabla",
    url: "",
  },
  {
    title: "Movloom",
    description:
      "This movie website allows user to explore movie information, add new movies through a form, and store information in a database.",
    tecnologies: ["JavaScript", "Express", "MongoDB", "Mongoose"],
    imgUrl:
      "https://res.cloudinary.com/dwhmcn88z/image/upload/v1724203131/MovLoom_v1_xwayle.png",
    repoUrl: "https://github.com/AlvarezMar/MovLoom",
    url: "",
  },
];
