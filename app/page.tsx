//Component Imports
import Header from "@/components/Header";
import ProjectGallery from "@/components/ProjectGallery";
import Index from "@/components/SmoothGallery";

// UI Imports
import ScrollArrow from "@/components/ui/ScrollArrow";
import Image from "next/image";

export default function Home() {
  return (
    <main className=''>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='h-[250vh] relative z-[-1]'>
        <div className='sticky inset-0 w-screen h-screen'>
          <video
            autoPlay
            muted
            loop
            preload='/videoer/bg-video.mp4'
            className='object-cover'
          >
            <source src='/videoer/bg-video.mp4' type='video/mp4' />
          </video>
          <div className='absolute bg-background inset-0 w-full h-full opacity-45'></div>
          <ScrollArrow />
        </div>
      </section>

      <section className='h-[330vh] relative'>
        {/* About Her Section */}
        <div className='sticky overflow-hidden h-screen top-0'>
          <div className='max-w-[1280px] mx-auto mt-24'>
            <div className='w-4/12 relative'>
              <h2 className='font-light uppercase text-lg w-full pb-10'>
                Get to know <span className='text-primaryaccent'>her</span>
              </h2>
            </div>

            <div className='flex justify-between'>
              <div className='w-4/12'>
                <div className='w-[31vw] h-[71vh] rounded-xl relative'>
                  <Image
                    src='/billeder/portrait.jpg'
                    alt='portrait of Celena Veiga'
                    fill
                    className='object-cover rounded-xl'
                  />
                </div>
              </div>

              <div className='w-7/12 m-[-1%]'>
                <p className='text-[32px] font-semibold pb-14'>
                  Celena is a passionate Director, Screenwriter and Video
                  Journalist from Copenhagen. She is studying at the Danish
                  School of Media and journalism and has completed a course at.
                </p>

                <div className='flex text-sm'>
                  <h4 className='w-5/12 font-semibold'>
                    Why should we work <br />
                    together?
                  </h4>
                  <div className='w-7/12 flex flex-col gap-11 justify-between'>
                    <p>
                      - In an industry filled with superficial entertainment,
                      the demand for authentic, genuine, and emotionally
                      resonant storytelling is evident. My ability to tell
                      stories that connect with the audience on a deeper
                      emotional level will fill a void in the market in need of
                      someone who can meet the demand.
                    </p>

                    <p>
                      Through visual storytelling that appeals to universal
                      emotions, I aspire to unite humanity and erase feelings of
                      loneliness. My mission is to create authentic, inclusive,
                      and sensuous stories that celebrate diversity, and
                      challenge the norm, leaving a positive, lasting impact on
                      the world.
                    </p>

                    <div>
                      <button className='underline underline-offset-8'>
                        Learn more{" "}
                        <span className='text-primaryaccent'>about</span> me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Work Section */}
        <div className='absolute bottom-0 w-full bg-background z-10 text-white'>
          <ProjectGallery />
        </div>
      </section>

      {/* Gallery Section */}
      <Index />
    </main>
  );
}
