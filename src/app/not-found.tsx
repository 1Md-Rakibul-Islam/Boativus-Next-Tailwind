import Image from "next/image";
import notFoundBG from "@/../public/images/notFound.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="bg-black">
      <section className="bg-primary-5 section-py">
        <div className="container min-h-screen flex lg:justify-start justify-center items-center flex-col">
          <Image
            draggable={false}
            src={notFoundBG}
            className="object-fit w-full gap-mb-40"
            alt="not-found"
          />
          <h2 className="text-24 text-white text-center">
            Oops, You Still Haven’t Found what you looking for
          </h2>
          <p className="text-16 text-white font-normal text-center gap-mb-32">
            Please note that all tasks and associated rewards are subject to
            availability and are limited in quantity.{" "}
          </p>
          <div className="flex-center w-full">
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
