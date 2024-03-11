import { blogType } from "@/config/types";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitchLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const BlogDescriptions = ({ blog }: { blog: blogType }) => {
  return (
    <div>
      <h2 className="text-57 text-blue-B900 gap-mb-24">{blog?.title}</h2>
      <div className="flex-centerY gap-4 divide-x divide-white text-16 text-white gap-mb-24">
        <span className="pl-4">{blog?.publish}</span>
        <span className="pl-4">{blog?.views} min read</span>
        <span className="pl-4">3 Comments</span>
      </div>
      <p className="text-18 text-blue-B300 gap-mb-40">
        Cras convallis dui nibh, at convallis massa auctor dignissim. Integer
        eget velit efficitur, tincidunt erat eu, lobortis lectus. Maecenas
        scelerisque interdum tempor. Sed auctor arcu in lacus egestas dignissim.
        Cras vestibulum eleifend purus non convallis.
      </p>
      <div className="overflow-hidden rounded-20 gap-mb-64">
        <Image
          className="w-full max-h-[416px] h-auto object-cover hover:scale-110 my-transition rounded-20"
          src={blog?.image}
          alt=""
        />
      </div>
      <h2 className="text-43 text-blue-B900 gap-mb-32">
        What is the Price of Chartering a Luxury Yacht?
      </h2>
      <p className="text-18 text-blue-B300 gap-mb-32">
        Pellentesque at massa sed nisi pharetra accumsan quis nec quam. Proin
        nec ultricies nibh. Aliquam suscipit et dolor et egestas. Donec blandit
        laoreet risus sit amet tristique. Vestibulum ut metus tortor. Aliquam at
        vulputate purus. Phasellus efficitur in tortor at blandit. Lorem ipsum
        dolor sit amet, consectetur adipiscing eli
      </p>
      <ul className="list-disc grid sm:gap-4 gap-3 pl-4 text-18 text-blue-B300 gap-mb-64">
        <li>Pellentesque at massa sed nisi pharetra accumsan quis nec quam.</li>
        <li>Proin nec ultricies nibh. Aliquam suscipit et dolor et egestas.</li>
        <li>Donec blandit laoreet risus sit amet tristique. </li>
        <li>Vestibulum ut metus tortor. Aliquam at vulputate purus.</li>
        <li>Phasellus efficitur in tortor at blandit. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
      <h2 className="text-43 text-blue-B900 gap-mb-32">
        What presents the biggest obstacle to a yacht sailor?
      </h2>
      <p className="text-18 text-blue-B300 gap-mb-32">
        Vestibulum ut metus tortor. Aliquam at vulputate purus. Phasellus
        efficitur in tortor at blandit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <ul className="list-disc grid sm:gap-4 gap-3 pl-4 text-18 text-blue-B300 gap-mb-40">
        <li>Proin nec ultricies nibh. Aliquam suscipit et dolor et egestas.</li>
        <li>Donec blandit laoreet risus sit amet tristique. </li>
        <li>Vestibulum ut metus tortor. Aliquam at vulputate purus.</li>
        <li>Phasellus efficitur in tortor at blandit. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
      <div className="overflow-hidden rounded-20 gap-mb-64">
        <Image
          width={856}
          height={416}
          className="w-full h-auto object-cover hover:scale-110 my-transition rounded-20"
          src="/media/images/blog-feachers-img2.png"
          alt=""
        />
      </div>
      <h2 className="text-43 text-blue-B900 gap-mb-32">
        Business Customer Proactivity
      </h2>
      <p className="text-18 text-blue-B300 gap-mb-32">
        Nam mi erat, placerat at varius at, convallis eget ipsum. Duis dictum
        ipsum ac ligula cursus, vitae facilisis nibh gravida. Maecenas arcu leo,
        luctus eget sapien in, feugiat aliquam orci. Quisque condimentum
        pellentesque erat, quis viverra mi. Nam hendrerit, lectus sodales
        vestibulum .
      </p>
      <p className="text-18 text-blue-B300 gap-mb-64">
        Nam mi erat, placerat at varius at, convallis eget ipsum. Duis dictum
        ipsum ac ligula cursus, vitae facilisis nibh gravida. Maecenas arcu leo,
        luctus eget sapien in, feugiat aliquam orci. Quisque condimentum
        pellentesque erat, quis viverra mi. Nam hendrerit, lectus sodales
        vestibulum .
      </p>
      <div className="flex items-center xl:flex-row flex-col my-gap-32 rounded-20 p-32px shadow-[0px_4px_20px_0px_rgba(74,73,79,0.20)] xl:text-left text-center gap-mb-64">
        <Image
          width={40}
          height={40}
          className="rounded-full"
          src="/media/images/user8.png"
          alt=""
        />
        <div>
          <div className="w-full flex xl:flex-row flex-col xl:justify-start items-center my-gap-24 gap-mb-24">
            <div>
              <h4 className="text-24 text-blue-B900 mb-2.5">Skylar Calzoni</h4>
              <span className="text-16 text-blue-B300">President & CEO</span>
            </div>
            <div className="flex-centerY my-gap-24">
              <a
                href="#"
                className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <FacebookLogo
                  weight="fill"
                  className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B900 my-transition"
                />
              </a>
              <a
                href="#"
                className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <LinkedinLogo
                  weight="fill"
                  className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B900 my-transition"
                />
              </a>

              <a
                href="#"
                className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <TwitchLogo
                  weight="fill"
                  className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B900 my-transition"
                />
              </a>

              <a
                href="#"
                className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <InstagramLogo
                  weight="fill"
                  className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B900 my-transition"
                />
              </a>
            </div>
          </div>
          <p className="text-18 text-blue-B300">
            Lorem ipsum dolor sit amet consectetur adipiscing elit viverra fusce
            augue dignissim quis nisl penatibus etiam nisi nunc mauris sed id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDescriptions;
