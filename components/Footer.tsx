import Link from "next/link";

const Footer = () => {
  return (
    <footer className='w-full h-screen bg-foreground border-t-[2px] border-background relative'>
      <div className='flex justify-between max-w-[1280px] mx-auto text-[164px] font-bold uppercase'>
        <div>Celena</div>
        <div>Veiga</div>
      </div>

      <div className='flex flex-col absolute bottom-0 w-full'>
        <div className='flex flexcol  '>
          <div className='border-y-[1px] border-background py-4 w-full'>
            <div className='max-w-[1280px] mx-auto flex justify-between'>
              <div className='w-1/2'>
                <a href='mailto:celena.veiga@live.dk'>celena.veiga@live.dk</a>
              </div>
              <div className='w-1/2 uppercase'>
                <Link href='/'>Home</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flexcol  '>
          <div className='border-b-[1px] border-background py-4 w-full'>
            <div className='max-w-[1280px] mx-auto flex justify-between'>
              <div className='w-1/2'>
                <a href='tel:+4531700026'>+45 31 70 00 26</a>
              </div>
              <div className='w-1/2 uppercase'>
                <Link href='/'>Her Work</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flexcol '>
          <div className='border-b-[1px] border-background py-4 w-full'>
            <div className='max-w-[1280px] mx-auto flex justify-between'>
              <div className='w-1/2'></div>
              <div className='w-1/2 uppercase'>
                <Link href='/'>About Her</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flexcol '>
          <div className='border-b-[1px] border-background py-4 w-full'>
            <div className='max-w-[1280px] mx-auto flex justify-between'>
              <div className='w-1/2'></div>
              <div className='w-1/2 uppercase'>
                <Link href='/'>Contact Her</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-end bg-background text-white py-4 w-full'>
          <div className='max-w-[1280px] mr-20'>
            <p>( FILMFOLIO - 2024©)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
