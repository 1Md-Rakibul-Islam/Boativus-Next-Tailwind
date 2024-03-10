import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Eye } from "@phosphor-icons/react";
import { galleryAll } from "@public/data/gallery";
import FadeUp from "@/motion/FadeUp";

const GalleryThree = () => {
  return (
    <section className="gallery section-py bg-white">
      <div className="container">
        <FadeUp className="text-center gap-mb-60">
          <h5 className="text-24 text-brown-B300 gap-mb-16">Our Gallery</h5>
          <h2 className="text-57 text-blue-B900 gap-mb-24">
            Boativus Nautical Gallery
          </h2>
          <p className="text-18 text-blue-B400 gap-mb-64">
            Lorem ipsum dolor sit amet consectetur. Vitae justo rhoncus ut sed
            pellentesque id. Nunc id eu ornare diam.
          </p>
        </FadeUp>
        <PhotoProvider>
          <div id="dynamic-size-photos" className="relative">
            {galleryAll?.map((item, idx) => (
              <FadeUp key={idx}>
                <PhotoView src={item?.image}>
                  <div className="image-popup-vertical-fit cursor-pointer hover-eye-link-card group relative overflow-hidden mb-2">
                    <img
                      className="w-full h-auto my-transition"
                      src={item?.image}
                      alt="img"
                    />
                    <span className="absolute group-hover:opacity-100 nline-flex opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center my-transition">
                      <Eye className="text-blue-B40 text-4xl" />
                    </span>
                  </div>
                </PhotoView>
              </FadeUp>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default GalleryThree;
