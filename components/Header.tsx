import LinkHover from "./ui/LinkHover";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full h-[55%] z-20">
      <div className=" bg-foreground pt-4 md:pt-8 pb-24 lg:pb-46">
        <div className="flex justify-between max-w-[1280px] mx-auto uppercase w-10/12 text-sm md:text-base lg:text-lg">
          <div>
            <p>
              ( Filmfolio - 2024<span className="text-primaryaccent">©</span>)
            </p>
            <p>Celena Veiga - Copenhagen</p>
          </div>

          <nav>
            <ul className="gap-10 transition-all hidden md:flex">
              <li>
                <LinkHover linkText="About Me" linkRef="#about" linkTarget="" />
              </li>
              <li>
                <LinkHover linkText="My Work" linkRef="#work" linkTarget="" />
              </li>
              <li>
                <LinkHover
                  linkText="Contact Me"
                  linkRef="#contact"
                  linkTarget=""
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Masked Text Element */}
      <div className="knockout text-[40px] sm:text-[75px] md:text-[90px] lg:text-[120px] xl:text-[140px] font-bold">
        <svg className="knockout-text-container" width="100%" height="100%">
          <rect
            className="knockout-text-bg"
            width="100%"
            height="100%"
            fill="#D9D9D9"
            x="0"
            y="0"
            fill-opacity="1"
            mask="url(#knockout-text)"
          />

          <mask id="knockout-text">
            <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
            dib
            <text x="28%" y="70%" fill="#000" text-anchor="middle">
              Celena
            </text>
            <text x="77%" y="70%" fill="#000" text-anchor="middle">
              Veiga
            </text>
          </mask>
        </svg>
      </div>
    </header>
  );
};

export default Header;
