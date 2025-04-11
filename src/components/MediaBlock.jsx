import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MediaBlock = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-end gap-4 lg:gap-12 xl:gap-16 2xl:gap-20 px-2 py-20">
      {/* Logo */}
      <div className="w-32 md:w-48 flex-shrink-0 pr-8">
        <Link to="/">
          <img
            src="/images/logo2.png"
            alt="Hari Om Chemicals Logo"
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* Static Image */}
      <div className="w-[250px] md:w-[320px] h-[390px] rounded-xl overflow-hidden ">
        <img
          src="/images/Product1.png"
          alt="Cleaner Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Video Block */}
      <div className="relative w-[250px] md:w-[380px] h-[550px] rounded-xl overflow-hidden ">
        <img
          src="/images/Product1.png"
          alt="Video Thumbnail"
          className="w-full h-full object-cover"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition">
          <button className="text-white">
            <PlayCircle className="w-12 h-12 md:w-16 md:h-16" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaBlock;
