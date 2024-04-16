import Link from "next/link";
import ScrollUp from "./ui/ScrollUp";
import CopenhagenTime from "./ui/LocalTime";

import LinkRotate from "./ui/LinkRotate";
import LinkHover from "./ui/LinkHover";

const Footer = () => {
  return (
    <footer
      className="overflow-hidden h-full bg-foreground  relative mx-auto w-10/12 max-w-[1280px] pb-10 sm:pb-20"
      id="contact"
    >
      <div className="hidden md:block h-[2px] bg-background w-full"></div>

      <div className="text-center lg:text-xl md:text-lg text-base mb-6">
        <LinkRotate
          linkText="Get in"
          linkTextTwo="touch"
          linkTextThree="with"
          linkRef="mailto:celena.veiga@live.dk"
        />
      </div>

      <div className="max-w-[1280px]">
        <div className="flex justify-between text-[35px] font-bold uppercase sm:text-[70px] md:text-[80px] lg:text-[110px] xl:text-[130px]">
          <p>Celena</p>
          <p>Veiga</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-10 mt-10 md:mt-20 lg:text-xl md:text-lg text-base">
        <div className="md:w-8/12">
          <p className="w-full text-background font-semibold">Navigation</p>

          <div className="h-[2px] bg-background mt-1 mb-4 md:mb-6"></div>

          <ul className="flex flex-col gap-4">
            <li>
              <LinkHover linkText="Home" linkRef="#" linkTarget="" />
            </li>
            <li>
              <LinkHover linkText="About Me" linkRef="#about" linkTarget="" />
            </li>
            <li>
              <LinkHover linkText="My Work" linkRef="#work" linkTarget="" />
            </li>
            <li>
              <LinkHover linkText="Contact" linkRef="#contact" linkTarget="" />
            </li>
          </ul>
        </div>

        <div className="md:w-1/3">
          <p className="w-full text-background font-semibold">Socials</p>

          <div className="h-[2px] bg-background mt-1 mb-4 md:mb-6"></div>

          <ul className="flex flex-col gap-4">
            <li>
              <LinkHover
                linkText="Linkedin"
                linkRef="https://www.linkedin.com/in/celena-nicole-faustino-sousa-veiga-3a0985294/"
                linkTarget="_blank"
              />
            </li>

            <li>
              <LinkHover
                linkText="Instagram"
                linkRef="https://www.instagram.com/celena__veiga/"
                linkTarget="_blank"
              />
            </li>
            <li>
              <LinkHover
                linkText="Facebook"
                linkRef="https://www.facebook.com/celena.v.smith"
                linkTarget="_blank"
              />
            </li>
          </ul>
        </div>

        <div className="md::w-1/3">
          <p className="w-full text-background font-semibold">Contact Me</p>

          <div className="h-[2px] bg-background mt-1 mb-4 md:mb-6"></div>

          <ul className="flex flex-col gap-4">
            <li>
              <LinkHover
                linkText="celena.veiga@live.dk"
                linkRef="mailto:celena.veiga@live.dk"
                linkTarget=""
              />
            </li>
            <li>
              <LinkHover
                linkText="+45 31 70 00 26"
                linkRef="tel: +45 31 70 00 26"
                linkTarget=""
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-end mt-32">
        <div className="w-[90%] flex justify-between items-end">
          <p className="text-xl sm:text-2xl md:text-4xl  font-bold w-1/3 sm:w-1/2">
            <span className="text-primaryaccent">©</span> 2024 <br /> Celena
            Veiga
          </p>
          <div className="w-1/2">
            <CopenhagenTime />
          </div>
        </div>

        <div className="w-[20%] border-red-400 translate-y-[-33px] translate-x-[-36px] sm:translate-x-4 md:translate-x-8 lg:translate-x-[60px] xl:translate-x-24">
          <ScrollUp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
