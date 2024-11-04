import Portfolio from "../assets/Portfolio.png";
import SpicyBites from "../assets/SpicyBites.png";
import Youtube from "../assets/Youtube.png";
import Webelite from "../assets/Webelite.png";
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
      title: "BuchannolaEats",
      desc: "Welcome to BuchannolaEats, where culinary excellence meets elegant ambiance in the heart of BuchannolaEats. Our restaurant offers a sophasticated dining experience.",
      image: SpicyBites,
      github:
        "https://github.com/charanbuchannola/BuchannolaEats_Project/tree/master",
    },
    {
      title: "YouTube Clone",
      desc: "A dynamic video-sharing platform designed for creators and viewers alike. Built with a user friendly interface.",
      image: Youtube,
      github: "https://github.com/charanbuchannola?tab=repositories",
    },
    {
      title: "Webelite builder",
      desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
      image: Webelite,
      live: "#",
      github: "https://github.com/charanbuchannola/institute-website",
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
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
