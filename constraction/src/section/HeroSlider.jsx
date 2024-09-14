import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Slider {...settings} className="w-full h-full">
        <div className="w-full h-full">
          <img
            src="https://wallpaperaccess.com/full/5216567.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="https://wallpapercave.com/wp/wp8414112.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="https://wallpapercave.com/wp/wp1842342.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 md:px-8">
        <div className="bg-black bg-opacity-50 p-4 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Unlock Your Business Potential
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8">
            Discover our comprehensive solutions designed to help you achieve
            your goals with maximum efficiency. Explore our services today!
          </p>
          <a
            href="#services"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
