import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full h-[55%] z-20'>
      <div className=' bg-foreground pt-10 pb-44'>
        <div className='flex justify-between max-w-[1280px] mx-auto uppercase'>
          <div>
            <p>
              ( Filmfolio - 2024<span className='text-primaryaccent'>©</span>)
            </p>
            <p>Celena Veiga - Copenhagen</p>
          </div>

          <nav>
            <ul className='flex gap-8 transition-all'>
              <li>
                <Link href='/' className='hover:text-gray-500'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/' className='hover:text-gray-500'>
                  About her
                </Link>
              </li>
              <li>
                <Link href='/' className='hover:text-gray-500'>
                  Her work
                </Link>
              </li>
              <li>
                <Link href='/' className='hover:text-gray-500'>
                  Contact her
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Masked Text Element */}
      <div className='knockout'>
        <svg className='knockout-text-container' width='100%' height='100%'>
          <rect
            className='knockout-text-bg'
            width='100%'
            height='100%'
            fill='#D9D9D9'
            x='0'
            y='0'
            fill-opacity='1'
            mask='url(#knockout-text)'
          />

          <mask id='knockout-text'>
            <rect width='100%' height='100%' fill='#fff' x='0' y='0' />
            <text
              x='28%'
              y='70%'
              fill='#000'
              text-anchor='middle'
              className='text-[164px] font-bold'
            >
              Celena
            </text>
            <text
              x='77%'
              y='70%'
              fill='#000'
              text-anchor='middle'
              className='text-[164px] font-bold'
            >
              Veiga
            </text>
          </mask>
        </svg>
      </div>
    </header>
  );
};

export default Header;
