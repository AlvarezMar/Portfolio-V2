export interface Project {
  title: string;
  previewDescription: string;
  fullDescription: string[];
  tecnologies: string[];
  imgUrl: string;
  repoUrl: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "YouDrive",
    previewDescription:
      "Collaborative application for managing vehicle rental information. This application allows users to post, modify vehicles, and manage rental processes.",
    fullDescription: [
      "This collaborative project is a platform designed to manage vehicle rental information. It allows users to post, modify, and manage vehicle listings, as well as facilitate the rental process between customers and vehicle owners. I was part of the backend development team, focusing on database interactions and business logic using NestJS and PostgreSQL with TypeORM.",
      "In addition to backend responsibilities, I also worked on key features such as the real-time chat between clients and vehicle owners, Google authentication, and the integration of Leaflet for vehicle location tracking. The project also involved using Cloudinary for image storage, Stripe for payments, email notifications through a mailer system, and cron jobs for automating tasks. I provided additional support to the frontend team, which used Next.js and Tailwind for the user interface.",
    ],
    tecnologies: [
      "NestJS",
      "Next.js",
      "Tailwind",
      "PostgreSQL",
      "TypeScript",
      "Passport",
      "TypeORM",
      "Stripe",
      "Cloudinary",
      "Mailer",
      "Leaflet",
      "Vercel",
    ],
    imgUrl:
      "https://res.cloudinary.com/dwhmcn88z/image/upload/v1728411194/driveshot_lmkvau.png",
    repoUrl: "https://github.com/maccari78/PM6-grupo3",
    url: "https://youdrive.vercel.app/",
  },
  {
    title: "Doña Diabla",
    previewDescription:
      "This restaurant project provides a platform for users to register, log in, schedule appointments, and efficiently delete them whenever necessary.",
    fullDescription: [
      "This restaurant project is a dynamic platform where users can register, log in, schedule appointments, and manage (create, edit, and delete) their reservations as needed. It was built entirely by me, and the frontend uses React and Redux for a responsive and intuitive interface, while the backend leverages Express and PostgreSQL for data storage and management.",
      "I used TypeORM for seamless database interactions and TypeScript to ensure type safety across the project. Additionally, Nodemon maintained an efficient development workflow. My role covered the full development process, from designing the frontend components to handling the backend logic and database management.",
    ],
    tecnologies: [
      "React",
      "Redux",
      "JavaScript",
      "TypeScript",
      "PostgreSQL",
      "Express",
      "TypeORM",
      "Nodemon",
    ],
    imgUrl:
      "https://res.cloudinary.com/dwhmcn88z/image/upload/v1728411192/diablashot_dmvw2a.png",
    repoUrl: "https://github.com/AlvarezMar/Dona-Diabla",
    url: "",
  },
  {
    title: "Movloom",
    previewDescription:
      "This movie website allows user to explore movie information, add new movies through a form, and store all the information in a connected database for easy access.",
    fullDescription: [
      "This movie website is a full-stack application that allows users to explore detailed movie information, add new movies via a user-friendly form, and store all data securely in a MongoDB database. The project also includes a visually appealing gallery where users can browse through high-quality movie posters, which enhances the overall user experience.",
      "I developed the entire application using JavaScript, Express, MongoDB, and Mongoose on the backend. Webpack was used for bundling, and Nodemon helped streamline the development process. My role was to handle both the frontend and backend, ensuring smooth interaction between the user interface and the database.",
    ],
    tecnologies: [
      "JavaScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "Webpack",
      "Nodemon",
    ],
    imgUrl:
      "https://res.cloudinary.com/dwhmcn88z/image/upload/v1728411197/movshot_d6emh4.png",
    repoUrl: "https://github.com/AlvarezMar/MovLoom",
    url: "",
  },
];
