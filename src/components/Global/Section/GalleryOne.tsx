"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Eye } from "@phosphor-icons/react";
import gallery1 from "@public/media/images/gallery1.png";
import gallery2 from "@public/media/images/gallery2.png";
import gallery3 from "@public/media/images/gallery3.png";
import gallery4 from "@public/media/images/gallery4.png";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const GalleryOne = () => {
  return (
    <section className="section-py relative overflow-hidden bg-blue-B900">
      <div className="container relative z-[1]">
        <FadeUp className="text-center gap-mb-60">
          <h5 className="text-24 text-blue-B50 gap-mb-16">Our Gallery</h5>
          <h2 className="text-57 text-white gap-mb-24">
            Explore Our Yacht Rental Gallery
          </h2>
          <p className="text-18 text-blue-B70 gap-mb-64">
            Lorem ipsum dolor sit amet consectetur. Vitae justo rhoncus ut sed
            pellentesque id. Nunc id eu ornare diam.
          </p>
        </FadeUp>
        <FadeUp>
          <PhotoProvider>
            <div className="relative grid lg:grid-cols-12 md:grid-cols-2 my-gap-24 ">
              <div className="grid my-gap-24 lg:col-span-4 w-full">
                <PhotoView src={gallery1.src}>
                  <div className="image-popup-vertical-fit cursor-pointer hover-eye-link-card group relative overflow-hidden h-full">
                    <Image
                      className="w-full h-full my-transition"
                      src={gallery1}
                      alt="img"
                    />
                    <span className="absolute group-hover:opacity-100 nline-flex opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center my-transition">
                      <Eye className="text-blue-B40 text-4xl" />
                    </span>
                  </div>
                </PhotoView>
                <PhotoView src={gallery2.src}>
                  <div className="image-popup-vertical-fit cursor-pointer hover-eye-link-card group relative overflow-hidden h-full">
                    <Image
                      className="w-full h-full my-transition"
                      src={gallery2}
                      alt="img"
                    />
                    <span className="absolute group-hover:opacity-100 nline-flex opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center my-transition">
                      <Eye className="text-blue-B40 text-4xl" />
                    </span>
                  </div>
                </PhotoView>
              </div>

              <div className="lg:col-span-3 w-full">
                <PhotoView src={gallery3.src}>
                  <div className="image-popup-vertical-fit cursor-pointer hover-eye-link-card group relative overflow-hidden h-full">
                    <Image
                      className="w-full h-full my-transition"
                      src={gallery3}
                      alt="img"
                    />
                    <span className="absolute group-hover:opacity-100 nline-flex opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center my-transition">
                      <Eye className="text-blue-B40 text-4xl" />
                    </span>
                  </div>
                </PhotoView>
              </div>
              <div className="lg:col-span-5 w-full">
                <PhotoView src={gallery4.src}>
                  <div className="image-popup-vertical-fit cursor-pointer hover-eye-link-card group relative overflow-hidden h-full">
                    <Image
                      className="w-full h-full my-transition"
                      src={gallery4}
                      alt="img"
                    />
                    <span className="absolute group-hover:opacity-100 nline-flex opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center my-transition">
                      <Eye className="text-blue-B40 text-4xl" />
                    </span>
                  </div>
                </PhotoView>
              </div>
            </div>
          </PhotoProvider>
        </FadeUp>
      </div>
      <Image
        draggable="false"
        className="xxl:w-[400px] xxl:h-[400px] md:w-[300px] md:h-[300px] md:block hidden absolute left-0 top-[7%] animate-spin-slow"
        src="/media/icons/gallery-star-cercel.png"
        alt="img"
      />
      <Image
        draggable="false"
        className="xxl:w-[400px] xxl:h-[400px] md:w-[300px] md:h-[300px] md:block hidden absolute -right-[9%] -top-44 animate-spin-slow"
        src="/media/icons/gallery-star-cercel.png"
        alt="img"
      />
    </section>
  );
};

export default GalleryOne;
