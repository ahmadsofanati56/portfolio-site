import Lottie from "lottie-react";
import animationData from "../../public/images/lottie/coding.json";
import { greetings } from "~/portfolio";

import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import { SocialLinks } from "~/components/SocialLinks";
import { LiaFile } from "react-icons/lia";
import codingData from "../../public/images/lottie/coding.json";
import { useEffect } from "react";

export const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="pb-250 bg-gradient-to-r from-cyan-500 to-blue-500 ">
          <div className="">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col mt-10 px-0">
              <Row>
                <Col lg="6">
                  <h1 className="my-6 text-4xl font-bold text-white">
                    {greetings.title}
                  </h1>
                  <p className="text-xl/9 text-white">
                    {greetings.description}
                  </p>
                  <SocialLinks />
                  <button className=" btn btn-md my-0 inline-flex items-center bg-white text-center text-black opacity-90 shadow-md">
                    <LiaFile className="mr-3 inline-flex h-full w-5 " />
                    <span className="text-sm font-bold">SEE MY RESUME</span>
                  </button>
                </Col>
                <Col lg="5">
                  <Lottie animationData={codingData} className="md:h-50" />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

{
  /* // <div className="mt-12 flex flex-row">
  //   <div className=" mt-16 flex basis-1/2  flex-col">
  //     <h1 className=" mx-16  text-4xl font-bold text-black">
  //       {greetings.name}
  //     </h1>
  //     <p className="my-4 ml-16 mr-20 text-xl/9 ">{greetings.description}</p>
  //     <div className="join ml-16 mt-6 ">
  //       <Link href={"https://www.facebook.com/"}>
  //         <button className="join-item mx-2 ">
  //           <BsFacebook className="md:h-6 md:w-6" />
  //         </button>
  //       </Link>
  //       <Link href={""}>
  //         {" "}
  //         <button className="join-item mx-2">
  //           <BsLinkedin className="md:h-6 md:w-6" />
  //         </button>
  //       </Link>
  //       <Link href={""}>
  //         {" "}
  //         <button className="join-item mx-2">
  //           <BsInstagram className="md:h-6 md:w-6" />
  //         </button>
  //       </Link>
  //     </div>
  //     <div className="my-6 ml-16">
  //       <button className="btn btn-md">SEE MY RESUME</button>
  //     </div>
  //   </div>
  //   <div className="max-w-md basis-1/2">
  //     <Lottie animationData={animationData} loop={true} />
  //   </div>
  // </div>
} */
}
