import Card from "../components/Card";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const topServices = [
  {
    image:
      "https://th.bing.com/th/id/R.4f5aef9cf258446d77cea91f636cae9a?rik=mzVnmCroA%2fD9PA&pid=ImgRaw&r=0",
    title: "Bridge Project: Connecting Futures",
    description:
      "The Bridge Project is an ambitious initiative aimed at developing state-of-the-art infrastructure to connect key areas, fostering economic and social growth. We are committed to innovative solutions that enhance mobility and efficiency, adhering to the highest standards of quality and safety. Join us in building a brighter future and creating new opportunities for communities.",
    link: "/service",
  },
  {
    image: "https://m.media-amazon.com/images/I/51HzDDUrdWL.jpg",
    title: "Tunnel Project: Shaping Tomorrow's Connectivity",
    description:
      "The Tunnel Project is a forward-thinking initiative focused on constructing advanced underground infrastructure to improve connectivity between key regions. This project aims to enhance transportation efficiency, reduce congestion, and support sustainable urban development. We are dedicated to delivering innovative and reliable solutions, ensuring safety and excellence throughout every phase. Join us in transforming urban landscapes and paving the way for future progress.",
    link: "/service",
  },
];

const allServices = [
  {
    image: "service5",
    title: "Service ",
    description: "Description   .",
    link: "/service",
  },
  {
    image: "service5",
    title: "Service ",
    description: "Description   .",
    link: "/service",
  },
  {
    image: "service5",
    title: "Service ",
    description: "Description   .",
    link: "/service",
  },
  {
    image: "service5",
    title: "Service ",
    description: "Description   .",
    link: "/service",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-20 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Our Top Services Section */}
        <section className="flex-1" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Our Top Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {topServices.map((service, index) => (
              <Card
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
                className="transform transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
              />
            ))}
          </div>
        </section>

        {/* Divider Line */}
        <motion.div
          className="hidden lg:block w-[1px] bg-gray-300 mx-4"
          initial={{ height: 0 }}
          animate={{ height: "calc(100vh - 120px)" }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        {/* Our Services Section */}
        <section className="flex-1" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {allServices.map((service, index) => (
              <Card
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
                className="transform transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
