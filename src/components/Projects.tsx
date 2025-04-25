import Portfolio from "../assets/Portfolio.png";
import SpicyBites from "../assets/SpicyBites.png";

import ai_trip_photo from "../assets/ai_trip_photo.jpg";
import stackoverflow_image from "../assets/stackoverflow_image.jpg";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "Portfolio",
      desc: "Welcome to my portfolio, where creativity meets precision and passion drives results. Here, you'll find about me and curated selection of my work across various projects.",
      image: Portfolio,
      live: "#",
      github: "https://github.com/charanbuchannola?tab=repositories",
    },

    {
      title: "AITripRideIn ",
      desc: "AITripRideIn is a smart travel planner to create personalized trips, real-time chat support, and live route planning for a better travel experience.",
      image: ai_trip_photo,
      live: "#",
      github: "https://github.com/charanbuchannola/AI_Trip_Planner",
    },
    {
      title: "StackWave",
      desc: " Full-stack developer platform combining a StackOverflow-style Q&A forum with real-time code collaboration.",
      image: stackoverflow_image,
      live: "https://stackwave-project-frontend.onrender.com",
      github: "https://github.com/charanbuchannola/institute-website",
    },
    {
      title: "BuchannolaEats",
      desc: "Welcome to BuchannolaEats, where culinary excellence meets elegant ambiance in the heart of BuchannolaEats. Our restaurant offers a sophasticated dining experience.",
      image: SpicyBites,
      github:
        "https://github.com/charanbuchannola/BuchannolaEats_Project/tree/master",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            // @ts-ignore
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
