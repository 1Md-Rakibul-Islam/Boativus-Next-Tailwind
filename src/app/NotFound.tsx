import { ArrowCircleRight } from "@phosphor-icons/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <section className="min-h-screen flex-center section-py bg-[url('../media/images/notFound.png')] bg-center bg-cover">
        <div className="container text-center text-white">
          <h1 className="xl:text-[262px] lg:text-[240px] md:text-[200px] sm:text-[160px] text-[100px] font-playfair font-bold">
            404
          </h1>
          <h2 className="text-57 gap-mb-40">Oops, Something Went Wrong !</h2>
          <Link
            href="/"
            className="btn bg-blue-B400 hover:bg-brown-B300 text-white hover:text-blue-B900 inline-flex items-center gap-2"
          >
            Back to Home
            <ArrowCircleRight className="icon-24" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
