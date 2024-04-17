"use client";
import ProjectGallery from "@/components/ProjectGallery";
import Index from "@/components/SmoothGallery";

// UI Imports
import ScrollArrow from "@/components/ui/ScrollArrow";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import LinkRotate from "@/components/ui/LinkRotate";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="w-full h-full">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-[150vh] sm:h-[200vh] relative w-full">
        <div className="sticky inset-0 w-full h-[100vh]">
          <video
            autoPlay
            muted
            loop
            preload="auto"
            className="w-full h-full object-cover"
            webkit-playsinline="true"
            playsInline
          >
            <source src="/videoer/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute bg-background inset-0 w-full h-full opacity-45"></div>

          <div className="absolute left-0 md:left-[85%] bottom-32 sm:bottom-24 text-white">
            <ScrollArrow />
          </div>
        </div>
      </section>

      <section
        className="h-[450vh] sm:h-[410vh] md:h-[485vh] lg:h-[460vh] relative"
        id="about"
      >
        {/* About Her Section */}
        <div className="sticky overflow-hidden h-full lg:h-screen top-0">
          <div className="max-w-[1280px] mx-auto mt-24 w-10/12 md:px-2">
            <div className="w-5/12 relative">
              <h2 className="font-light uppercase text-lg w-full pb-10">
                Get to <span className="text-primaryaccent">know</span> me
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-20">
              <div className="w-full h-[60vh] rounded-xl relative lg:w-4/12">
                <img
                  src="/billeder/portrait.png"
                  alt="portrait of Celena Veiga"
                  className="object-cover rounded-xl absolute inset-0 w-full h-full"
                />
              </div>

              <div className="lg:w-8/12">
                <p
                  className="text-xl
                sm:text-2xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl  font-semibold pb-16"
                >
                  I am an ambitious, passionate, curious and creative
                  Storyteller, Director, Videojournalist and Screenwriter from
                  Copenhagen. Currently, I am studying TV and Media Production
                  at the Danish School of Media and journalism in Copenhagen.
                </p>

                <div className="flex text-sm gap-4 lg:gap-6 ">
                  <h4 className="w-3/12 sm:w-4/12 lg:w-2/12 xl:w-4/12 font-semibold text-base">
                    Why choose me?
                  </h4>
                  <div className="w-8/12 sm:w-8/12 md:w-8/12 lg:w-10/12 xl:w-8/12">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col md:flex-row gap-10 lg:gap-6 justify-between">
                        <p>
                          - Through visual storytelling that appeals to
                          universal emotions, I aspire to unite people and erase
                          feelings of loneliness. My mission is to create
                          authentic, inclusive, and sensuous stories that
                          celebrate diversity, and challenge the norm, leaving a
                          positive, lasting impact.
                        </p>

                        <p>
                          I am a visually-minded storyteller with excellent
                          communication skills and a good sense for connecting
                          with people on a deeper level. Always being eager to
                          improve and develop, I am certainly not afraid to dig
                          deep and search for the new, uncomfortable, beautiful
                          and sometimes hurtful places with my work, as I
                          strongly believe these places to be the origin of the
                          greatest stories.
                        </p>
                      </div>
                    </div>

                    <div className="text-base">
                      <LinkRotate
                        linkText="Download"
                        linkTextTwo="CV"
                        linkTextThree=""
                        linkRef="/downloadable/Celena-Veiga-CV.pdf"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Work Section */}
        <div
          id="work"
          className="absolute bottom-0 w-full bg-background z-10 text-white overflow-x-hidden"
        >
          <ProjectGallery />
        </div>
      </section>

      {/* Gallery Section */}
      <Index />
    </main>
  );
}
