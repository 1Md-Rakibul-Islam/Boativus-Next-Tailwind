import { yachtType } from "@/config/types";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import {
  Coins,
  CompassTool,
  Diamond,
  HeartStraight,
  Star,
  StarHalf,
  User,
} from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import BookingForm from "./BookingForm";

const YachtDetails = ({ yacht }: { yacht: yachtType }) => {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 my-gap-24 gap-mb-64">
          <div className="md:col-span-7">
            <div className="overflow-hidden sm:rounded-3xl rounded-2xl relative group">
              <Image
                className="w-full md:h-[550px] h-auto object-cover hover:scale-110 my-transition sm:rounded-3xl rounded-2xl"
                src={yacht?.image[0]}
                alt=""
              />
              <span className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 my-transition top-6 right-6 bg-white text-blue-B900 hover:text-red-600 rounded-full w-10 h-10 flex-center group">
                <HeartStraight className="text-base" />
              </span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="grid my-gap-24">
              <div className="overflow-hidden sm:rounded-3xl rounded-2xl relative group">
                <Image
                  className="w-full md:h-[260px] h-auto object-cover hover:scale-110 my-transition sm:rounded-3xl rounded-2xl"
                  src={yacht?.image[1]}
                  alt=""
                />
                <span className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 my-transition top-6 right-6 bg-white text-blue-B900 hover:text-red-600 rounded-full w-10 h-10 flex-center group">
                  <HeartStraight className="text-base" />
                </span>
              </div>
              <div className="overflow-hidden sm:rounded-3xl rounded-2xl relative group">
                <Image
                  className="w-full md:h-[260px] h-auto object-cover hover:scale-110 my-transition sm:rounded-3xl rounded-2xl"
                  src={yacht?.image[2]}
                  alt=""
                />
                <span className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 my-transition top-6 right-6 bg-white text-blue-B900 hover:text-red-600 rounded-full w-10 h-10 flex-center group">
                  <HeartStraight className="text-base" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:my-gap-24 gap-y-10">
          <div className="lg:col-span-7">
            <FadeUp className="bg-[#F9F8FA] p-24px">
              <h2 className="text-57 text-blue-B900 gap-mb-24">
                {yacht?.title}
              </h2>
              <div className="flex-centerY justify-between gap-3 flex-wrap gap-mb-40">
                <h4 className="text-32 text-blue-B900">
                  <span>$</span>
                  {yacht?.price}
                </h4>
                <div className="flex-centerY my-gap-24">
                  <span className="text-18 text-blue-B300">
                    {yacht?.rating} Reviews
                  </span>
                  <div className="flex-centerY sm:gap-2 gap-1.5">
                    {Array.from({ length: yacht?.rating || 0 })?.map(
                      (_, idx) => (
                        <Star
                          weight="fill"
                          key={idx}
                          className="text-warning-2 icon-24"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
              <h5 className="text-24 text-blue-B900 gap-mb-16">Description:</h5>
              <ul className="pl-5 list-disc grid my-gap-32 gap-mb-40 text-blue-B700 text-18">
                <li>
                  Vestibulum at nibh tortor. Phasellus egestas magna sed
                  lobortis sollicitudin. Aenean iaculis consequat urna quis
                  placerat.
                </li>
                <li>
                  Maecenas efficitur, nulla nec sagittis congue, nunc orci
                  ultricies lacus, eget faucibus risus justo eget nibh.
                  Vestibulum non sapien laoreet, luctus ante quis, lacinia
                  lacus.
                </li>
                <li>
                  Quisque convallis vitae orci eget faucibus. Quisque finibus
                  sed odio eu cursus. Maecenas porta urna ac sollicitudin
                  venenatis. Ut egestas at sem eget accumsan. Proin magna est,
                  ultrices sed dapibus ac.
                </li>
              </ul>
              <div className="grid divide-y divide-blue-B40">
                <div className="flex-centerY justify-between gap-2 text-blue-B900 pb-4">
                  <div className="flex-centerY gap-2 text-blue-B900">
                    <User className="text-base" />
                    <span className="text-18">Guests:</span>
                  </div>
                  <span className="text-18">{yacht?.guests}</span>
                </div>
                <div className="flex-centerY justify-between gap-2 text-blue-B900 py-4">
                  <div className="flex-centerY gap-2 text-blue-B900">
                    <StarHalf className="text-base" />
                    <span className="text-18">Rating:</span>
                  </div>
                  <span className="text-18">{yacht?.rating}</span>
                </div>
                <div className="flex-centerY justify-between gap-2 text-blue-B900 py-4">
                  <div className="flex-centerY gap-2 text-blue-B900">
                    <CompassTool className="text-base" />
                    <span className="text-18">Lenght:</span>
                  </div>
                  <span className="text-18">{yacht?.length} ft</span>
                </div>
                <div className="flex-centerY justify-between gap-2 text-blue-B900 py-4">
                  <div className="flex-centerY gap-2 text-blue-B900">
                    <Diamond className="text-base" />
                    <span className="text-18">Cabin:</span>
                  </div>
                  <span className="text-18">{yacht?.cabin}</span>
                </div>
                <div className="flex-centerY justify-between gap-2 text-blue-B900 py-4">
                  <div className="flex-centerY gap-2 text-blue-B900">
                    <Coins className="text-base" />
                    <span className="text-18">Price:</span>
                  </div>
                  <span className="text-18">
                    From <span>${yacht?.price}</span> / Hour
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
          <div className="lg:col-span-5">
            <FadeDown className="bg-[#F9F8FA] p-24px">
              <h4 className="text-center text-32 text-blue-B900 gap-mb-16">
                Make a Booking
              </h4>
              <p className="text-center text-18 text-blue-B300 gap-mb-32">
                Kindly Give Us A Call To Make Sure
              </p>

              <BookingForm />
            </FadeDown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtDetails;
